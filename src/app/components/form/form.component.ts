import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../services/global.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  genders = ["Non-binary", "Male", "Female", "Genderfluid", "Agender", "Polygender", "Genderqueer", "Bigender"];

  url: any;
  msg = "";
  constructor(public service: GlobalService) {
  }

  ngOnInit(): void {
    this.service.init();
  }
  //selectFile(event) { //Angular 8
  selectFile(event: any) { //Angular 11, for stricter type
    if(!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select an image';
      return;
    }

    let mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = "Only images are supported";
      return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg = "";
      this.url = reader.result;
      this.service.userForm.patchValue({avatar:this.url});
    }
  }
}
