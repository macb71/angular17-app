import { Component, Injectable, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
@Injectable({ providedIn: 'root' })
export class AppComponent implements OnInit {
  title = 'angulat17-app';
  text = '';
  constructor(private http: HttpClient) {}

  async ngOnInit(): Promise<void> {
    this.text = await this.getResFromDoggieNote();
  }

  async getResFromDoggieNote(): Promise<string> {
  
    const response = await fetch('http://localhost:3000', {});
    return await response.text();
  }
}
