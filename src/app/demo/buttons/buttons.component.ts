import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
    <button mat-button color="primary">Primary</button>
<button mat-raised-button color="accent">Accent</button>
<button mat-icon-button color="primary" aria-label="Example icon button with a home icon">
  <mat-icon>home</mat-icon>
</button>
<mat-checkbox class="example-margin">Check me!</mat-checkbox>
  `,
  styles: [
  ]
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
