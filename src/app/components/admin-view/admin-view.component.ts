import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import { Admin } from 'src/app/models/admin';
import {AdminService} from "../../services/admin.service";


@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {
  @Input() admin: Admin | undefined
  term = ''
  details = false
  admins: Observable<Admin[]> | undefined;
  state: boolean | undefined;

  constructor(private router: Router, adminService : AdminService) { }

  ngOnInit(): void {
  }

  viewPerson(adminId: number | undefined){
    this.router.navigate(['view-admin', adminId]).then(r => 'view!');
  }

}
