import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor, NgClass } from '@angular/common';

interface Book {
  title: string;
  author: string;
  pages: number;
}

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    NgClass
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  books: Book[] = [
    {
      title: 'Кобзар',
      author: 'Тарас Шевченко',
      pages: 400
    },
    {
      title: '1984',
      author: 'Джордж Орвелл',
      pages: 320
    },
    {
      title: 'Гобіт',
      author: 'Дж. Р. Р. Толкін',
      pages: 300
    }
  ];

  newBook: Book = {
    title: '',
    author: '',
    pages: 0
  };

  addBook(): void {
    if (
      this.newBook.title.trim() === '' ||
      this.newBook.author.trim() === '' ||
      this.newBook.pages <= 0
    ) {
      return;
    }

    this.books.push({
      title: this.newBook.title,
      author: this.newBook.author,
      pages: this.newBook.pages
    });

    this.newBook = {
      title: '',
      author: '',
      pages: 0
    };
  }

  deleteBook(index: number): void {
    this.books.splice(index, 1);
  }

  getBookClass(book: Book): string {
    if (book.pages > 350) {
      return 'large-book';
    }

    if (book.pages >= 200) {
      return 'medium-book';
    }

    return 'small-book';
  }
}