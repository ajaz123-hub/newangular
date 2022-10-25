import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Buybook } from '../buybook';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-purchased-id',
  templateUrl: './purchased-id.component.html',
  styleUrls: ['./purchased-id.component.scss']
})
export class PurchasedIdComponent implements OnInit {

  
  bookId =''

  emailId=''

books:Buybook=new Buybook();
  


  
  constructor(private bookService : BookService,private router:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  purchasedId()

  {

    console.log(this.emailId,this.bookId);

    this.bookService.purchasedId(this.emailId,this.bookId).subscribe((data:Buybook ) => {

      console.log(data);   

      this.books = data;

      //this.router.navigate(["/SearchResponse"]);

  });

 

   

  }

}
