import { Field, ObjectType } from '@nestjs/graphql'
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, DeleteDateColumn } from 'typeorm'

import { Transact } from '../../transaction/entities/transaction.entity'
import { Wallet } from '../../wallet/entities/wallet.entity'


@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string
  
  @Field()
  @Column()
  firstName: string

  @Field()
  @Column()
  lastName: string

  @Field()
  @Column({nullable: true,default: null})
  middleName: string

  @Field()
  @Column()
  email: string

  @Field()
  @CreateDateColumn()
  createdAt: Date

  @Field()
  @UpdateDateColumn()
  updatedAT: Date

  @Field()
  @DeleteDateColumn()
  deletedAT: Date

  @OneToMany(()=>Transact, transact=>transact.user)
  @Field(()=>[Transact])
  transact: [Transact]

  @OneToMany(()=>Wallet, wallet=>wallet.user)
  @Field(()=>[Wallet])
  wallet: [Wallet]
}
