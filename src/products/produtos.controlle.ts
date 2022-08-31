import { Controller, Get, Param } from '@nestjs/common';
import { Body, Delete, Post, Put } from '@nestjs/common/decorators';
import { Produto } from './produto.model';
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
  constructor(private produtosService: ProdutosService) {}

  @Get()
  obterTodos(): Produto[] {
    return this.produtosService.obterTodos();
  }

  @Get(':id')
  obterUm(@Param() params): Produto {
    return this.produtosService.obterUm(params.id);
  }

  @Post()
  criar(@Body() produto: Produto): string {
    return this.produtosService.criar(produto);
  }
  @Put()
  alterar(@Body() produto): Produto {
    return this.produtosService.alterar(produto);
  }
  @Delete(':id')
  apagar(@Param() params): string {
    return this.produtosService.apagar(params.id);
  }
}
