import { Component, OnInit } from '@angular/core';
import { bookservice } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros: any;
  bookservice : bookService

  constructor(bookservice : BokkService) {

    this.bookservice = bookService;

   }

  ngOnInit(): void {

    this.livros = this.bookService.getbook().subscribe(data=>{
      this.livros = data;  
    })
  }

}
