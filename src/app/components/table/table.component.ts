import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../services/global.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private service: GlobalService) {
  }

  users: User[];

  ngOnInit(): void {
    this.service.getUsers().subscribe((res: any) => {
      this.users = JSON.parse(res) as User[];
    })
  }

  delete(id: number) {
    this.users = this.users.filter(f => f.id != id);
  }


}
