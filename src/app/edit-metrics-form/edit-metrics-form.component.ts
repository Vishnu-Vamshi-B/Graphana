import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { MetricsService } from '../services/metrics.service';

@Component({
  selector: 'app-edit-metrics-form',
  templateUrl: './edit-metrics-form.component.html',
  styleUrls: ['./edit-metrics-form.component.css']
})
export class EditMetricsFormComponent implements OnInit {

  metrics$: Observable<any> = new Observable<any>();

  metricsForm: FormGroup;
  constructor(private authService: AuthService,
    private router: Router,
    private metricsService: MetricsService,
    private activatedRoute: ActivatedRoute) {
    this.metricsForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      value: new FormControl('', [Validators.required]),
      cols: new FormControl('1', []),
      rows: new FormControl('1', []),
      id: new FormControl('', [])
    });
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get('id') ?? 0;
      this.metricsService.getMetrics(+id).subscribe(data => {
        this.metricsForm.setValue(data);
        
      })
    })
  }

  saveMetrics() {
    const metricsData = this.metricsForm.value;
    this.metricsService.updateMetrics(metricsData).subscribe(() => {
      this.router.navigate(['']);
    });
  }

}
