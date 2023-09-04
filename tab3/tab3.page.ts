import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  items: any [] = [];

  constructor() {
    const storedItems = JSON.parse(localStorage.getItem('favorites')!);
    
    this.items = storedItems ? storedItems : [];
  }
  ionViewWillEnter() {
    const storedItems = JSON.parse(localStorage.getItem('favorites')!);
    
    this.items = storedItems ? storedItems : [];
  }
}
