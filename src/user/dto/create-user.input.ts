import { Field, InputType, } from '@nestjs/graphql'
// import {  Column } from 'typeorm'

@InputType()
export class UserDto {

  @Field()
  firstName: string

  @Field()
  lastName: string

  @Field({nullable:true})
  middleName: string

  @Field()
  email: string
}


