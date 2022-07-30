import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  @Input() username: string;
  @Input() id: number;

  sendId: number = 0;

  constructor(
    private _router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {}

  viewCartDetails = () => {
    this._router.navigate(['/cart-details', this.id]);
  };
}
