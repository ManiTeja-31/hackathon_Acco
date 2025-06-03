import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavMenuComponent } from './components/sidenav-menu/sidenav-menu.component';
import { MatButtonModule } from '@angular/material/button';
import { TaskListComponent } from "./components/task-list/task-list.component";

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
    TaskListComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hackathon';
    sidenavOpen = signal(false);

}
