import { Component } from '@angular/core';
import {faSearch, faUserCircle, faHeart,faShoppingCart} from "@fortawesome/free-solid-svg-icons";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected readonly faSearch = faSearch
  protected readonly faUserCircle = faUserCircle;
  protected readonly faHeart = faHeart;
  protected readonly faShoppingCart = faShoppingCart;
}
