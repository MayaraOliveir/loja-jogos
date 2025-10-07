import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from './categoria/categoria.module';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'db_loja_games',
      autoLoadEntities: true,
      synchronize: true, // Cria as tabelas automaticamente (usar só em desenvolvimento)
    }),
    ProdutoModule,
    CategoriaModule,
  ],
})
export class AppModule {}
