import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";
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
   return this.http.get('https://vlada-tutorial--heroku.herokuapp.com/random-users')
  }

  openDialog() {
    let ref = this.dialog.open(FormComponent, {
      disableClose: true,
      panelClass:'dialog-responsive'
    });
    ref.afterClosed().subscribe(() => {
      this.user = null;
    })
  }

  init() {
    this.userForm = new FormGroup({
      id: new FormControl(this.user ? this.user.id : ''),
      first_name: new FormControl(this.user ? this.user.first_name : '', [Validators.required]),
      last_name: new FormControl(this.user ? this.user.last_name : '', [Validators.required]),
      avatar: new FormControl(this.user ? this.user.avatar : ''),
      date_of_birth: new FormControl(this.user ? this.user.date_of_birth : '', [Validators.required]),
      email: new FormControl(this.user ? this.user.email : '', [Validators.required, Validators.email]),
      gender: new FormControl(this.user ? this.user.gender : '', [Validators.required]),
      phone_number: new FormControl(this.user ? this.user.phone_number : '', [Validators.required]),
      social_insurance_number: new FormControl(this.user ? this.user.social_insurance_number : ''),
      username: new FormControl(this.user ? this.user.username : '')
    })
  }

  editList() {
    let updateUser = this.users.find(f => f.id === this.userForm.value.id);
    if (updateUser) {
      let index = this.users.indexOf(updateUser);
      this.users[index] = this.userForm.getRawValue();
    } else {
      const ids = this.users.map(user => user.id);
      // create max+1 id for new item before save in list
      let max = Math.max.apply(null, ids) + 1;

      this.userForm.patchValue({id: max});
      this.users.push(this.userForm.getRawValue());
    }
    this.user = null;
    this.dialog.closeAll();
  }
}
