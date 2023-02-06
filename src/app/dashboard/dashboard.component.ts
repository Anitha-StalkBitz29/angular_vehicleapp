import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { observable } from 'rxjs';
import { ApiService } from '../shared/api.service';
import { vehiclesdata } from './vehicle.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  showadd!: boolean;
  showupdate!: boolean;
  vehiclesmodelObj: vehiclesdata = new vehiclesdata;
  allvehiclesdata: any;
  formValue! : FormGroup;
  constructor(private formBuilder:FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      fullName: ["", Validators.required],
      vehicleNo: ["", Validators.required],
      emailId: ["", Validators.required],
      mobileNo: ["", Validators.required],
      cityName: ["", Validators.required]
    })

    this.getdata_vehicle();
  }


  //To Hide on Add button:
  addData(){
    this.showadd = true;
    this.showupdate = false;
  }


  // To Hide on Edit Data:
  editData(vehiclesdata:any){
    this.showadd = false;
    this.showupdate = true;
    this.vehiclesmodelObj.id = vehiclesdata.id;
  this.formValue.controls['fullName'].setValue(vehiclesdata.fullName);
  this.formValue.controls['vehicleNo'].setValue(vehiclesdata.vehicleNo);
  this.formValue.controls['emailId'].setValue(vehiclesdata.emailId);
  this.formValue.controls['mobileNo'].setValue(vehiclesdata.mobileNo);
  this.formValue.controls['cityName'].setValue(vehiclesdata.cityName);
  }

 //Update on Edit Button:
 updateButton(){
    this.vehiclesmodelObj.fullName = this.formValue.value.fullName;
    this.vehiclesmodelObj.vehcileNo = this.formValue.value.vehicleNo;
    this.vehiclesmodelObj.emailId = this.formValue.value.emailId;
    this.vehiclesmodelObj.mobileNo = this.formValue.value.mobileNo;
    this.vehiclesmodelObj.cityName = this.formValue.value.cityName; 

    this.api.updateVehcileData(this.vehiclesmodelObj, this.vehiclesmodelObj.id).subscribe(res=>{
      this.formValue.reset();
      this.getdata_vehicle();
      alert("Record Successfully Updated");
    },
    err=>{
      alert('Somethings not working on update');
    })
  }

  addNewVehiclesData(){
      this.vehiclesmodelObj.fullName = this.formValue.value.fullName;
      this.vehiclesmodelObj.vehcileNo = this.formValue.value.vehicleNo;
      this.vehiclesmodelObj.emailId = this.formValue.value.emailId;
      this.vehiclesmodelObj.mobileNo = this.formValue.value.mobileNo;
      this.vehiclesmodelObj.cityName = this.formValue.value.cityName; 

      this.api.postVehicleData(this.vehiclesmodelObj).subscribe(res=>{
       console.log(res);
       this.formValue.reset();
       this.getdata_vehicle();
        alert("Record ADDED successfully");
      },
      err=>{
        alert("Somethings went wrong");
      })
  }


  //to get Get the Data 
  getdata_vehicle(){
    this.api.getVehicleData(this.addData)
    .subscribe(res=>{
      this.allvehiclesdata=res;
    })
  }

  deleteVehcilesInfo(vehiclesdata:any){
  if(confirm('Are you Sure to Delete the record?'))
    this.api.deleteVehicleData(vehiclesdata.id)
    .subscribe(res =>{
      alert("Record Deleted Successfully");
      this.getdata_vehicle();
    })
  }

}
