import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showForm = false;

  polls = [{
    question: "Do you Like iphone or android?",
    image: 'https://images.pexels.com/photos/593319/pexels-photo-593319.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=94',
    votes: [0, 2, 5, 8],
    voted: true,
    
  },
  {
    question: "Do you Like Blockchain?",
    image: 'https://images.pexels.com/photos/593319/pexels-photo-593319.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=94',
    votes: [0, 2, 5],
    voted: false,
  },
]
}
