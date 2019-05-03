import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/httpclient.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees1:string[];


  constructor(private httpClientService:HttpClientService) {


  }

  ngOnInit() {
      this.httpClientService.getEmployees().subscribe(
     response =>this.handleSuccessfulResponse(response),
    );

  
  
  }
  
  
  handleSuccessfulResponse(response)
{
    this.employees1=response;
    console.log(this.employees1);
}


}
