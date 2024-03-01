import { Component, computed, signal } from '@angular/core';
import { MaterialModule } from '../../../assets/theme/material.module';
import { SideNavComponent } from '../side-nav/side-nav.component';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [MaterialModule, SideNavComponent, RouterOutlet, RouterLink],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          width: '200px',
        })
      ),
      state('close', style({ width: '55px' })),
      state('sideNavOpen', style({ 'margin-right': '200px' })),
      state('sideNavClose', style({ 'margin-right': '55px' })),
      transition('open => close', [animate('.2s')]),
      transition('close => open', [animate('.2s')]),
      transition('sideNavOpen => sideNavClose', [animate('.2s')]),
      transition('sideNavClose => sideNavOpen', [animate('.2s')]),
    ]),
  ],
  template: `<h3>MenuBar</h3>`,
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss',
})
export class MenubarComponent {
  isOpen = true;
  collapsed = true;

  toggle(): void {
    this.collapsed = !this.collapsed;
    this.isOpen = !this.isOpen;
  }
}
