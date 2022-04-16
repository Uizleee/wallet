import {MigrationInterface, QueryRunner} from "typeorm";

export class test21650092918782 implements MigrationInterface {
    name = 'test21650092918782'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "wallet" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "balance" integer NOT NULL,
                "isActive" boolean NOT NULL DEFAULT true,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAT" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_bec464dd8d54c39c54fd32e2334" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "transact" (
                "id" SERIAL NOT NULL,
                "value" integer NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "walletId" uuid,
                CONSTRAINT "PK_b440dffa0632533d56a51a48ab9" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "transact"
            ADD CONSTRAINT "FK_9ccae911e855e5c89e036f3f796" FOREIGN KEY ("walletId") REFERENCES "wallet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "transact" DROP CONSTRAINT "FK_9ccae911e855e5c89e036f3f796"
        `);
        await queryRunner.query(`
            DROP TABLE "transact"
        `);
        await queryRunner.query(`
            DROP TABLE "wallet"
        `);
    }

}
