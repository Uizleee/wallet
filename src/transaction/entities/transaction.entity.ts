import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm'

import { Wallet } from 'src/wallet/entities/wallet.entity'


@ObjectType()
@Entity()
export class Transact {
  @PrimaryGeneratedColumn()
  @Field()
  id: string
  
  @Field(()=> Int)
  @Column()
  cr: number


  @Field()
  @CreateDateColumn()
  createdAt: Date

  @Field()
  @UpdateDateColumn()
  updatedAT: Date
  
  @ManyToOne(()=> Wallet, wallet=>wallet.transact)
  @Field(()=>Wallet)
  wallet : Wallet
}