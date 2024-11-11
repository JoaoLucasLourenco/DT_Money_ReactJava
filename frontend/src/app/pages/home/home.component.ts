import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { InfoListComponent } from '../../components/info-list/info-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, InfoListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
