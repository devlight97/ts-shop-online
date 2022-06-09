package product.core.product;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ProductRepository extends JpaRepository<ProductEntity, Integer> {
    @Query(value = "SELECT * FROM products WHERE brand LIKE %?1%", nativeQuery = true)
    Page<ProductEntity> findByBrand(String brand, Pageable pageable);
}
