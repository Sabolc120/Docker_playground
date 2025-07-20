package crud.basics.crud.Repositories;

import crud.basics.crud.Models.user_model;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface userRepo extends JpaRepository<user_model, Long> {

    @Query(value = "SELECT * FROM user_table", nativeQuery = true)
    List<user_model> queryAllUsers();

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM user_table WHERE id = :id", nativeQuery = true)
    void deleteById(@Param(value="id") Long id);

    @Transactional
    @Modifying
    @Query(value = "UPDATE user_table SET email = :email, name = :name, phone = :phone WHERE id = :id", nativeQuery = true)
    public void updateUser(@Param(value = "email")String email, @Param(value="name") String name, @Param("phone") String phone, @Param("id") Long id);

    @Query(value = "SELECT * FROM user_table WHERE id = :id", nativeQuery = true) //Spring Boot JPA Valamilyen oknál fogva, kizárólag Optionalként tudja működteni a saját findById metódusát ami itt nem lenne jó.
    user_model findByCustomeId(@Param(value="id") Long id);


}
