import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity';

@Entity({ name: 'tb_produtos' })
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({
    length: 100,
    nullable: false,
  })
  nome: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
  })
  preco: number;
  @Column({
    length: 500,
    nullable: true,
  })
  descricao: string;

  // Uma Categoria tem muitos Produtos
  @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
    onDelete: 'CASCADE',
  })
  categoria: Categoria;
}
