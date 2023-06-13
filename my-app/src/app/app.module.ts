import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { FormsModule } from '@angular/forms';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { MyserviceService } from './myservice.service';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    FirstComponent,
    NavigationBarComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, SecondComponent],
  providers: [MyserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
