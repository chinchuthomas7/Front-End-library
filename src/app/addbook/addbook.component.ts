import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { BookModel } from '../books/book.model';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  title:string="ADD BOOK" ;

  constructor(private bookService:BookService, private router:Router) { }

  
  bookItem= new BookModel(null,null,null,null)

  ngOnInit(): void {
  }

AddBook(){
  this.bookService.newBook(this.bookItem);
  console.log("Called");    
  console.log("Success");
  this.router.navigate(['/books'])
}
}
