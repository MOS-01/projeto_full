import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1685912204227 implements MigrationInterface {
    name = 'InitialMigration1685912204227'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "constacts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "creatdAd" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "deletedAt" date, "userId" uuid, CONSTRAINT "PK_7de476e045c9f78dab208f7ee58" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(140) NOT NULL, "email" character varying(45) NOT NULL, "phone" character varying(14) NOT NULL, "password" character varying(120) NOT NULL, "creatdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "deletedAt" date, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "constacts" ADD CONSTRAINT "FK_629ccb77e93a6bb74b49754e68c" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "constacts" DROP CONSTRAINT "FK_629ccb77e93a6bb74b49754e68c"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "constacts"`);
    }

}
