import { Controller, Get, Param } from '@nestjs/common';
import { Body, Delete, Post, Put } from '@nestjs/common/decorators';
import { Livro } from './livro.model';
import { LivrosService } from './livros.service';

interface LivrosResponse {
  message: string;
  livro: Livro;
}
@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {}

  @Get()
  obterTodos(): Livro[] {
    return this.livrosService.obterTodos();
  }

  @Get(':id')
  obterUm(@Param() params): Livro {
    return this.livrosService.obterUm(params.id);
  }

  @Post()
  criar(@Body() livro: Livro): string {
    return this.livrosService.criar(livro);
  }
  @Put()
  alterar(@Body() livro): LivrosResponse {
    return this.livrosService.alterar(livro);
  }
  @Delete(':id')
  apagar(@Param() params): string {
    return this.livrosService.apagar(params.id);
  }
}
