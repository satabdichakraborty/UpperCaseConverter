import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UppercaseconverterService {

  constructor(private _http:Http) { }

  public convertToUppercase(obj):any{
   return this._http.post("http://test-routes.herokuapp.com/test/uppercase", obj).pipe(map(
     res =>{
       return res.json();
     },
     (error)=>{
       this.handleError(error);
     }
   ));
  }

  public handleError(error):any{
     console.error(error);
     Observable.throw(error || "Internal Server Error");
  }
}
