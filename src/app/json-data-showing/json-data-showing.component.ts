import { Component, OnInit } from '@angular/core';
import { JSONService } from '../Servivces/json.service';

@Component({
  selector: 'app-json-data-showing',
  templateUrl: './json-data-showing.component.html',
  styleUrls: ['./json-data-showing.component.scss']
})
export class JsonDataShowingComponent implements OnInit {

  // Initialized the service here
  constructor(private jsonService: JSONService) { }

  // The varibale that all the JSON data asings to
  gridData

  // variable that helps to show the Loader in Kendo Grid
  loading = true

  /** 
   * To simulated the Angular service I have developed a small function which returns a promise. So I have used Async, Await. Because since that service function
   * not using the Observable we do not want to use subscribe.
  */
  async ngOnInit() {
    try {
      this.gridData = await this.jsonService.getData();
      this.loading = false
    } catch (err) {
      alert(err)  
    }
  }

}
