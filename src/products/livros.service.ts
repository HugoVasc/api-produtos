import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Livro } from './livro.model';

@Injectable()
export class LivrosService {
  constructor(
    @InjectModel(Livro)
    private livroModel: typeof Livro,
  ) {}
  async obterTodos(): Promise<Livro[]> {
    return this.livroModel.findAll();
  }
  async obterUm(id: string): Promise<Livro> {
    return this.livroModel.findByPk(id);
  }
  async criar(livro: Livro): Promise<string> {
    this.livroModel.create(livro);
    return 'Livro criado com sucesso';
  }
  async alterar(livro: Livro): Promise<[number]> {
    return this.livroModel.update(livro, {
      where: {
        id: livro.id,
      },
    });
  }
  async apagar(id: string): Promise<string> {
    const livro: Livro = await this.obterUm(id);
    livro.destroy();
    return 'Livro apagado com sucesso';
  }
}
