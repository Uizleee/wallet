/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'

import { WalletDto } from './create-wallet.input'
import { Wallet } from './wallet.entity'
import { WalletService } from './wallet.service'

@Resolver(() => Wallet)
export class WalletResolver {

  constructor(private _walletService: WalletService) {}

  @Query(() => [Wallet])
  async getAllWallet(): Promise<Wallet[]> {
    return await this._walletService.findAll()
  }

  @Mutation(() => Wallet )
  async create(@Args('walletInput') w: WalletDto): Promise<Wallet> {
    return await this._walletService.create(w)
  }
}
