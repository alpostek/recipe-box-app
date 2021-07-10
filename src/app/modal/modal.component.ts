import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
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

}
