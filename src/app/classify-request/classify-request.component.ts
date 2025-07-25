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
  result: string | null = null;

  constructor(private http: HttpClient) {}

  classify() {
    this.http.post<any>(`${environment.apiUrl}/predict`, { text: this.text }).subscribe({
      next: (response) => {
        this.result = response.label;
      },
      error: (err) => {
        console.error('Lỗi gọi API:', err);
        this.result = 'Lỗi phân loại';
      },
    });
  }
}
