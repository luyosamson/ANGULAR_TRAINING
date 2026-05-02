import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  standalone:true
})
export class CounterComponent implements OnInit, OnDestroy {
  @Input() startValue: number = 0;   // data flowing IN
  @Input() step: number = 1;         // how much to increment/decrement

  @Output() countChanged = new EventEmitter<number>(); // data flowing OUT

  count: number = 0;

  ngOnInit() {
    this.count = this.startValue;    // lifecycle hook - runs on load
    console.log('Counter initialized with:', this.count);
  }

  ngOnDestroy() {
    console.log('Counter component destroyed'); // lifecycle hook - runs on removal
  }

  increment() {
    this.count += this.step;
    this.countChanged.emit(this.count); // notify parent of change
  }

  decrement() {
    this.count -= this.step;
    this.countChanged.emit(this.count);
  }

  reset() {
    this.count = this.startValue;
    this.countChanged.emit(this.count);
  }
}