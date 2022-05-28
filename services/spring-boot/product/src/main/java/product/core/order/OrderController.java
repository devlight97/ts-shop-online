package product.core.order;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("order")
public class OrderController {
   @GetMapping("view/{id}")
   public ResponseEntity<String> getOrderDetail(@PathVariable("id") int id) {
       return ResponseEntity.ok("get order detail: " + id);
   }

//    public ResponseEntity<OrderEntity> createOrder() {}
}
