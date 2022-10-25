import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.scss']
})
export class UpdatebookComponent implements OnInit {

  book:Book=new Book();
  constructor(private bookService : BookService, private router : Router) { }

  ngOnInit(): void {
  }
 
  updatebook(){
    console.log(this.book);
   
   this.bookService.updatebook(this.book).subscribe({
    next: (res:any)=>{
      console.log("Book created successfully" ,res);
      alert("Book saved successfully");
      this.router.navigate(["home"]);
      
  },
  error: (err:any)=>{
    console.log(err);
   
}
  })
  
  }


}


