import { Component } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'games';
  public newGameName: string;
  public games: IGame[];

  constructor(public gameService: GameService) {
    this.deleteGame = this.deleteGame.bind(this);
  }

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.gameService.getGames().subscribe(
      games => this.games = games.list
    );
  }

  createGame() {
    const name: string = this.newGameName;

    /* checks empty and used names */
    if (!name || this.games.filter(game => game.name.toLowerCase() === name.toLowerCase()).length) return;

    this.gameService.createGame({ name }).subscribe(data => {
      this.games.push(Object.assign({}, data, { name }));
      this.newGameName = null;
    });
  }

  deleteGame(game: IGame) {
    this.gameService.deleteGame(game).subscribe(
      data => this.games = this.games.filter(storedGame => storedGame.id !== data.id)
    );
  }
}
