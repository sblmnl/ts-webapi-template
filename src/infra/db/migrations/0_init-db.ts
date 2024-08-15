import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", (table) => {
    table.uuid("id", { primaryKey: true }).notNullable();
    table.string("external_id").notNullable().unique();
    table.string("email").notNullable().unique();
    table.string("username").notNullable().unique();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("users");
}
