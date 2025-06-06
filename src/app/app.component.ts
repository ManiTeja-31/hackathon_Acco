import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavMenuComponent } from './components/sidenav-menu/sidenav-menu.component';
import { MatButtonModule } from '@angular/material/button';
import { TaskListComponent } from "./components/task-list/task-list.component";
import { ProjectDescriptionDialogComponent } from './components/project-description-dialog/project-description-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from "./components/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    MatSidenavModule,
    MatButtonModule,
    HeaderComponent,
    SidenavMenuComponent,
    TaskListComponent,
    MatIconModule,
    LoginComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hackathon';
    sidenavOpen = signal(false);
    constructor(private dialog: MatDialog) {}

  openDescriptionDialog(): void {
  this.dialog.open(ProjectDescriptionDialogComponent, {
    width: '75vw',
    height: '75vh',
    autoFocus: false,
    panelClass: 'custom-dialog-container',
    backdropClass: 'custom-dialog-backdrop',  
  });
}

taskCompletionPercent = signal(0);

updateProgress(percent: number) {
  this.taskCompletionPercent.set(percent);
}

}
