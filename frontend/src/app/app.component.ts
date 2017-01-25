import { Component } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public someProp: string = 'i am some prop';
  public games: IGame[];
  
  constructor(public gameService: GameService) {
    this.deleteGame = this.deleteGame.bind(this);
  }

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.gameService.getGames().subscribe(games => {
      this.games = games.list;
    });
  }

  deleteGame(id: number) {
    alert(`deleting ${id}, some prop says: ${this.someProp}`);
  }
}
