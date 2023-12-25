import { Component, EventEmitter, Input, Output } from '@angular/core';
import { character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> =  new EventEmitter();

  @Input()
  public characterList: character[] = [
    {
      name: 'Trunk',
      power: 10
    }
  ];

  onDeleteCharacter(id?: string):void{

    if ( !id ) return;
    this.onDelete.emit(id);

  }

}
