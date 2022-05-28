package product.core.cart.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class CartNotFountException extends RuntimeException {
    public CartNotFountException(String message) {
        super(message);
    }
}