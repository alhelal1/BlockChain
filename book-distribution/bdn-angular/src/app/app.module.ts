import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Configuration }     from './configuration';
import { DataService }     from './data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { TransactionComponent } from './Transaction/Transaction.component'

import { BookComponent } from './Book/Book.component';
import { AmountComponent } from './Amount/Amount.component';
import { LibraryComponent } from './Library/Library.component';


  import { StudentComponent } from './Student/Student.component';


  import { issueBookComponent } from './issueBook/issueBook.component';
  import { returnBookComponent } from './returnBook/returnBook.component';  
@NgModule({
  declarations: [
    AppComponent,
		HomeComponent,
    // TransactionComponent,
    BookComponent,
    AmountComponent,
    
    LibraryComponent
    ,
    
    
      StudentComponent
      ,

    issueBookComponent,
        
        returnBookComponent
          
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    Configuration,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
