import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Buybook } from '../buybook';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-purchasedbooks',
  templateUrl: './purchasedbooks.component.html',
  styleUrls: ['./purchasedbooks.component.scss']
})
export class PurchasedbooksComponent implements OnInit {

 
  books!: Buybook;
  // book: Book[]=[];
  emailId = ''

  
  constructor(private bookService : BookService,private router:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  purchased()

  {

    console.log(this.emailId);

    this.bookService.purchased(this.emailId).subscribe((data:Buybook ) => {

      console.log(data);   

      this.books = data;

      //this.router.navigate(["/SearchResponse"]);

  });

 

   

  }

}
