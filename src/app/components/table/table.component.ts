import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../services/global.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(public service: GlobalService) {
  }


  ngOnInit(): void {
    // this.service.getUsers().subscribe((res: any) => {
      this.service.users = [];
    // })
  }

  delete(id: number) {
    this.service.users = this.service.users.filter(f => f.id != id);
  }

  edit(user: User) {
    this.service.user = user;
    this.service.openDialog();
  }
}
