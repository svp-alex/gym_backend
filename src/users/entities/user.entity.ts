import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { TrainingEntity } from '../../trainings/entities/training.entity'

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  photoUrl: string

  @ManyToMany(() => TrainingEntity, (training) => training.user)
  training: TrainingEntity
}
