import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

import { HttpClientModule } from '@angular/common/http';
import { MultipleFileUploadComponent } from './multiple-file-upload/multiple-file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    MultipleFileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
