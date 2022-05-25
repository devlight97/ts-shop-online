package product.core.product.dtos;

public class ProductDto {
    public static class CreateProductRequest {
        public String name;
        public String brief;
        public int price;
        public int postId;
    }
}
