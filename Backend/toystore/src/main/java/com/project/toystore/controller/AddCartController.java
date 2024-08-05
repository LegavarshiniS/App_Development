// package com.project.toystore.controller;


// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RestController;

// import com.project.toystore.model.AddCart;
// import com.project.toystore.services.AddCartService;

// @RestController
// public class AddCartController {
//     @Autowired
//     AddCartService as;
//     @PostMapping("/post/categorytype")
//     public ResponseEntity<AddCart>addelements(@RequestBody AddCart a)
//     {
//         AddCart ast=as.create(a);
//         return new ResponseEntity<>(ast,HttpStatus.CREATED);
//     }
//     @GetMapping("/get/categorytype")
//     public ResponseEntity<List<AddCart>> showinfo()
//     {
//         return new ResponseEntity<>(as.getAll(),HttpStatus.OK);
//     }
//     @GetMapping("/get/categorytype/{cid}")
//     public ResponseEntity<AddCart> getById(@PathVariable Integer cid)
//     {
//         AddCart obj=as.getId(cid);
//         return new ResponseEntity<>(obj,HttpStatus.OK);
//     }
//     @PutMapping("/put/{cid}")
//     public ResponseEntity<AddWish> putMethodName(@PathVariable("cid") int cid, @RequestBody AddCart a) {
//         if(as.update(cid,a) == true)
//         {
//             return new ResponseEntity<>(a,HttpStatus.OK);
//         }
        
//         return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
//     }
//     @DeleteMapping("/delete/{cid}")
//     public ResponseEntity<Boolean> delete(@PathVariable("cid") int cid)
//     {
//         if(as.delete(cid) == true)
//         {
//             return new ResponseEntity<>(true,HttpStatus.OK);
//         }
//         return new ResponseEntity<>(false,HttpStatus.NOT_FOUND);
//     }
   
// }