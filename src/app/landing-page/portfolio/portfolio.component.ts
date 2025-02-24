import { Component } from '@angular/core';
import { JoinComponent } from './join/join.component';
import { SharkyComponent } from './sharky/sharky.component';
import { PokedexComponent } from './pokedex/pokedex.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [JoinComponent, SharkyComponent, PokedexComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
