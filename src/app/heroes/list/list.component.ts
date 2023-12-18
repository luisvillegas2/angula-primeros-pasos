import { Component } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public deleteHero?:string;

  removeLastHero():void{
    // const deleteHero = this.heroNames.pop();
    // console.log( deleteHero );
    // console.log( {deleteHero} );
    this.deleteHero = this.heroNames.pop();

  }

}
