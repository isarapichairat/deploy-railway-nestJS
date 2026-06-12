import { MigrationInterface, QueryRunner } from "typeorm";

export class Phone1781288166728 implements MigrationInterface {
    name = 'Phone1781288166728'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "phone" character varying NOT NULL`);
    }

}
