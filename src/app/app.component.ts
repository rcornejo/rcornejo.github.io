import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rcornejo';
  scholarUrl="https://scholar.google.com/citations?user=480FEcoAAAAJ&hl=es&authuser=1";

  loadedFeature = 'about';
  onNavigate(feature:string){
    if(feature==='google-scholar')
      window.open(this.scholarUrl,'_blank')
    else
      this.loadedFeature = feature;
  }
}
