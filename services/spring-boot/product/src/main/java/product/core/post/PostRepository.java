package product.core.post;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PostRepository extends JpaRepository<PostEntity, Integer> {
    @Query(value="SELECT * FROM posts WHERE product_id = ?1", nativeQuery=true)
    public PostEntity findByProductId(int productId);
}
