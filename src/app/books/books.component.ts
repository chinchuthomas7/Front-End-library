import { Component, OnInit } from '@angular/core';
import {BookModel} from './book.model';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  title:String ="BOOKS"

  
  books !: BookModel[]

  // giving image properties

  imageWidth:number = 200;
 
  imageMargin:number=5;

  // inside constructor we are calling getBooks().for this import book.service

  constructor(private bookService:BookService, private router:Router,public _auth:AuthService) { }

  ngOnInit(): void {

   
    this.bookService.getBooks().subscribe((data)=>{

      this.books=JSON.parse(JSON.stringify(data));
      console.log(this.books)
    })
  }
  editBook(book:any)
  {
    localStorage.setItem("editBookId", book._id.toString());
    this.router.navigate(['/updatebook']);

  }

  deleteBook(book:any)
  {
    this.bookService.deleteBook(book._id)
      .subscribe((data) => {
        this.books = this.books.filter(b => b !== book);
      })
  

  }
  
 

}
