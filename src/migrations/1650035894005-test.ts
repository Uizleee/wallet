import {MigrationInterface, QueryRunner} from "typeorm";

export class test1650035894005 implements MigrationInterface {
    name = 'test1650035894005'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "transaction" (
                "transactionId" SERIAL NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAT" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_bdcf2c929b61c0935576652d9b0" PRIMARY KEY ("transactionId")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "transaction"
        `);
    }

}
