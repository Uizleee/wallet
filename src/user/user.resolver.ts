import { Resolver, Mutation, Args, Query } from '@nestjs/graphql'

// import { WalletDto } from 'src/wallet/dto/create-wallet.input'
import { WalletService } from 'src/wallet/wallet.service'

import { UserDto } from './dto/create-user.input'
import { User } from './entities/user.entity'
import { UserService } from './user.service'


@Resolver(() => User)
export class UserResolver {
  constructor(private readonly _userService: UserService, private _walletService: WalletService) { }

  @Mutation(() => User)
  async createUser(@Args('userInput') u: UserDto): Promise<User> {
    const user =  await this._userService.create(u)

    await this._walletService.create(user.id)

    return user
  }
    @Query(() => [User])
    async users(): Promise<User[]> {
      const a = await this._userService.findAllUser()
      // console.log(a)
      
      return a
    }

    // @Query(() => User, { name: 'user' })
    // findOne(@Args('id', { type: () => Int }) id: number) {
    //   return this.userService.findOne(id);
    // }

    // @Mutation(() => User)
    // updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    //   return this.userService.update(updateUserInput.id, updateUserInput);
    // }

    @Mutation(() => User)
    delete(@Args('id', { type: () => String }) id: string): Promise<User | string> {
      return this._userService.delete(id)
    }
  }

