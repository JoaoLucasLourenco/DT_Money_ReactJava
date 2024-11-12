import { Component } from '@angular/core';
import { InfoListComponent } from "../info-list/info-list.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [InfoListComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
