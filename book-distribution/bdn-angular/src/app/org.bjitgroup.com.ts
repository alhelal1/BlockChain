import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.bjitgroup.com{
   export enum BookStatus {
      Available,
      NotAvailable,
   }
   export class Book extends Asset {
      bookId: string;
      bookName: string;
      author: string;
      Ownership: string;
      returnDate: Date;
      status: BookStatus;
      library: Library;
   }
   export class Amount extends Asset {
      amountId: string;
      amount: number;
   }
   export class Student extends Participant {
      studentId: string;
      studentName: string;
      address: string;
   }
   export class Library extends Asset {
      libraryId: string;
      libraryName: string;
   }
   export class issueBook extends Transaction {
      returnDate: Date;
      book: Book;
      student: Student;
      library: Library;
   }
   export class returnBook extends Transaction {
      book: Book;
      amount: Amount;
      student: Student;
      library: Library;
   }
// }
