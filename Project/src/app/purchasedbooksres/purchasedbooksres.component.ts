import { Component, Input, OnInit } from '@angular/core';
import { Buybook } from '../buybook';
import { BookService } from '../book.service';

@Component({
  selector: 'app-purchasedbooksres',
  templateUrl: './purchasedbooksres.component.html',
  styleUrls: ['./purchasedbooksres.component.scss']
})
export class PurchasedbooksresComponent implements OnInit {
 @Input()
  buybook:any;
  constructor() { }

  ngOnInit(): void {
  }

}
