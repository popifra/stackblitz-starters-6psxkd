import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('inputGreetings') inputGreetings!: ElementRef<HTMLInputElement>;

  initialValue = 'Petolino';
  color = 'pink'; //color to be passed to the directive
  defaultColor = '';
  title = 'my-app';

  items: any[] = [];

  constructor(private myService: MyserviceService) {}

  showGreetings = '';
  ngOnInit() {
    this.items = this.myService.persons;
  }

  onInputChange(value: string) {
    this.showGreetings = value;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.showGreetings = this.inputGreetings.nativeElement.value;
    }, 0);
  }

  onCat() {
    this.showGreetings = this.inputGreetings.nativeElement.value;
  }

  changeColor(color: any): void {
    this.color = color || this.defaultColor;
  }

  //ngModel
  name: string = '';

  getName() {
    this.showGreetings = this.name;
  }
}
