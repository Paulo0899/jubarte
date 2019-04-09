import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent {

  card = [
    {
      url: 'https://i.pinimg.com/564x/ad/d4/25/add425098df91602c435b25c17252dfc.jpg',
      descricao: 'the-walking-dead'
    },
    {
      url: 'https://i.pinimg.com/originals/bc/af/87/bcaf87ecbfb61dca02a14fbf895b7aa4.jpg',
      descricao: 'gotham'

    },
    {
      url: 'https://i.pinimg.com/originals/50/a2/88/50a288c9d7ec5d7d24f1750c75fe5833.jpg',
      descricao: 'game-of-thrones'
    },
    {
      url: 'https://i.pinimg.com/564x/1b/f2/fd/1bf2fddc29b37f69f3c36d379adf9d6d.jpg',
      descricao: 'demolidor'
    },
    {
      url: 'https://i.pinimg.com/564x/ff/78/8b/ff788b82e194f73193932fbb3301482f.jpg',
      descricao: 'vikings'
    },
    {
      url: 'https://i.pinimg.com/564x/ed/90/61/ed906130eaf2b0731bd4058b6baba21b.jpg',
      descricao: 'the-flash'
    },
    {
      url: 'https://i.pinimg.com/564x/35/6d/33/356d333ae3be67d0455712002690b405.jpg?b=t',
      descricao: 'the-good-doctor'
    }
  ];

}
