import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { SearchComponent } from '../../components/search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
