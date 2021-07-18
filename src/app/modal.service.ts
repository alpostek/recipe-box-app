import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  
  private display:  BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  watch(): Observable<boolean> {
    return this.display.asObservable();
  }
  open(){
    console.log("open")
    this.display.next(true);
  }
  close(){
    this.display.next(false);
  }
}
