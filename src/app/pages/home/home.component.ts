import { Component, Input } from '@angular/core';


interface SideNavToggle {
  collapsed: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(){
  }
  isSideNavCollapsed = false;

  onToggleSideNav(data: SideNavToggle): void {
    this.isSideNavCollapsed = data.collapsed;
  }

  @Input() collapsed = false;

  getBodyClass(): string {
    let styleClass = '';
    if(this.collapsed) {
      styleClass = 'body-trimmed';
    }
    return styleClass;
  }
}
