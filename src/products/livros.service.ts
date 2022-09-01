import { Injectable } from '@nestjs/common';
import { Livro } from './livro.model';

@Injectable()
export class LivrosService {
  livros: Livro[] = [];
  obterTodos(): Livro[] {
    return this.livros;
  }
  obterUm(id: string): Livro {
    let index = this.livros.findIndex((obj) => obj.codigo == id);
    if (index !== -1) {
      console.log(this.livros[index]);
      return this.livros[index];
    } else {
      throw 'error';
    }
  }
  criar(livro: Livro): string {
    this.livros.push(livro);
    return 'Livro criado com sucesso';
  }
  alterar(livro: Livro): { message: string; livro: Livro } {
    let index = this.livros.findIndex((obj) => obj.codigo == livro.codigo);
    if (index !== -1) {
      console.log(this.livros[index]);
      return {
        message: 'Livro alterado com sucesso',
        livro: this.livros[index],
      };
    } else {
      throw 'error';
    }
  }
  apagar(id: string): string {
    let index = this.livros.findIndex((obj) => obj.codigo == id);
    if (index !== -1) {
      console.log(this.livros[index]);
      this.livros[index];
      return `Livro ${id} alterado com sucesso`;
    } else {
      throw 'error';
    }
  }
}
