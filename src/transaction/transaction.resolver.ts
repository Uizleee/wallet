import { Resolver, Query, Mutation, Args, } from '@nestjs/graphql'
import { getConnection } from "typeorm"

import { WalletService } from 'src/wallet/wallet.service'


import { TransactDto } from './dto/create-transaction.input'
import { Transact } from './entities/transaction.entity'
import { TransactService } from './transaction.service'


@Resolver(() => Transact)
export class TransactResolver {

  constructor(private _transactService: TransactService, private _walletService: WalletService) { }

  @Query(() => [Transact])
  async transactions(): Promise<Transact[]> {
    return await this._transactService.findAll()
  }
  @Query(() => Transact)
  async transaction(@Args('id', { type: () => Number }) id: number): Promise<Transact | undefined> {
    return await this._transactService.findByid(id)
  }

  @Mutation(() => Transact)
  async createTransaction(@Args('transactInput') w: TransactDto): Promise<Transact | null> {
    const connection = getConnection()
    const queryRunner = connection.createQueryRunner()

    await queryRunner.startTransaction()

    try {
      await this._walletService.updateWalletBalance(w.walletId, w.value)
      return await this._transactService.create(w)
    } catch (err) {
      await queryRunner.rollbackTransaction()
      return null
    }
  }
}
