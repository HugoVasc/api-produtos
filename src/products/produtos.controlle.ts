import { Controller, Get, Param } from '@nestjs/common';
import { Body, Delete, Post, Put } from '@nestjs/common/decorators';
import { Produto } from './produto.model';

@Controller('produtos')
export class ProdutosController {
  produtos: Produto[] = [
    new Produto('LIV01', 'Livro TDD e BDD na prática', 29.9),
    new Produto('LIV02', 'Livro Iniciando com Flutter', 39.9),
    new Produto('LIV03', 'Inteligência Artificial como serviço', 32.9),
  ];

  @Get()
  obterTodos(): Produto[] {
    return this.produtos;
  }

  @Get(':id')
  obterUm(@Param() params): Produto {
    let index = this.produtos.findIndex((obj) => obj.codigo == params.id);
    // return this.produtos[0];
    if (index !== -1) {
      console.log(this.produtos[index]);
      return this.produtos[index];
    } else {
      throw 'error';
    }
  }

  @Post()
  criar(@Body() produto: Produto): string {
    console.log(produto);
    this.produtos.push(produto);
    return 'Produto criado com sucesso';
  }
  @Put()
  alterar(@Body() produto): Produto {
    console.log(produto);
    return produto;
  }
  @Delete(':id')
  apagar(@Param() params): string {
    this.produtos.pop();
    return `Produto ${params.id} apagado`;
  }
}
