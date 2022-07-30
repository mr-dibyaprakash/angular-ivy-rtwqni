import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute, private _userService: UserService) { }
  @Input()
  id : string = '';

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe((map)=>{
      let id = map.get('id');
      if(id) {
        this.id = id;
      }
      this._userService.getCartDetails(parseInt(this.id)).subscribe((data)=>{
        console.log(data);
      })
    })
  }

}