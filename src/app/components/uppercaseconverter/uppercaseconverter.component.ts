import { Component, OnInit } from '@angular/core';
import { UppercaseconverterService } from '../../services/uppercaseconverter.service';

@Component({
  selector: 'app-uppercaseconverter',
  templateUrl: './uppercaseconverter.component.html',
  styleUrls: ['./uppercaseconverter.component.css']
})
export class UppercaseconverterComponent implements OnInit {

  private result:any;
  constructor(private _service:UppercaseconverterService) { }

  ngOnInit() {
  }

  public convert(obj):any{
     console.log(obj);
     this._service.convertToUppercase(obj).subscribe(
       res =>{
        this.result = res;
       }
     );

  }

}
