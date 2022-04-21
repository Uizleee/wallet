
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'


// import { WalletDto } from './dto/create-wallet.input'
import { WalletDtoUp } from './dto/update-wallet.input'
import { Wallet } from './entities/wallet.entity'

@Injectable()
export class WalletService {

  constructor(@InjectRepository(Wallet) private _walletRepository: Repository<Wallet>) { }

  async findAll(): Promise<Wallet[]> {
    return await this._walletRepository.find({
      relations: ['transact']
    })
  }

  async findByid(id: string): Promise<Wallet| undefined>  {
    return await this._walletRepository.findOne({
      where: { id },
      relations: ['transact', 'user']
    })
  }

  async create(userId: string): Promise<Wallet> {
    const w = this._walletRepository.create({
      balance: 0,
      user: {
        id: userId,
      }
    })
    return await this._walletRepository.save(w)

  }
  

  async updateWalletBalance(walletId: string, transactionValue: number): Promise<Wallet | undefined> {
    const property = await this._walletRepository.findOne(walletId)

    return await this._walletRepository.save({
      ...property,
      balance: (property?.balance || 0) + transactionValue
    })
  }

  async updateWallet(walletDtoUp: WalletDtoUp): Promise<Wallet | undefined> {
    await this._walletRepository.update({ id: walletDtoUp.id }, { ...walletDtoUp },)

    return await this.findByid(walletDtoUp.id)
  }

}
