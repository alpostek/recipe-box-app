import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ModalService } from '../modal.service';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output() addRecipeFromForm = new EventEmitter();

  display$: Observable<boolean>;

  constructor(private modalService: ModalService) {
    this.display$ = of(false);
   }

  ngOnInit(): void {
    this.display$ = this.modalService.watch();
  }
  close(){
    this.modalService.close();
  }

  passDataFromFormToList(event: Event){
    this.addRecipeFromForm.emit(event);
  }


}
