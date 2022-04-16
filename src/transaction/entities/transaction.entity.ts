import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm'

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
  
  @ManyToOne(()=> Wallet, wallet=>wallet.transact)
  @Field(()=>Wallet)
  wallet : Wallet
}
