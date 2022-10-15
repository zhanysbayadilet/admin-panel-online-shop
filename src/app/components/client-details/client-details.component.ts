import { Component, OnInit } from '@angular/core';
import {Admin} from "../../models/admin";
import {AdminsService} from "../../services/admins.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Client} from "../../models/client";
import {ClientsService} from "../../services/clients.service";

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  id: number;
  client: Client = new Client();
  success_alert = false;
  RECHARGE_TIME = 2000;

  constructor(private clientsService: ClientsService,
              private router: Router,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clientsService.getClientById(this.id).subscribe(
      data => {
        this.client = data;
      },
      error => console.log(error)
    );
  }


  // updateClient(id: number | undefined){
  //   this.router.navigate(['client', id, 'edit']).then(r => 'Updated!');
  // }

  deleteClient(clientId: number | undefined){
    this.clientsService.deleteClient(clientId)
      .pipe()
      .subscribe(()=>{
        this.clientsService.getClients()
        this.viewClientsList()
      })
  }

  viewClientsList(){
    this.router.navigate(['clients']).then(r => "clients list")
  }

  submit(){
    this.clientsService.updateClient(this.id, this.client).subscribe(
      data => {
        this.BackToViewClient(this.client.id);
      },
      error => console.log(error)
    );
  }

  BackToViewClient(clientId: number | undefined){
    this.router.navigate(['clients', clientId]).then(r => 'view!');
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
