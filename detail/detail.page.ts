import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  public detail: any

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    const detail = this.route.snapshot.queryParams['detail']

    console.log(JSON.parse(detail))
    this.detail = JSON.parse(detail)

  }

  saveItem(item: any) {
    const existingArray = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    const newItem = item;
    existingArray.push(newItem);

    localStorage.setItem('favorites', JSON.stringify(existingArray));
  }

}
