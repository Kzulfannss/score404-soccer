import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  standings: any[];

  constructor(private router: Router, private http: HttpClient) {
    this.standings = [];
  }
  
  ngOnInit() {
    this.http.get('https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4328&s=2022-2023')
      .subscribe((response: any) => {
        // ini penting buat tampilan HD
        const arr: any = [];
        response.table.map((item: any)=>{
          arr.push({
            ...item,
            strTeamBadge: item.strTeamBadge.split('/tiny')[0],
          });
        })
        this.standings = arr;
        console.log(response);
      }, (error: any) => {
        console.error(error);
      });
  };

  public redirectTo(t: any) {
    this.router.navigate(["detail"], { queryParams: { detail:JSON.stringify(t) } });
    
  }
}
 