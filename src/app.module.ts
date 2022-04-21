
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'

import { config } from './config/config'
import { gqlConfig } from './config/gql.config'
import { typeOrmConfig } from './config/typeorm.config'
import { TransactModule } from './transaction/transaction.module'
import { UserModule } from './user/user.module'
import { WalletModule } from './wallet/wallet.module'



@Module({
    imports: [
        GraphQLModule.forRoot(gqlConfig),
        ConfigModule.forRoot(config),
        TypeOrmModule.forRootAsync(typeOrmConfig),
        WalletModule, TransactModule, UserModule
    ],
})
export class AppModule { }
