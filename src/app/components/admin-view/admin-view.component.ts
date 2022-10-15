import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import { Admin } from 'src/app/models/admin';
import {AdminsService} from "src/app/services/admins.service";



@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {
  @Input() admin: Admin
  term = ''
  details = false
  admins: Observable<Admin[]>
  state: boolean
  success_alert = false

  constructor(private router: Router, public adminsService : AdminsService) { }

  ngOnInit(): void {
    this.adminsService.getAdmins().subscribe()
  }

  viewAdmin(adminId: number | undefined){
    this.router.navigate(['admins', adminId]).then(r => 'view!');
  }
}
