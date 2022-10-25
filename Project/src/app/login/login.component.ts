import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials ={

    username:'',

    password:''

  }
  constructor(private bookService: BookService,public router:Router ,private formBuilder:FormBuilder) { 
  }  
  ngOnInit(): void {
  }
  /*login(){
    console.log("register started"+this.users);
    this.bookService.login(this.users).subscribe((data) => {
      console.log(data);
      alert("Login Success")
      this.router.navigate(["home"]);
  }
    );
}*/
onSubmit(){

  if((this.credentials.username!='' && this.credentials.password!='') && (this.credentials.username!=null && this.credentials.password!=null))

{

 this.bookService.authenticate(this.credentials).subscribe(

 (data:any)=>{

   if(data.token){

         console.log(data.token);

         console.log(this.credentials.username);

   sessionStorage.setItem("userName", this.credentials.username);

   this.bookService.loginUser(data.token);

  
   this.router.navigate(["home"]);

   } else {

     alert("Not a valid credentials, Please login again");

   }

 },

 error=>{

   alert("Not a valid credentials, Please login again");

 }

 )

}

else {

 console.log(this.credentials.username);

 console.log(this.credentials.password);

 console.log("Fields are empty");

}

}

}
