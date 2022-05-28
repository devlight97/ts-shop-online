package product.core.product;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.domain.Page;

public class ProductDto {
    public static class CreateProductRequest {
        public String name;
        public String brief;
        public int price;
        public int postId;
        public int quantity;
        public int pictureId;
        public int createdBy;

        public CreateProductRequest(String name, String brief, int price, int postId, int quantity, int pictureId,
                int createdBy) {
            this.name = name;
            this.brief = brief;
            this.price = price;
            this.postId = postId;
            this.quantity = quantity;
            this.pictureId = pictureId;
            this.createdBy = createdBy;
        }
    }

    public static class ProductViewDto {
        public int totalPage;
        public List<ProductEntity> products;

        public ProductViewDto(int totalPage, List<ProductEntity> products) {
            this.totalPage = totalPage;
            this.products = products;
        }
    }

    public static ProductEntity toEntity(CreateProductRequest productRequest) {
        ProductEntity product = new ProductEntity();
        product.setName(productRequest.name);
        product.setBrief(productRequest.brief);
        product.setQuantity(productRequest.quantity);
        product.setPictureId(productRequest.pictureId);
        product.setPrice(productRequest.price);
        return product;
    }

    public static List<CreateProductRequest> toDto(Page<ProductEntity> productEntities) {
        List<CreateProductRequest> products = new ArrayList<CreateProductRequest>();
        for (ProductEntity product : productEntities) {
            System.out.println("test: " + product.getName());
            products.add(new CreateProductRequest(product.getName(), product.getBrief(), product.getPrice(),
                    product.getPostId(), product.getQuantity(), product.getPictureId(), product.getCreatedBy()));
        }

        return products;
    }
}
