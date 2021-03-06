import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
  encapsulation : ViewEncapsulation.Emulated
})
export class FavoriteComponent  {
 @Output('change') click = new EventEmitter()
 @Input('isFav') isFavorite: boolean = false
  constructor() { }
  onClick() {
    this.isFavorite = !this.isFavorite
    this.click.emit({newValue: this.isFavorite})
  }

}
export interface FavChangedEventArgs{
  newValue : boolean
}
