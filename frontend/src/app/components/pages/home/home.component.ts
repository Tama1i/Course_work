import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AppliancesService } from 'src/app/services/appliances.service';
import { Appliances } from 'src/app/shared/models/Appliances';
import {APPLIANCES_URL} from "../../../shared/constants/urls";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  appliances: Appliances[] = [];
  constructor(private appliancesService: AppliancesService, activatedRoute: ActivatedRoute) {
    let observable:Observable<Appliances[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        observable = this.appliancesService.getAllAppliancesBySearchTerm(params.searchTerm);
      else if (params.tag)
        observable = this.appliancesService.getAllAppliancesByTag(params.tag);
      else
        observable = appliancesService.getAll();

        observable.subscribe((server_appliances) => {
          this.appliances = server_appliances;
        })
    })
  }

  ngOnInit(): void {
  }

}
