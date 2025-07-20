package crud.basics.crud.Services;

import crud.basics.crud.Models.user_model;
import crud.basics.crud.Repositories.userRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private userRepo UserRepo;

    public List<user_model> getAllUsers(){
        return UserRepo.queryAllUsers();
    }
    public void deleteUser(Long userId){
        UserRepo.deleteById(userId);
    }
    public Optional<user_model> getUserById(Long id){
        return UserRepo.findById(id);
    }
    public user_model updateUser(user_model UserModel, Long userId){
        user_model findUser = UserRepo.findByCustomeId(userId); //Cheat nagyon hacker, átugrok a beépített metóduson...
        findUser.setName(UserModel.getName());
        findUser.setEmail(UserModel.getEmail());
        findUser.setPhone(UserModel.getPhone());

        return UserRepo.save(findUser);
    }
    public user_model addUser(user_model UserModel){
        return UserRepo.save(UserModel);
    }
}
