import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommonModule],
  template: `
  <p>second works!</p>
  `,
  styleUrls: ['./second.component.css']
})
export class SecondComponent {

}
