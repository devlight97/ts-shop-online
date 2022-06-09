package product.core.post;

public class PostDto {
   public static class CreatePostRequest {
       public String content;
       public int productId;
       public String title;
       public String pictureUrl;
   }
}
