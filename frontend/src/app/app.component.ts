import { Component } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public games: IGame[];
  constructor(public gameService: GameService) { }

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.gameService.getGames().subscribe(games => {
      this.games = games.list;
    })
  }
}
