import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { menuData } from './menu.data';

interface SideNavToggle {
  collapsed: boolean;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuData = menuData

  constructor() {}

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;



  ngOnInit(): void {

  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed});
  }
 logOut(){
 }
}
