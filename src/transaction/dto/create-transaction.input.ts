import { Field, InputType, } from '@nestjs/graphql'
// import {  Column } from 'typeorm'

@InputType()
export class TransactDto {
  // @Field({ nullable: true })
  // id: string

  @Field({nullable: true})
  value: number

  @Field({ nullable: true })
  walletId: string
}
