import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'usuario', schema: 'public' })
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  nome: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  senha: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
