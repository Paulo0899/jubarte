import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  card=[
    {
      url:'https://i.pinimg.com/564x/28/96/aa/2896aa637c462f0c2483c1412486b5d0.jpg?b=t',
      descricao:'Dracula'
    },
    {
      url:
      'https://i.pinimg.com/564x/0d/d2/77/0dd277d320b11d37d3d3ad42a9cd69a4.jpg?b=t://vignette.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png/revision/latest?cb=20170628120149',
      descricao: 'fabrica de chocolates'

    },
    {
      url:
      'https://i.pinimg.com/564x/be/b4/6e/beb46e838468cdd807e9a1fa57b39547.jpg',
      descricao: 'whatchman'
    },
    {
      url:
      'https://i.pinimg.com/564x/99/c2/80/99c2801386f788ba72c13ec949ec55c7.jpg?b=t://i.pinimg.com/564x/be/b4/6e/beb46e838468cdd807e9a1fa57b39547.jpg',
      descricao: 'whatchman'
    },
    {
      url:
      'https://i.pinimg.com/564x/7e/f2/40/7ef240ff6c17de6192bb6399e3289a15.jpg',
      descricao: 'whatchman'
    },
    {
      url:
      'https://i.pinimg.com/564x/c5/5a/79/c55a792287f803a82c108cdba262c2f6.jpg',
      descricao: 'whatchman'
    },
    {
      url:
      'https://i.pinimg.com/564x/fa/46/3d/fa463db3e8b1f24799b8f5fd6a30e9a0.jpg',
      descricao: 'whatchman'
    }
  ];


}
