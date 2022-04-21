import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { WalletModule } from 'src/wallet/wallet.module'

import { User } from './entities/user.entity'
import { UserResolver } from './user.resolver'
import { UserService } from './user.service'

@Module({
  imports: [TypeOrmModule.forFeature([User]), WalletModule],
  providers: [UserResolver, UserService, User],
})
export class UserModule {}
