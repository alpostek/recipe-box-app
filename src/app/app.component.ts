import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { LocalStorageService } from './local-storage.service';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'recipe-box-app';
  public showAddButton: boolean = true;

  constructor(private modalService: ModalService, private router: Router, private storageService: LocalStorageService,
    private auth: AuthService){
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

  showForm(): void{
    this.modalService.open();
  }
  clearList(): void{
    this.storageService.deleteAll();
  }
  resetToDefault(): void{
    this.storageService.resetToDefault();
  }
  onLogout(): void{
    this.auth.logout();
  }

  ngOnInit(): void {
    this.auth.autologin();
    console.log()
  } 
}

