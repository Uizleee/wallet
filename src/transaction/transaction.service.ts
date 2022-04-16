import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { TransactDto } from './dto/create-transaction.input'
import { Transact } from './entities/transaction.entity'

@Injectable()
export class TransactService {

  constructor(
    @InjectRepository(Transact) private _transactRepository: Repository<Transact>
  ) {}

  async findAll(): Promise<Transact[]> {
    return await this._transactRepository.find({
      relations: ['wallet']
    })
  }

  async findByid(id:number): Promise<Transact | undefined> {
    return await this._transactRepository.findOne({
      where: { id },
      relations: ['wallet']
    })
  }

  async create(transact: TransactDto): Promise<Transact> {
    const trasaction = this._transactRepository.create({
      value: transact.value,
      wallet: {
        id: transact.walletId
      }
    })

    return await this._transactRepository.save(trasaction)

  }
}
