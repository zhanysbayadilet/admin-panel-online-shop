import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {Item} from "../../models/item";
import {ItemsService} from "../../services/items.service";

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {

  @Input() item: Item
  term = ''
  details = false
  items: Observable<Item[]>
  state: boolean
  success_alert = false

  constructor(private router: Router, public itemsService : ItemsService) { }

  ngOnInit(): void {
    this.itemsService.getItems().subscribe()
  }

  viewItem(itemId: number | undefined){
    this.router.navigate(['items', itemId]).then(r => 'view!');
  }

}
