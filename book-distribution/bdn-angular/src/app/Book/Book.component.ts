import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BookService } from './Book.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Book',
	templateUrl: './Book.component.html',
	styleUrls: ['./Book.component.css'],
  providers: [BookService]
})
export class BookComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          bookId = new FormControl("", Validators.required);
        
  
      
          bookName = new FormControl("", Validators.required);
        
  
      
          author = new FormControl("", Validators.required);
        
  
      
          Ownership = new FormControl("", Validators.required);
        
  
      
          returnDate = new FormControl("", Validators.required);
        
  
      
          status = new FormControl("", Validators.required);
        
  
      
          library = new FormControl("", Validators.required);
        
  


  constructor(private serviceBook:BookService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          bookId:this.bookId,
        
    
        
          bookName:this.bookName,
        
    
        
          author:this.author,
        
    
        
          Ownership:this.Ownership,
        
    
        
          returnDate:this.returnDate,
        
    
        
          status:this.status,
        
    
        
          library:this.library
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceBook.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.bjitgroup.com.Book",
      
        
          "bookId":this.bookId.value,
        
      
        
          "bookName":this.bookName.value,
        
      
        
          "author":this.author.value,
        
      
        
          "Ownership":this.Ownership.value,
        
      
        
          "returnDate":this.returnDate.value,
        
      
        
          "status":this.status.value,
        
      
        
          "library":this.library.value
        
      
    };

    this.myForm.setValue({
      
        
          "bookId":null,
        
      
        
          "bookName":null,
        
      
        
          "author":null,
        
      
        
          "Ownership":null,
        
      
        
          "returnDate":null,
        
      
        
          "status":null,
        
      
        
          "library":null
        
      
    });

    return this.serviceBook.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "bookId":null,
        
      
        
          "bookName":null,
        
      
        
          "author":null,
        
      
        
          "Ownership":null,
        
      
        
          "returnDate":null,
        
      
        
          "status":null,
        
      
        
          "library":null 
        
      
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.bjitgroup.com.Book",
      
        
          
        
    
        
          
            "bookName":this.bookName.value,
          
        
    
        
          
            "author":this.author.value,
          
        
    
        
          
            "Ownership":this.Ownership.value,
          
        
    
        
          
            "returnDate":this.returnDate.value,
          
        
    
        
          
            "status":this.status.value,
          
        
    
        
          
            "library":this.library.value
          
        
    
    };

    return this.serviceBook.updateAsset(form.get("bookId").value,this.asset)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
            else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }


  deleteAsset(): Promise<any> {

    return this.serviceBook.deleteAsset(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceBook.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "bookId":null,
          
        
          
            "bookName":null,
          
        
          
            "author":null,
          
        
          
            "Ownership":null,
          
        
          
            "returnDate":null,
          
        
          
            "status":null,
          
        
          
            "library":null 
          
        
      };



      
        if(result.bookId){
          
            formObject.bookId = result.bookId;
          
        }else{
          formObject.bookId = null;
        }
      
        if(result.bookName){
          
            formObject.bookName = result.bookName;
          
        }else{
          formObject.bookName = null;
        }
      
        if(result.author){
          
            formObject.author = result.author;
          
        }else{
          formObject.author = null;
        }
      
        if(result.Ownership){
          
            formObject.Ownership = result.Ownership;
          
        }else{
          formObject.Ownership = null;
        }
      
        if(result.returnDate){
          
            formObject.returnDate = result.returnDate;
          
        }else{
          formObject.returnDate = null;
        }
      
        if(result.status){
          
            formObject.status = result.status;
          
        }else{
          formObject.status = null;
        }
      
        if(result.library){
          
            formObject.library = result.library;
          
        }else{
          formObject.library = null;
        }
      

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "bookId":null,
        
      
        
          "bookName":null,
        
      
        
          "author":null,
        
      
        
          "Ownership":null,
        
      
        
          "returnDate":null,
        
      
        
          "status":null,
        
      
        
          "library":null 
        
      
      });
  }

}
