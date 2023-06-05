import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1685935584025 implements MigrationInterface {
    name = 'InitialMigration1685935584025'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "createdAd" TO "createdAt"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "creatdAt" TO "createdAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "createdAt" TO "creatdAt"`);
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "createdAt" TO "createdAd"`);
    }

}
