import { Field, InputType, } from '@nestjs/graphql'
// import {  Column } from 'typeorm'

@InputType()
export class WalletDto {
  @Field()
  balance: number

  @Field({ nullable: true })
  isActive: boolean
}
