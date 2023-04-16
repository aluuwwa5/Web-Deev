import { Component, OnInit } from '@angular/core';
import {Company} from "../models";
import {CompanyService} from "../company.service";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit{

  constructor(private companyService: CompanyService) {
  }
  ngOnInit(): void {
    this.getCompanies();
  }
  companies : Company[] = [];

  getCompanies(){
    this.companyService.getCompanies().subscribe((companies =>{
      this.companies = companies;
    }))
  }

}
