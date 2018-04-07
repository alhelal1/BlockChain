import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Library } from '../org.bjitgroup.com';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class LibraryService {

	
		private NAMESPACE: string = 'Library';
	



    constructor(private dataService: DataService<Library>) {
    };

    public getAll(): Observable<Library[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Library> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Library> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Library> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Library> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
