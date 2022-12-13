import { Controller, Get, Param } from '@nestjs/common';
import { Body, Delete, Post, Put } from '@nestjs/common/decorators';
import { Livro } from './livro.model';
import { LivrosService } from './livros.service';

@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {}

  @Get()
  async obterTodos(): Promise<Livro[]> {
    return this.livrosService.obterTodos();
  }

  @Get(':id')
  async obterUm(@Param() params): Promise<Livro> {
    return this.livrosService.obterUm(params.id);
  }

  @Post()
  async criar(@Body() livro: Livro): Promise<string> {
    return this.livrosService.criar(livro);
  }
  @Put()
  async alterar(@Body() livro): Promise<[number]> {
    return this.livrosService.alterar(livro);
  }
  @Delete(':id')
  async apagar(@Param() params): Promise<string> {
    return this.livrosService.apagar(params.id);
  }
}
