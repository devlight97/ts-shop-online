package product.core.product;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.domain.Page;

import product.core.post.PostEntity;

public class ProductDto {
    public static class CreateProductRequest {
        public String name;
        public String brief;
        public int price;
        public int quantity;
        public String pictureUrl;
        public int createdBy;
        public String brand;

        public CreateProductRequest(String name, String brief, int price, int quantity, String pictureUrl,
                int createdBy, String brand) {
            this.name = name;
            this.brief = brief;
            this.price = price;
            this.quantity = quantity;
            this.pictureUrl = pictureUrl;
            this.createdBy = createdBy;
            this.brand = brand;
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

    public static class PostDto {
        public int id;
        public String title;
        public String content;
        public String pictureUrl;

        public PostDto() {
        }

        public static PostDto from(PostEntity post) {
            PostDto postDto = new PostDto();
            postDto.id = post.getId();
            postDto.content = post.getContent();
            return postDto;
        }
    }

    public static class ProductDetailDto {
        public int id;
        public String name;
        public String brief;
        public int price;
        public int postId;
        public int quantity;
        public String pictureUrl;
        public String brand;
        public PostDto post;

        public ProductDetailDto() {
        }

        public static ProductDetailDto from(ProductEntity product, PostEntity post) {
            PostDto postDto = PostDto.from(post);
            postDto.id = post.getId();
            postDto.title = post.getTitle();
            postDto.content = post.getContent();
            postDto.pictureUrl = post.getPictureUrl();

            ProductDetailDto productDto = new ProductDetailDto();
            productDto.id = product.getId();
            productDto.brief = product.getBrief();
            productDto.brand = product.getBrand();
            productDto.name = product.getName();
            productDto.pictureUrl = product.getPictureUrl();
            productDto.price = product.getPrice();
            productDto.quantity = product.getQuantity();
            productDto.post = postDto;

            return productDto;
        }
    }

    public static ProductEntity toEntity(CreateProductRequest productRequest) {
        ProductEntity product = new ProductEntity();
        product.setName(productRequest.name);
        product.setBrief(productRequest.brief);
        product.setQuantity(productRequest.quantity);
        product.setPictureUrl(productRequest.pictureUrl);
        product.setPrice(productRequest.price);
        product.setBrand(productRequest.brand);
        return product;
    }

    public static List<CreateProductRequest> toDto(Page<ProductEntity> productEntities) {
        List<CreateProductRequest> products = new ArrayList<CreateProductRequest>();
        for (ProductEntity product : productEntities) {
            System.out.println("test: " + product.getName());
            products.add(new CreateProductRequest(product.getName(), product.getBrief(), product.getPrice(),
                    product.getQuantity(), product.getPictureUrl(), product.getCreatedBy(), product.getBrand()));
        }

        return products;
    }
}
