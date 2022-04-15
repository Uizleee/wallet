import { Field, InputType, } from '@nestjs/graphql'
// import {  Column } from 'typeorm'

@InputType()
export class WalletDtoUp {
  @Field()
  id: string

  @Field( {nullable: true})
  balance: number

  @Field({ nullable: true })
  isActive: boolean
  // @Field({nullable: true})
  // transactionsId: string
  // static id: string
}
