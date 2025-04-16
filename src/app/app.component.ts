import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContactListComponent } from "./contact-list/contact-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactListComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment4';
}
