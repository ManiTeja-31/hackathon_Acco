import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-profile-menu',
  standalone: true,
  imports: [CommonModule, MatDividerModule, MatCardModule],
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class ProfileMenuComponent {
  people = [
    { name: 'Alice Johnson', role: 'Developer', img: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Bob Smith', role: 'Designer', img: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Carol White', role: 'Product Manager', img: 'https://i.pravatar.cc/150?img=3' }
  ];
}
