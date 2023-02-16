import { InMemoryDbService } from 'angular-in-memory-web-api';

export class CuidadorData implements InMemoryDbService {
  createDb() {
    let cuidadores = [
      {
        id: 0,
        nombre: 'Ander',
        apellido:'Frago',
        precio: 12.99,
        descripcion: 'Soy un cuidador con 10 años de expreriencia',
        categorias: ['animales', 'mayores', 'niños'],
        imagen: 'https://picsum.photos/820/320?grayscale',
      },
      {
        id: 1,
        nombre: 'Iban',
        apellido:'Sarria',
        precio: 6.99,
        descripcion: 'Tengo a mi cargo 12 perros',
        categorias: ['animales'],
        imagen: 'https://picsum.photos/820/320?grayscale',
      },
      {
        id: 2,
        nombre: 'Maria',
        apellido:'Martin',
        precio: 7.99,
        descripcion: 'Soy experta cuidando niños',
        categorias: ['niños'],
        imagen: 'https://picsum.photos/820/320?grayscale',
      },
      {
        id: 3,
        nombre: 'Dani',
        apellido:'Duran',
        precio: 8.99,
        descripcion: 'Me encantan los animales y los niños',
        categorias: ['animales','niños'],
        imagen: 'https://picsum.photos/820/320?grayscale',
      },
      {
        id: 4,
        nombre: 'Abilio',
        apellido:'Diaz',
        precio: 9.99,
        descripcion: 'Experiencia cuidando a mayores',
        categorias: ['mayores'],
        imagen: 'https://picsum.photos/820/320?grayscale',
      },
      {
        id: 5,
        nombre: 'Ana',
        apellido:'Ramos',
        precio: 5.99,
        descripcion: 'Gran experiencia con niños',
        categorias: ['niños'],
        imagen: 'https://picsum.photos/820/320?grayscale',
      },
    ];
    return { cuidadores: cuidadores };
  }
}
