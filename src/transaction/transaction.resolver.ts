import { Resolver, Query, Mutation, Args, } from '@nestjs/graphql'

import { TransactDto } from './dto/create-transaction.input'
import { Transact } from './entities/transaction.entity'
import { TransactService } from './transaction.service'


@Resolver(() => Transact)
export class TransactResolver {

  constructor(private _transactService: TransactService) {}

  @Query(() => [Transact])
  async async (): Promise<Transact[]> {
    return await this._transactService.findAll()
  }
  @Query(() => Transact)
  async transaction(@Args('id',{ type:() => String}) id:string): Promise<Transact | undefined> {
    return await this._transactService.findByid(id)
  }

  @Mutation(() => Transact )
  async createTR(@Args('transactInput') w: TransactDto): Promise<Transact> {
    return await this._transactService.create(w)
  }
}