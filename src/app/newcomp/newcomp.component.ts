import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.css']
})
export class NewcompComponent implements OnInit {
  username:string='Angular';
  public uname:string='';
  public lastname:string='Kala';
  public img1="./assets/binding.png";
  public title:string='Learning angular';
  public topic:string='About dataBinding';
public emp:object={fname:'Test1',lname:'karna',age:25,mobile:22555}
public empname=['Radhu','John','Abraham'];


  constructor() { }

  ngOnInit(): void {
  }
Onclick(){
  alert("Submitted" +this.uname);
}

}



