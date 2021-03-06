import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { WalletModule } from 'src/wallet/wallet.module'

// eslint-disable-next-line import/order
import { Transact } from './entities/transaction.entity'
import { TransactResolver } from './transaction.resolver'
import { TransactService } from './transaction.service'


@Module({
    imports: [TypeOrmModule.forFeature([Transact]), WalletModule],
    providers: [TransactResolver, TransactService, Transact],
})
export class TransactModule {}
