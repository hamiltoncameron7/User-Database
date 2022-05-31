import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datawriter',
  templateUrl: './datawriter.component.html',
  styleUrls: ['./datawriter.component.css']
})
export class DatawriterComponent implements OnInit {
  //setup a FormGroup named form
  form : FormGroup;
  //enable a messageEvent function to be triggered with EventEmitter, so we can refresh on submit
  @Output() messageEvent = new EventEmitter();

  //constructor with FormBuilder field name
  constructor(public fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name: ['']
    });
   }

  ngOnInit(): void {
  }

  //function that takes the form data, grabs the name and posts a request to the server, then emits a new event for the refresh, and resets the form
  submitNewUser(): void{
    var formData = new FormData();
    formData.append('name', this.form.get('name').value);
    if(this.form.get('name').value != ''){
      this.http
        .post('http://localhost:3000/api/create-user', formData.getAll('name'))
        .subscribe({
          next: (response) => console.log(response),
          error: (error) => console.log(error)
        })
    }

    this.messageEvent.emit(null);

    this.form.reset();
  }

}
