import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UppercaseconverterComponent } from './components/uppercaseconverter/uppercaseconverter.component';
import { UppercaseconverterService } from './services/uppercaseconverter.service';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UppercaseconverterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UppercaseconverterService],
  bootstrap: [UppercaseconverterComponent]
})
export class AppModule { }
