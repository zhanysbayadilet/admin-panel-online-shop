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
  success_alert = false;
  RECHARGE_TIME = 2000;

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
    this.router.navigate(['admins', id, 'edit']).then(r => 'Updated!');
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

  submit(){
    this.adminsService.updateAdmin(this.id, this.admin).subscribe(
      data => {
        this.BackToViewPerson(this.admin.id);
      },
      error => console.log(error)
    );
  }

  BackToViewPerson(adminId: number | undefined){
    this.router.navigate(['admins', adminId]).then(r => 'view!');
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
