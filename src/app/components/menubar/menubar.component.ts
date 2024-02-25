import { Component } from '@angular/core';
import { MaterialModule } from '../../../assets/theme/material.module';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [MaterialModule],
  template: `<h3>MenuBar</h3>`,
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss',
})
export class MenubarComponent {}
