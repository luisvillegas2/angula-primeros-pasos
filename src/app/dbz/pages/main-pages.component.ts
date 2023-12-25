import { Component, OnInit } from '@angular/core';
// import { character } from '../interfaces/character.interface';
import { dbzService } from '../services/dbz.service';
import { character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-pages.component.html'
})

export class MainPageComponent {

  constructor( private dbzService: dbzService ) {

  }


  get characters(): character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id: string ):void {
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter( character:character ):void {
    this.dbzService.addCharacter( character );
  }
}
