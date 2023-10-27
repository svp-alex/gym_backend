import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { UserEntity } from '../../users/entities/user.entity'

@Entity('trainings')
export class TrainingEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  date: Date

  @ManyToMany(() => UserEntity, (user) => user.training)
  user: UserEntity
}
