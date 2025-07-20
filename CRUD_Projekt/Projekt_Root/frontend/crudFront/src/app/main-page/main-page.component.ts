import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-main-page',
  imports: [CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  constructor(private Serviceservice: ServiceService, private router:Router){ }


  userDetails: any[] | null = null;

  userGet = {
    id:1,
    name:"",
    email:"",
    phone:""
  }
  ngOnInit(): void {
    this.getUsers();
    
  }
  public getUsers(){
    this.Serviceservice.listAllUsers().subscribe(
      (resp:any) =>{

        this.userDetails = resp
        console.log(this.userDetails);
        
        for(let index = 0; index < this.userDetails!.length; index++){
          this.userGet.id = resp[index].id,
          this.userGet.name = resp[index].name,
          this.userGet.email = resp[index].email,
          this.userGet.phone = resp[index].phone
        }
      },
      (err) =>{
        console.log(err);
      }
    )
  }
  deleteUser(userId: number){
    this.Serviceservice.deleteUser(userId).subscribe(
      (response) =>{
        console.log("Felhasználó törölve lett");
      },
      (err) =>{
        console.log("Error");
      }
    );
  }
  goToEditPage(userId: number) {
    this.router.navigate(['/edit-page', userId]);  // Navigálás
  }
  goToAddNewUser(){
    this.router.navigate(['/add-page']);
  }
}
