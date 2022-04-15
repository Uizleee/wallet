import { Field, InputType, } from '@nestjs/graphql'
// import {  Column } from 'typeorm'

@InputType()
export class WalletDto {
  // @Field({ nullable: true })
  // id: string

  @Field({nullable: true})
  balance: number

  @Field({ nullable: true })
  isActive: boolean
}
