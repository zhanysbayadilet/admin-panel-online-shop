import { Component, OnInit } from '@angular/core';
import {Admin} from "../../models/admin";
import {AdminsService} from "../../services/admins.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {

  id: number;
  admin: Admin = new Admin();

  constructor(private adminsService: AdminsService,
              private router: Router,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.adminsService.getAdminById(this.id).subscribe(
      data => {
        this.admin = data;
      },
      error => console.log(error)
    );
  }


  updateAdmin(id: number | undefined){
    this.router.navigate(['update-admin', id]).then(r => 'Updated!');
  }

  deleteAdmin(adminId: number | undefined){
    this.adminsService.deleteAdmin(adminId)
      .pipe()
      .subscribe(()=>{
        this.adminsService.getAdmins()
        this.viewAdminsList()
      })
  }

  viewAdminsList(){
    this.router.navigate(['admins']).then(r => "admins list")
  }


}
