import { Injectable } from '@nestjs/common';
import { Produto } from './produto.model';

@Injectable()
export class ProdutosService {
  produtos: Produto[] = [
    new Produto('LIV01', 'Livro TDD e BDD na prática', 29.9),
    new Produto('LIV02', 'Livro Iniciando com Flutter', 39.9),
    new Produto('LIV03', 'Inteligência Artificial como serviço', 32.9),
  ];
  obterTodos(): Produto[] {
    return this.produtos;
  }
  obterUm(id: string): Produto {
    let index = this.produtos.findIndex((obj) => obj.codigo == id);
    // return this.produtos[0];
    if (index !== -1) {
      console.log(this.produtos[index]);
      return this.produtos[index];
    } else {
      throw 'error';
    }
  }
  criar(produto: Produto): string {
    this.produtos.push(produto);
    return 'Produto criado com sucesso';
  }
  alterar(produto: Produto): Produto {
    console.log('Produto alterado com sucesso');
    console.log(produto);
    return produto;
  }
  apagar(id: string): string {
    this.produtos.pop();
    return `Produto ${id} apagado`;
  }
}
