package product.core.post.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class PostAlreadyExisted extends RuntimeException {
    public PostAlreadyExisted(String message) {
        super(message);
    }
}