import { Component, OnInit } from '@angular/core';
import {Admin} from "../../models/admin";
import {AdminsService} from "../../services/admins.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent implements OnInit {

  admin: Admin = new Admin();

  constructor(private adminsService: AdminsService,
              private router: Router
  ) { }

  ngOnInit(): void {
  }

  saveAdmin(){
    this.adminsService.createAdmin(this.admin).subscribe(
      data => {
        console.log(data);
        this.goToAdminsList();
      },
      error => console.log(error)
    )
  }

  goToAdminsList(){
    this.router.navigate(['/admins']).then(r => 'admins list')
  }

  submit(){
    console.log(this.admin)
    this.saveAdmin();
  }

}
