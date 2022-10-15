import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {Item} from "../../models/item";
import {ItemsService} from "../../services/items.service";

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  id: number;
  item: Item = new Item();
  success_alert = false;
  RECHARGE_TIME = 2000;

  constructor(private itemsService: ItemsService,
              private router: Router,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.itemsService.getItemById(this.id).subscribe(
      data => {
        this.item = data;
      },
      error => console.log(error)
    );
  }


  // updateClient(id: number | undefined){
  //   this.router.navigate(['client', id, 'edit']).then(r => 'Updated!');
  // }

  deleteItem(itemId: number | undefined){
    this.itemsService.deleteItem(itemId)
      .pipe()
      .subscribe(()=>{
        this.itemsService.getItems()
        this.viewItemsList()
      })
  }

  viewItemsList(){
    this.router.navigate(['items']).then(r => "items list")
  }

  submit(){
    this.itemsService.updateItem(this.id, this.item).subscribe(
      data => {
        this.BackToViewItem(this.item.id);
      },
      error => console.log(error)
    );
  }

  BackToViewItem(itemId: number | undefined){
    this.router.navigate(['items', itemId]).then(r => 'view!');
  }

  async enableSuccessAlert() {
    this.success_alert = true
    await this.delay(5000);
    this.success_alert = false
  }

  async delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
