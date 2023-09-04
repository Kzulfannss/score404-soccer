import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  schedule: any[];
  schedulefilter: any[] = [];

  months: { value: number; label: string }[] = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June'},
    { value: 7, label: 'July'},
    { value: 8, label: 'August'},
    { value: 9, label: 'September'},
    { value: 10, label: 'October'},
    { value: 11, label: 'November'},
    { value: 12, label: 'December'},
    // Add more months here...
  ];
  
  selectedMonth: number | undefined;

onMonthChange() {
  // Do something with the selected month value
  console.log(this.selectedMonth);
  const filteredDates = this.filterByMonth(this.schedule, this.selectedMonth);
  console.log(filteredDates);
  this.schedulefilter= filteredDates;
}

  constructor() {
    this.schedule = [];
  }

  ngOnInit() {
    axios.get('https://www.thesportsdb.com/api/v1/json/3/eventsseason.php?id=4328&s=2023-2024')
      .then((response) => {
        this.schedule = response.data.events;
        this.schedulefilter = response.data.events;
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  filterByMonth(dateArray: any[], month: any) {
    console.log(dateArray);
    const filteredDates : any[] = [];
  
    
    dateArray.forEach((date) => {
      
      const dateMonth = new Date(date.dateEvent).getMonth() + 1; 
  
      
      if (dateMonth === month) {
        
        filteredDates.push(date);
      }
    });
  
    
    return filteredDates;
  }
  
}
