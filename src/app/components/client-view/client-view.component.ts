import {Component, Input, OnInit} from '@angular/core';
import {Admin} from "../../models/admin";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {AdminsService} from "../../services/admins.service";
import {Client} from "../../models/client";
import {ClientsService} from "../../services/clients.service";

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {

  @Input() client: Client
  term = ''
  details = false
  clients: Observable<Client[]>
  state: boolean
  success_alert = false

  constructor(private router: Router, public clientsService : ClientsService) { }

  ngOnInit(): void {
    this.clientsService.getClients().subscribe()
  }

  viewClient(clientId: number | undefined){
    this.router.navigate(['clients', clientId]).then(r => 'view!');
  }

}
