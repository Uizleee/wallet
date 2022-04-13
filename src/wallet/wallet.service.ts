import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { WalletDto } from './create-wallet.input'
import { Wallet } from './wallet.entity'

@Injectable()
export class WalletService {
  constructor(@InjectRepository(Wallet) private _walletRepository: Repository<Wallet>) {}

  async findAll(): Promise<Wallet[]> {
    return await this._walletRepository.find()
  }

  async create(wallet: WalletDto): Promise<Wallet> {
    const w = this._walletRepository.create(wallet)
    return await this._walletRepository.save(w)
  }
}
