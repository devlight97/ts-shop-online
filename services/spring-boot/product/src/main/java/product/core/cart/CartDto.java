package product.core.cart;

import java.util.List;

public class CartDto {
    public static class ProductCartDto {
        private int id;
        private String name;
        private String brief;
        private int price;
        private int count;
        private int pictureId;

        public ProductCartDto() {
        }

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getBrief() {
            return brief;
        }

        public void setBrief(String brief) {
            this.brief = brief;
        }

        public int getPrice() {
            return price;
        }

        public void setPrice(int price) {
            this.price = price;
        }

        public int getCount() {
            return count;
        }

        public void setCount(int count) {
            this.count = count;
        }

        public int getPictureId() {
            return this.pictureId;
        }

        public void setPictureId(int pictureId) {
            this.pictureId = pictureId;
        }
    }

    public static class GetCartDto {
        private List<ProductCartDto> products;
        private int totalPrice;

        public GetCartDto(List<ProductCartDto> products) {
            this.products = products;

            for (ProductCartDto product : this.products) {
                this.totalPrice += product.price * product.count;
            }
        }

        public List<ProductCartDto> getProducts() {
            return products;
        }

        public void setProducts(List<ProductCartDto> products) {
            this.products = products;
        }

        public int getTotalPrice() {
            return totalPrice;
        }

        public void setTotalPrice(int totalPrice) {
            this.totalPrice = totalPrice;
        }

    }

    public static class CreateCartDto {
        private String id;
        private List<ProductCartDto> products;

        public CreateCartDto() {
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
    }

    public static class AddProductCartDto {
        private String cartId;
        private ProductCartDto product;

        public String getCartId() {
            return cartId;
        }

        public void setCartId(String cartId) {
            this.cartId = cartId;
        }

        public ProductCartDto getProduct() {
            return product;
        }

        public void setProduct(ProductCartDto product) {
            this.product = product;
        }
    }

    public static class UpdateCartDto {
        private String id;
        private List<ProductCartDto> products;

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

    }
}
