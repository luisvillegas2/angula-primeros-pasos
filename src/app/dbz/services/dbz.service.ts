

import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class dbzService {

  public characters: character[] = [
    {
      id: uuid(),
      name : 'Krillin',
      power : 1000
    },
    {
      id: uuid(),
      name : 'Goku',
      power : 9500
    },{
      id: uuid(),
      name : 'Vegeta',
      power : 7500
    },
  ];

  addCharacter( character: character ):void{

    // const newCharacter:character = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power
    // }

    const newCharacter:character = { id: uuid(), ...character }

    this.characters.push(newCharacter);

  }

  // onDeleteCharacter(index: number):void {

  //   console.log( 'Main Page - onDeleteCharacter ' + index );

  //   this.characters.splice(index,1);
  // }

  deleteCharacterById( id: string ) {
    this.characters = this.characters.filter( character => character.id !== id );
  }

}
