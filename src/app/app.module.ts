import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { MyUpperCasePipe } from './pipes/uppercase.pipe';
import { StudentGradePipe } from './pipes/student.grade.pipe';

@NgModule({
  declarations: [
    AppComponent, HighlightDirective, MyUpperCasePipe, StudentGradePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
