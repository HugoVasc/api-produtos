import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosController } from './products/produtos.controlle';

@Module({
  imports: [],
  controllers: [AppController, ProdutosController],
  providers: [AppService],
})
export class AppModule {}
