package product.core.cart;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import product.core.cart.CartDto.CreateCartDto;
import product.core.cart.CartDto.GetCartDto;
import product.core.cart.CartDto.ProductCartDto;
import product.core.cart.exceptions.CartNotFountException;

@Service
public class CartService {
    private HashMap<String, List<ProductCartDto>> cart = new HashMap<>();

    public CreateCartDto create(ProductCartDto product) {
        String cartId = UUID.randomUUID().toString();
        List<ProductCartDto> products = new ArrayList<>();
        products.add(product);
        this.cart.put(cartId, products);

        CreateCartDto cartDto = new CreateCartDto();
        cartDto.setId(cartId);
        cartDto.setProducts(products);

        return cartDto;
    }

    public void addToCart(String cartId, ProductCartDto product) {
        List<ProductCartDto> products = this.cart.get(cartId);
        boolean isAdd = true;

        if (products == null) {
            throw new CartNotFountException("Not Found ID: " + cartId);
        }

        for (ProductCartDto productDto : products) {
            if (productDto.getId() == product.getId()) {
                isAdd = false;
            }
        }

        if (isAdd) {
            products.add(product);
            this.cart.put(cartId, products);
        }
    }

    public GetCartDto get(String id) {
        List<ProductCartDto> products = this.cart.get(id);
        if (products == null) {
            throw new CartNotFountException("Not Found Cart ID: " + id);
        }

        return new GetCartDto(products);
    }

    public void deleteFromCart(int productId, String cartId) {
        List<ProductCartDto> products = this.cart.get(cartId);
        if (products == null) {
            throw new CartNotFountException("Not Found Cart ID: " + cartId);
        }
        for (int i = 0; i < products.size(); i++) {
            if (products.get(i).getId() == productId) {
                products.remove(i);
                break;
            }
        }
    }

    public void updateCart(String id, List<ProductCartDto> products) {
        this.cart.put(id, products);
    }
}
