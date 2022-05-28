package product.core.product;

import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import product.core.product.ProductDto.ProductViewDto;
import product.core.product.exceptions.ProductNotFoundException;

@Transactional
@Service
public class ProductService {
    @Autowired
    private ProductRepository repo;

    public ProductEntity create(ProductEntity product) {
        return this.repo.save(product);
    }

    public ProductViewDto getView(int page, int size) {
        Page<ProductEntity> productViewPage = this.repo.findAll(PageRequest.of(page - 1, size));
        return new ProductViewDto(productViewPage.getTotalPages(), productViewPage.getContent());
    }

    public ProductEntity getById(int id) {
        Optional<ProductEntity> productOpt = this.repo.findById(id);
        if (productOpt.isEmpty()) {
            throw new ProductNotFoundException("id: " + id);
        }
        return productOpt.get();
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
}
