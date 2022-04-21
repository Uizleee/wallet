import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'


import { UserDto } from './dto/create-user.input'
import { User } from './entities/user.entity'


@Injectable()
export class UserService {
  
  constructor(@InjectRepository(User) private _userRepository: Repository<User>) { }

  async create(user: UserDto): Promise<User> {
    const userCreated = this._userRepository.create(user)
    
    return await this._userRepository.save(userCreated)

  }

  async findAllUser(): Promise<User[]> {
    return await this._userRepository.find({
      relations: ['transact', 'wallet', 'wallet.transact']
    })
  }

  async delete(userId: string): Promise<User | string> {
    await this._userRepository.softRemove({id: userId})
    return  "ok"

  }
}
