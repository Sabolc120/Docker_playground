import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { AddUserComponent } from './add-user/add-user.component';

export const routes: Routes = [
    {path: "", component:MainPageComponent},
    {path: 'edit-page/:id', component: EditPageComponent},
    {path: 'add-page', component: AddUserComponent}
];
