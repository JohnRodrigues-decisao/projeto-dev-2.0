import { Component, Input } from '@angular/core';
import { SideNavItemRouterLink, SideNavItemTarget } from '@decisaosistemas/angular-ds';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})

export class NavigationComponent{

  public menus: (SideNavItemTarget | SideNavItemRouterLink)[] = [];

  ngOnInit(): void {
    this.menus = [
      new SideNavItemRouterLink('Sample text', 'ds-icon-home', '/dashboard'),
      new SideNavItemRouterLink('Operações', 'ds-icon-upload', '/enviar-titulo'),
      new SideNavItemRouterLink('Contas a receber', 'ds-icon-coin', '/dashboard'),
    ]
  }
}