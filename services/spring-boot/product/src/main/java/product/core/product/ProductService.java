package product.core.product;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;
import jakarta.transaction.Transactional;
import product.core.post.PostEntity;
import product.core.post.PostRepository;
import product.core.product.ProductDto.ProductDetailDto;
import product.core.product.ProductDto.ProductViewDto;
import product.core.product.exceptions.ProductNotFoundException;

@Transactional
@Service
public class ProductService {
    @Autowired
    private ProductRepository repo;

    @Autowired
    private PostRepository postRepo;

    @PersistenceContext
    EntityManager entityManager;

    public ProductEntity create(ProductEntity product) {
        return this.repo.save(product);
    }

    public ProductViewDto getView(int page, int size, String brand) {
        Pageable pageable = PageRequest.of(page - 1, size);

        if (brand.equals("")) {
            Page<ProductEntity> productViewPage = this.repo.findAll(pageable);
            return new ProductViewDto(productViewPage.getTotalPages(), productViewPage.getContent());
        }

        Page<ProductEntity> productViewPage = this.repo.findByBrand(brand, pageable);
        return new ProductViewDto(productViewPage.getTotalPages(), productViewPage.getContent());
    }

    public ProductDetailDto getById(int id) {
        Optional<ProductEntity> productOpt = this.repo.findById(id);
        if (productOpt.isEmpty()) {
            throw new ProductNotFoundException("id: " + id);
        }

        ProductEntity product = productOpt.get();

        PostEntity post = this.postRepo.findByProductId(product.getId());

        return ProductDetailDto.from(product, post);
    }

    public ProductEntity update(ProductEntity newProduct) {
        Optional<ProductEntity> oldProductOpt = this.repo.findById(newProduct.getId());

        if (oldProductOpt.isEmpty()) {
            throw new ProductNotFoundException("id: " + newProduct.getId());
        }

        ProductEntity product = oldProductOpt.get();
        BeanUtils.copyProperties(newProduct, product);
        return product;
    }

    public void deleteById(int id) {
        if (this.repo.findById(id).isEmpty()) {
            throw new ProductNotFoundException("Not found id: " + id);
        }

        this.repo.deleteById(id);
    }

    public List<ProductEntity> getBrands() {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<ProductEntity> cq = cb.createQuery(ProductEntity.class);
        Root<ProductEntity> product = cq.from(ProductEntity.class);
        cq.select(product.get("brand"));
        cq.groupBy(product.get("brand"));
        TypedQuery<ProductEntity> query = entityManager.createQuery(cq);
        List<ProductEntity> products = query.getResultList();
        return products;
    }
}
