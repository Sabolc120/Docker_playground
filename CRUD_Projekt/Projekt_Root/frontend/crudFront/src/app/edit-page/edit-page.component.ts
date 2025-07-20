import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { __param } from 'tslib';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-edit-page',
  imports: [FormsModule],
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.css'
})
export class EditPageComponent {
  constructor(private Serviceservice: ServiceService, private route: ActivatedRoute, private router: Router){}
  getUser= {
    id: 1,
    name: "",
    email:"",
    phone:""
  }
  ngOnInit(){
    this.route.params.subscribe(params => {
      this.getUser.id = params['id'];
      this.loadUserData();
    })
  }
  loadUserData() {
    this.Serviceservice.getUserById(this.getUser.id).subscribe(
      (resp:any) =>{
        console.log(resp);
        
        this.getUser.id = resp.id;
        this.getUser.name = resp.name;
        this.getUser.email = resp.email;
        this.getUser.phone = resp.phone;
      },
      (err) =>{
        console.log(err);
      }
    )
  }
  submitForm(form: any){
    this.getUser.id = this.getUser.id,
    this.getUser.name = form.value.name,
    this.getUser.email = form.value.email;
    this.getUser.phone = form.value.phone;

    return this.editUser(this.getUser, this.getUser.id)
  }
  public editUser(user: any, userId: number){
    this.Serviceservice.updateUser(user, userId).subscribe(
      (resp:any) =>{
        console.log(resp)


      },
      (err) =>{
        console.log(err);
      }
    )
  }
}

