import { Column, Entity, IsNull, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  email: string

  @Column({ default: null })
  address?: string

  @Column({ default: 'test' })
  imageUrl?: string

  @Column({ default: null })
  password?: string

  @Column({ default: null })
  phoneNumber?: string
}