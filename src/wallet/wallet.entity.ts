import { Field, ObjectType } from '@nestjs/graphql'
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@ObjectType()
@Entity()
export class Wallet {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string
  
  @Field()
  @Column()
  balance: number

  @Field()
  @Column({ default: true })
  isActive: boolean
}
