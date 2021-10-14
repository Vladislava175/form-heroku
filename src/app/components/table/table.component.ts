import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../services/global.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private service: GlobalService) {
  }

  users: any;

  ngOnInit(): void {
    this.service.getUsers().subscribe((res:any) => {
      debugger
      this.users = JSON.parse(res);
    })
  }

}
