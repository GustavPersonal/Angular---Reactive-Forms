import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    BrowserAnimationsModule,
    ReactiveFormsModule, 
    MaterialModule],
  declarations: [
    AppComponent, 
    HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {


}
