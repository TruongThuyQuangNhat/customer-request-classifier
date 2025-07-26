import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-classify-request',
  templateUrl: './classify-request.component.html',
  styleUrls: ['./classify-request.component.css']
})
export class ClassifyRequestComponent {
  text: string = '';
  loading = false;
  result: string | null = null;

  constructor(private http: HttpClient) {}

  classify() {
    this.loading = true;
    this.http.post<any>(`${environment.apiUrl}/predict`, { text: this.text }).subscribe({
      next: (response) => {
        this.result = response.label;
        this.loading = false;
      },
      error: (err) => {
        console.error('Lỗi gọi API:', err);
        this.result = 'Lỗi phân loại';
        this.loading = false;
      },
    });
  }
}
