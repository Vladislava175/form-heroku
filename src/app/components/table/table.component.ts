import {Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {GlobalService} from "../../services/global.service";
import {FormComponent} from "../form/form.component";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private service: GlobalService) {
  }

  users: any[];

  ngOnInit(): void {
    this.service.getUsers().subscribe((res: any) => {
      this.users = JSON.parse(res);
    })
  }

  delete(id: number) {
    this.users = this.users.filter(f => f.id != id);
  }


}
