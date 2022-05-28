package product.core.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import product.core.product.ProductDto.CreateProductRequest;
import product.core.product.ProductDto.ProductViewDto;

@RestController
@RequestMapping("product")
public class ProductController {
    public static class ProductRequest {
        public String name;
        public String brief;
    }

    @Autowired
    ProductService service;

    @GetMapping("view")
    public ResponseEntity<ProductViewDto> getProductView(
            @RequestParam("page") int page,
            @RequestParam("size") int size) {
        return ResponseEntity.ok(this.service.getView(page, size));
    }

    @GetMapping("view/{id}")
    public ResponseEntity<Object> getProductDetail(@PathVariable("id") int id) {
        return ResponseEntity.ok(this.service.getById(id));
    }

    @PostMapping(value = "")
    public ResponseEntity<ProductEntity> createProduct(@RequestBody() CreateProductRequest productRequest) {
        ProductEntity product = ProductDto.toEntity(productRequest);

        return ResponseEntity.ok(this.service.create(product));
    }

    @PutMapping("")
    public ResponseEntity<ProductEntity> updateProduct(@RequestBody() ProductEntity productRequest) {
        return ResponseEntity.ok(this.service.update(productRequest));
    }

    @DeleteMapping("{id}")
    public void deleteProduct(@PathVariable("id") int id) {
        this.service.deleteById(id);
    }
}
