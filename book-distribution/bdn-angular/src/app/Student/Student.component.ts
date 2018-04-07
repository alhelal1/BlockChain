import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { StudentService } from './Student.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Student',
	templateUrl: './Student.component.html',
	styleUrls: ['./Student.component.css'],
  providers: [StudentService]
})
export class StudentComponent implements OnInit {

  myForm: FormGroup;

  private allParticipants;
  private participant;
  private currentId;
	private errorMessage;

  
      
          studentId = new FormControl("", Validators.required);
        
  
      
          studentName = new FormControl("", Validators.required);
        
  
      
          address = new FormControl("", Validators.required);
        
  


  constructor(private serviceStudent:StudentService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          studentId:this.studentId,
        
    
        
          studentName:this.studentName,
        
    
        
          address:this.address
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceStudent.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(participant => {
        tempList.push(participant);
      });
      this.allParticipants = tempList;
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
   * @param {String} name - the name of the participant field to update
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
   * only). This is used for checkboxes in the participant updateDialog.
   * @param {String} name - the name of the participant field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified participant field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addParticipant(form: any): Promise<any> {
    this.participant = {
      $class: "org.bjitgroup.com.Student",
      
        
          "studentId":this.studentId.value,
        
      
        
          "studentName":this.studentName.value,
        
      
        
          "address":this.address.value
        
      
    };

    this.myForm.setValue({
      
        
          "studentId":null,
        
      
        
          "studentName":null,
        
      
        
          "address":null
        
      
    });

    return this.serviceStudent.addParticipant(this.participant)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "studentId":null,
        
      
        
          "studentName":null,
        
      
        
          "address":null 
        
      
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


   updateParticipant(form: any): Promise<any> {
    this.participant = {
      $class: "org.bjitgroup.com.Student",
      
        
          
        
    
        
          
            "studentName":this.studentName.value,
          
        
    
        
          
            "address":this.address.value
          
        
    
    };

    return this.serviceStudent.updateParticipant(form.get("studentId").value,this.participant)
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


  deleteParticipant(): Promise<any> {

    return this.serviceStudent.deleteParticipant(this.currentId)
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

    return this.serviceStudent.getparticipant(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "studentId":null,
          
        
          
            "studentName":null,
          
        
          
            "address":null 
          
        
      };



      
        if(result.studentId){
          
            formObject.studentId = result.studentId;
          
        }else{
          formObject.studentId = null;
        }
      
        if(result.studentName){
          
            formObject.studentName = result.studentName;
          
        }else{
          formObject.studentName = null;
        }
      
        if(result.address){
          
            formObject.address = result.address;
          
        }else{
          formObject.address = null;
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
      
        
          "studentId":null,
        
      
        
          "studentName":null,
        
      
        
          "address":null 
        
      
      });
  }

}
