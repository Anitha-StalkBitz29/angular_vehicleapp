import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

  //create by Post method;
  postVehicleData(data: any){
    return this._http.post<any>("http://localhost:3000/posts", data)
    .pipe(map((res:any) =>{
      return res;
    }))
  }
  //create by Get method;

  getVehicleData(data: any){
    return this._http.get<any>("http://localhost:3000/posts", data)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

  //Update Method for the Vehicles Data:
  updateVehcileData(data:any, id:number){
    return this._http.put("http://localhost:3000/posts/"+ id,data)
    .pipe(map((res:any)=>{
      return res;
    })) 
  }



  //delete method for the vehicle data:
  deleteVehicleData(id: number){
    return this._http.delete<any>("http://localhost:3000/posts/" + id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
