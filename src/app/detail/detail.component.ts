import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  receivedData: any;
   
  constructor(private route: ActivatedRoute, private router: Router) { 
   // this.receivedData= this.router.getCurrentNavigation().extras.state?.data.offre;

    this.receivedData= JSON.parse(localStorage.getItem('offre'))
  }

  ngOnInit(): void {  
  }
  OpenApplicationForm(){
    this.router.navigate(['/Candidature']);

  }
}
