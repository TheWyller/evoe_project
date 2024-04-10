import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1669721841337 implements MigrationInterface {
    name = 'createTables1669721841337'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "isAdm" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isAdm"`);
    }

}
