import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../models/user";
import {FormComponent} from "../components/form/form.component";
import {MatDialog} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  userForm: FormGroup;
  user: User | null;
  users: User[];

  constructor(private http: HttpClient, private dialog: MatDialog) {
  }


  getUsers() {
 //  return this.http.get('https://vlada-tutorial--heroku.herokuapp.com/random-users')
  }

  openDialog() {
    let ref = this.dialog.open(FormComponent, {
      disableClose: true
    });
    ref.afterClosed().subscribe(() => {
      this.user = null;
    })
  }

  init() {
    this.userForm = new FormGroup({
      id: new FormControl(this.user ? this.user.id : ''),
      first_name: new FormControl(this.user ? this.user.first_name : ''),
      last_name: new FormControl(this.user ? this.user.last_name : ''),
      avatar: new FormControl(this.user ? this.user.avatar : ''),
      date_of_birth: new FormControl(this.user ? this.user.date_of_birth : ''),
      email: new FormControl(this.user ? this.user.email : ''),
      gender: new FormControl(this.user ? this.user.gender : ''),
      phone_number: new FormControl(this.user ? this.user.phone_number : ''),
      social_insurance_number: new FormControl(this.user ? this.user.social_insurance_number : ''),
      username: new FormControl(this.user ? this.user.username : ''),
      country: new FormControl(this.user ? this.user.address.country : ''),
      city: new FormControl(this.user ? this.user.address.city : ''),
      street_name: new FormControl(this.user ? this.user.address.street_name : ''),
    })
  }

  editList() {
    let updateUser = this.users.find(f => f.id === this.userForm.value.id);
    if (updateUser) {
      let index = this.users.indexOf(updateUser);
      this.users[index] = this.userForm.getRawValue();
    } else {
      const ids = this.users.map(user => user.id);
      let max = Math.max.apply(null, ids);
      this.userForm.patchValue({id: max});
      this.users.push(this.userForm.getRawValue());
    }
    this.user = null;
  }
}
