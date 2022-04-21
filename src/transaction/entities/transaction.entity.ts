import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm'

import { User } from '../../user/entities/user.entity'
import { Wallet } from '../../wallet/entities/wallet.entity'


@ObjectType()
@Entity()
export class Transact {
  @PrimaryGeneratedColumn()
  @Field()
  id: number
  
  @Field(()=> Int)
  @Column()
  value: number


  @Field()
  @CreateDateColumn()
  createdAt: Date

  @Field()
  @Column()
  userId: number
  
  @ManyToOne(()=> Wallet, wallet=>wallet.transact)
  @Field(()=>Wallet)
  wallet : Wallet

  @ManyToOne(()=> User, user=>user.transact)
  @Field(()=>User)
  user : User
}
