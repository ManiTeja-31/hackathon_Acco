import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-project-description-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './project-description-dialog.component.html',
  styleUrl: './project-description-dialog.component.scss',
  animations: [
    trigger('dialogAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-40px) scale(0.9)' }),
        animate(
          '300ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({ opacity: 1, transform: 'translateY(0) scale(1)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '250ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({ opacity: 0, transform: 'translateY(-40px) scale(0.9)' })
        ),
      ]),
    ]),
  ],
})
export class ProjectDescriptionDialogComponent {

}
