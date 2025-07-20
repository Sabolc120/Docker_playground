package crud.basics.crud.Controllers;


import crud.basics.crud.Models.user_model;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class userController {

    @Autowired
    private crud.basics.crud.Services.UserService userService;

    @GetMapping("/getUsers")
    public List<user_model> getUsers(){
        return userService.getAllUsers();
    }
    @DeleteMapping("/deleteUser")
    public void deleteUser(@RequestParam(value="userId") Long userId){
        userService.deleteUser(userId);
    }
    @GetMapping("/getUser")
    public Optional<user_model> getUserById(@RequestParam(value = "userId") Long userId){
        return userService.getUserById(userId);
    }
    @CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.OPTIONS})
    @PutMapping("/updateUser")
    public user_model updateUser(@RequestBody user_model User_Model, @RequestParam(value = "userId") Long userId){
        return userService.updateUser(User_Model, userId);
    }
    @CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.OPTIONS})
    @PostMapping("/addUser")
    public user_model addUser(@RequestBody user_model User_Model){
        return userService.addUser(User_Model);
    }
}
