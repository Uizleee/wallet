import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { TransactDto } from './dto/create-transaction.input'
import { Transact } from './entities/transaction.entity'

@Injectable()
export class TransactService {

  constructor(@InjectRepository(Transact) private _transactRepository: Repository<Transact>) {}

  async findAll(): Promise<Transact[]> {
    return await this._transactRepository.find()
  }

  async findByid(id:string): Promise<Transact | undefined> {
    return await this._transactRepository.findOne({id})
  }

  async create(transact: TransactDto): Promise<Transact> {
    const y = this._transactRepository.create(transact)
    return await this._transactRepository.save(y)

  }
}