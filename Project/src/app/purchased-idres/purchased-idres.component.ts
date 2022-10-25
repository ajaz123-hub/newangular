import { Component, Input, OnInit } from '@angular/core';
import { Buybook } from '../buybook';
import { BookService } from '../book.service';
@Component({
  selector: 'app-purchased-idres',
  templateUrl: './purchased-idres.component.html',
  styleUrls: ['./purchased-idres.component.scss']
})
export class PurchasedIdresComponent implements OnInit {
  @Input()
  buybook:any;
  constructor() { }

  ngOnInit(): void {
  }

}
