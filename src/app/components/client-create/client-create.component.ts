import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Client} from "../../models/client";
import {ClientsService} from "../../services/clients.service";

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  client: Client = new Client();

  constructor(private clientsService: ClientsService,
              private router: Router
  ) { }

  ngOnInit(): void {
  }

  saveClient(){
    this.clientsService.createClient(this.client).subscribe(
      data => {
        console.log(data);
        this.goToClientsList();
      },
      error => console.log(error)
    )
  }

  goToClientsList(){
    this.router.navigate(['/clients']).then(r => 'clients list')
  }

  submit(){
    console.log(this.client)
    this.saveClient();
  }

}
