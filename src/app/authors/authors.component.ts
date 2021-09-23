import { Component, OnInit } from '@angular/core';
import{AuthorModel} from'./author.model';
import { AuthorService } from '../author.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title:String="AUTHORS"

  authors! : AuthorModel[];

  // image properties

  imageWidth:number=200;
  imageMargin:number=5

  constructor(private authorService:AuthorService, private router:Router,public _auth:AuthService) { }

  ngOnInit(): void {

    this.authorService.getAuthors().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data))
    })
  }

  editAuthor(author:any)
  {
    localStorage.setItem("editAuthorId", author._id.toString());
    this.router.navigate(['updateauthor']);

  }
  deleteAuthor(author:any)
  {
    this.authorService.deleteAuthor(author._id)
      .subscribe((data) => {
        this.authors = this.authors.filter(a => a!== author);
      })
  

  }

}
