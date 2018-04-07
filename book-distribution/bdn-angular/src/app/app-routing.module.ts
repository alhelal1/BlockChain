import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TransactionComponent } from './Transaction/Transaction.component'
import { HomeComponent } from './home/home.component';

import { BookComponent } from './Book/Book.component';
import { AmountComponent } from './Amount/Amount.component';
import { LibraryComponent } from './Library/Library.component';


  import { StudentComponent } from './Student/Student.component';


  import { issueBookComponent } from './issueBook/issueBook.component';
  import { returnBookComponent } from './returnBook/returnBook.component';  
const routes: Routes = [
     //{ path: 'transaction', component: TransactionComponent },
    {path: '', component: HomeComponent},
		
		{ path: 'Book', component: BookComponent},
    
		{ path: 'Amount', component: AmountComponent},
    
		{ path: 'Library', component: LibraryComponent},
    
    
      { path: 'Student', component: StudentComponent},
      
      
        { path: 'issueBook', component: issueBookComponent},
        
        { path: 'returnBook', component: returnBookComponent},
        
		{path: '**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
