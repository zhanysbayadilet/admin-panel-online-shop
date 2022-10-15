import { Component, OnInit } from '@angular/core';
import {Admin} from "../../models/admin";
import {AdminsService} from "../../services/admins.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
