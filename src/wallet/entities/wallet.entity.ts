import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'

import { Transact } from '../../transaction/entities/transaction.entity'




@ObjectType()
@Entity()
export class Wallet {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string
  
  @Field(()=> Int)
  @Column()
  balance: number

  @Field()
  @Column({ default: true })
  isActive: boolean

  @Field()
  @CreateDateColumn()
  createdAt: Date

  @Field()
  @UpdateDateColumn()
  updatedAT: Date

  @OneToMany(()=>Transact, transact=>transact.wallet)
  @Field(()=>Transact)
  transact: Transact[]
}
