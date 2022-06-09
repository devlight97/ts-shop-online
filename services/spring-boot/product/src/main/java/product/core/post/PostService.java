package product.core.post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import product.core.post.PostDto.CreatePostRequest;
import product.core.post.exceptions.PostAlreadyExisted;

@Service
public class PostService {
    @Autowired
    private PostRepository repo;

    public void create(CreatePostRequest postRequest) {
        PostEntity postExisting = this.repo.findByProductId(postRequest.productId);
        if (postExisting != null) {
            throw new PostAlreadyExisted("post_already_existed");
        }

        PostEntity post = new PostEntity();
        post.setContent(postRequest.content);
        post.setProductId(postRequest.productId);
        post.setTitle(postRequest.title);
        post.setPictureUrl(postRequest.pictureUrl);
        this.repo.save(post);
    }
}
