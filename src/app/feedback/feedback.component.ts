import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  model:FeedbackViewModel = {
    name:'',
    email:'',
    feedback:''
  };
  constructor(private http: HttpClient) {

   }

  ngOnInit() {
  }

  sendFeedback(): void {
    alert(this.model.name);
  }

}

  export interface FeedbackViewModel{

    name:string;
    email:string;
    feedback:string;
  }

}
