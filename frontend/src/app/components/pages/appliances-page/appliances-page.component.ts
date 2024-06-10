import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { AppliancesService } from 'src/app/services/appliances.service';
import { Appliances } from 'src/app/shared/models/Appliances';

@Component({
  selector: 'app-appliances-page',
  templateUrl: './appliances-page.component.html',
  styleUrls: ['./appliances-page.component.css']
})
export class AppliancesPageComponent implements OnInit {
  appliances!: Appliances;
  constructor(activatedRoute:ActivatedRoute, appliancesService:AppliancesService,
    private cartService:CartService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      appliancesService.getAppliancesById(params.id).subscribe(serverAppliances => {
        this.appliances = serverAppliances;
      });
    })

   }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.appliances);
    this.router.navigateByUrl('/cart-page');
  }
}
