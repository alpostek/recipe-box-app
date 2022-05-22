import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recipe-box-app';
  public showAddButton: boolean = true;

  constructor(private modalService: ModalService, private router: Router, private storageService: LocalStorageService){
    router.events.subscribe(e => {
     if(e instanceof NavigationEnd){
      if(this.router.url !== '/'){
        this.showAddButton = false;
      } else{
        this.showAddButton = true;
      }
     }
    })
  }

  showForm(){
    this.modalService.open();
  }
  clearList(){
    this.storageService.deleteAll();
  }
  resetToDefault(){
    this.storageService.resetToDefault();
  }
}

