import { Component, OnInit } from '@angular/core';
import { Metrics } from '../models/metrics';
import { MetricsService } from '../services/metrics.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  /** Based on the screen size, switch from standard to one column per row */
  cards: Array<Metrics> =[];

  constructor(private metricsService: MetricsService) {}

  ngOnInit() {
    this.metricsService.get().subscribe(data => {
      this.cards = data;
    })
  }

  editMetrics(cardId: number) {
    
  }

}
