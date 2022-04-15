import { Resolver, Query, Mutation, Args, } from '@nestjs/graphql'

import { WalletDto } from './dto/create-wallet.input'
import { WalletDtoUp } from './dto/update-wallet.input'
import { Wallet } from './entities/wallet.entity'
import { WalletService } from './wallet.service'

@Resolver(() => Wallet)
export class WalletResolver {

  constructor(private _walletService: WalletService) {}

  @Query(() => [Wallet])
  async wallets(): Promise<Wallet[]> {
    return await this._walletService.findAll()
  }
  @Query(() => Wallet)
  async wallet(@Args('id',{ type:() => String}) id:string): Promise<Wallet | undefined> {
    return await this._walletService.findByid(id)
  }

  @Mutation(() => Wallet )
  async create(@Args('walletInput') w: WalletDto): Promise<Wallet> {
    return await this._walletService.create(w)
  }

  @Mutation(() => Wallet )
  async updateWallet(@Args('walletInput') walletDtoUp: WalletDtoUp): Promise<Wallet | undefined> {
    return await this._walletService.updateWallet(walletDtoUp)
  }

  // @Mutation(() => Wallet )
  // async deposit(@Args('walletInput') walletDtoUp: WalletDtoUp): Promise<Wallet | undefined> {
  //   return await this._walletService.updateWallet(walletDtoUp)
  // }
}


