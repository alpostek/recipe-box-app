import { Component } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recipe-box-app';
  
  constructor(private modalService: ModalService){}
  
  showForm(){
    this.modalService.open();
  }
}

