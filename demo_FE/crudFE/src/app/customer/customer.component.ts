import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  customerName: String="";
  customerAddress: String="";
  mobile : number=0;

  CustomerArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;
  

  currentCustomerID = "";
customerItem: any;

  constructor (private http: HttpClient) {
    this.getAllCustomers();
    
  }

  getAllCustomers(){
    this.http.get("http://localhost:8083/api/v1/customer/getAllCustomers")
    .subscribe((res:any) => {
      this.isResultLoaded = true;
      this.CustomerArray = res;
      console.log(this.CustomerArray);
    });
  }

  register(){
    let body = {
      "customerName" : this.customerName,
      "customerAddress" : this.customerAddress,
      "mobile" : this.mobile
    }
    this.http.post("http://localhost:8083/api/v1/customer/save",body,{responseType: 'text'})
    .subscribe((res:any)=>{
      alert("Employee Registered Successfully");
        this.getAllCustomers();
        this.customerName = '';
        this.customerAddress = '';
        this.mobile  = 0;
    });
  }

  setUpdate(data:any){
    this.customerName = data.customerName;
   this.customerAddress = data.customerAddress;
   this.mobile = data.mobile;
   this.currentCustomerID = data.customerId;
  }
  update(){
    let body = {
      "customerId" : this.currentCustomerID,
      "customerName" : this.customerName,
      "customerAddress" : this.customerAddress,
      "mobile" : this.mobile
    };
    
    this.http.put("http://localhost:8083/api/v1/customer/updateCustomer",body,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        alert("Employee Registered Updateddd")
        this.getAllCustomers();
        this.customerName = '';
        this.customerAddress = '';
        this.mobile  = 0;
    });
  }
  save()
  {
    if(this.currentCustomerID == '')
    {
        this.register();
    }
      else
      {
       this.update();
      }      
 
  }
 
  setDelete(data: any)
  { 
    this.http.delete("http://localhost:8083/api/v1/customer/delete"+ "/"+ data.customerId,{responseType: 'text'}).subscribe((res: any)=>
    {
        console.log(res);
        alert("Employee Deleted")
        this.getAllCustomers();
        this.customerName = '';
        this.customerAddress = '';
        this.mobile  = 0;
  
    });
 
  }
  
}
