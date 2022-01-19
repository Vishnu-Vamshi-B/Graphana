import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { MetricsService } from '../services/metrics.service';

@Component({
  selector: 'app-metrics-form',
  templateUrl: './metrics-form.component.html',
  styleUrls: ['./metrics-form.component.css']
})
export class MetricsFormComponent implements OnInit {

  metricsForm: FormGroup;
  constructor(private authService: AuthService, 
    private router: Router, 
    private metricsService: MetricsService) {
    this.metricsForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      value: new FormControl('', [Validators.required]),
      cols: new FormControl('1', []),
      rows: new FormControl('1', []),
    });
  }
  
  ngOnInit(): void {
    
  }

  saveMetrics() {
    const metricsData = this.metricsForm.value;
    this.metricsService.add(metricsData).subscribe(() => {
      this.router.navigate(['']);
    },error => {
    });
  }

}
