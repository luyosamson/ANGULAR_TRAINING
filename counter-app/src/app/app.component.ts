import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[CounterComponent]
})
export class AppComponent {
  lastCount: number = 10;

  onCountChanged(newCount: number) {
    this.lastCount = newCount;
    console.log('Parent received:', newCount);
  }
}