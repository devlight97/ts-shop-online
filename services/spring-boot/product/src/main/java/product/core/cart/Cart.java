package product.core.cart;

import java.util.List;

import product.core.cart.CartDto.ProductCartDto;

public class Cart {
    private String id;
    private List<ProductCartDto> products;
    private int totalPrice;

    public Cart() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public List<ProductCartDto> getProducts() {
        return products;
    }

    public void setProducts(List<ProductCartDto> products) {
        this.products = products;
    }

    public int getTotalPrice() {
        int total = 0;

        for (ProductCartDto product : products) {
            total += product.getCount() * product.getPrice();
        }

        this.totalPrice = total;

        return this.totalPrice;
    }

    public void setTotalPrice(int totalPrice) {
        this.totalPrice = totalPrice;
    }

}
