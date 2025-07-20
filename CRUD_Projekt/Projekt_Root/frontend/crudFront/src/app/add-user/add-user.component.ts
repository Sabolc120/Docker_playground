import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-add-user',
  imports: [FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

  newUser = {
    name: '',
    email: '',
    phone: ''
  };
  constructor(private Serviceservice: ServiceService, private router: Router){}

  submitForm(form: any){
    this.addUser(this.newUser);
  }
  addUser(user: any){
    this.Serviceservice.addUser(user).subscribe(
      (response: any) =>{
        console.log("User added", response);
        this.router.navigate(['/'])
      },
      (err) =>{
        console.log("Error adding user", err);
        
      }
    )
  }
}
