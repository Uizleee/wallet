import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm'

import { Transact } from '../../transaction/entities/transaction.entity'
import { User } from '../../user/entities/user.entity'


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
  @Field(()=>[Transact])
  transact: [Transact]

  @ManyToOne(()=> User, user=>user.wallet)
  @Field(()=>User)
  user : User
}
