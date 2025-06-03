import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-sidenav-menu',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, MatDividerModule],
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent {
  people = [
    { name: 'Alice Johnson', role: 'Developer', icon: 'person' },
    { name: 'Bob Smith', role: 'Designer', icon: 'person' },
    { name: 'Carol White', role: 'Manager', icon: 'person' }
  ];
}
