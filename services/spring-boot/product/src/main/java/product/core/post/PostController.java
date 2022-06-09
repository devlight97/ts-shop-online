package product.core.post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import product.core.post.PostDto.CreatePostRequest;

@RestController
@RequestMapping("post")
public class PostController {
    @Autowired
    PostService service;

   @PostMapping("")
   public void create(@RequestBody() CreatePostRequest createPostRequest) {
       this.service.create(createPostRequest);
   }

//    public ResponseEntity<OrderEntity> createOrder() {}
}