package product.core.product;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import product.core.product.dtos.ProductDto.CreateProductRequest;

@RestController
@RequestMapping("product")
public class ProductController {
    public static class ProductRequest {
        public String name;
        public String brief;
    }

    // @Autowired
    // TestService service;

    @GetMapping("view")
    public ResponseEntity<String> getProductView() {
        // TestUser user = this.service.getTestUser();
        String result = "product list";
        return ResponseEntity.ok(result);
    }

    @GetMapping("view/{id}")
    public ResponseEntity<String> getProductDetail(@PathVariable("id") String id) {
        // TestUser user = this.service.getTestUser();
        String result = "product id: " + id;
        return ResponseEntity.ok(result);
    }

    @PostMapping(value = "")
    public ResponseEntity<String> createProduct(@RequestBody() CreateProductRequest product) {
        String result = "Created product success: " + product.name + product.brief + product.price + product.postId;
        return ResponseEntity.ok(result);
    } 
}
