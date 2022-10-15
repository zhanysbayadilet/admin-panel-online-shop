import { Component, OnInit } from '@angular/core';
import {Client} from "../../models/client";
import {ClientsService} from "../../services/clients.service";
import {Router} from "@angular/router";
import {Item} from "../../models/item";
import {ItemsService} from "../../services/items.service";

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {

  item: Item = new Item();

  constructor(private itemsService: ItemsService,
              private router: Router
  ) { }

  ngOnInit(): void {
  }

  saveItem(){
    this.itemsService.createItem(this.item).subscribe(
      data => {
        console.log(data);
        this.goToItemsList();
      },
      error => console.log(error)
    )
  }

  goToItemsList(){
    this.router.navigate(['/items']).then(r => 'items list')
  }

  submit(){
    console.log(this.item)
    this.saveItem();
  }

}
