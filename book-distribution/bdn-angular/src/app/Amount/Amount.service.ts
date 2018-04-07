import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Amount } from '../org.bjitgroup.com';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class AmountService {

	
		private NAMESPACE: string = 'Amount';
	



    constructor(private dataService: DataService<Amount>) {
    };

    public getAll(): Observable<Amount[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Amount> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Amount> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Amount> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Amount> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
