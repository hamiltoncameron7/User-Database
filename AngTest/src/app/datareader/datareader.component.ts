import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-datareader',
  templateUrl: './datareader.component.html',
  styleUrls: ['./datareader.component.css']
})
export class DatareaderComponent implements OnInit {
  //theData holds the array of users
  theData: any;

  constructor(private http: HttpClient) { }

  //function that grabs the data and subscribes it to theData
  getTheData = () => {
    this.http.get<any>('http://localhost:3000/api').subscribe(data => {
        this.theData = data;
    })
  };

  ngOnInit(): void {
    
    //loads users initially
    this.getTheData();
  }

}
