import { Component, OnInit } from '@angular/core';
import {FormComponent} from "../form/form.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(FormComponent);
  }
}