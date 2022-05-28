package product.core.cart;

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

import product.core.cart.CartDto.AddProductCartDto;
import product.core.cart.CartDto.CreateCartDto;
import product.core.cart.CartDto.GetCartDto;
import product.core.cart.CartDto.ProductCartDto;
import product.core.cart.CartDto.UpdateCartDto;

@RestController
@RequestMapping("cart")
public class CartController {
    @Autowired
    private CartService service;

    @PostMapping()
    public ResponseEntity<CreateCartDto> createCart(@RequestBody() ProductCartDto product) {
        return ResponseEntity.ok(this.service.create(product));
    }

    @GetMapping("{id}")
    public ResponseEntity<GetCartDto> getCart(@PathVariable("id") String id) {
        return ResponseEntity.ok(this.service.get(id));
    }

    @PutMapping()
    public void updateCart(@RequestBody UpdateCartDto cart) {
        this.service.updateCart(cart.getId(), cart.getProducts());
    }

    @PostMapping("product")
    public void addToCart(@RequestBody AddProductCartDto productDto) {
        this.service.addToCart(productDto.getCartId(), productDto.getProduct());
    }

    @DeleteMapping("product/{id}")
    public void deleteFromCart(@PathVariable("id") int productId, @RequestParam("cart_id") String cartId) {
        this.service.deleteFromCart(productId, cartId);
    }
}
