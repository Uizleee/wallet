import {MigrationInterface, QueryRunner} from "typeorm";

export class test1650038994527 implements MigrationInterface {
    name = 'test1650038994527'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "transacts" (
                "transactionId" SERIAL NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAT" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_4165da6dad81f673a80abf67509" PRIMARY KEY ("transactionId")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "transacts"
        `);
    }

}
