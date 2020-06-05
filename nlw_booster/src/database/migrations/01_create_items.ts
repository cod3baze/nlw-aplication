import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("items", (table) => {
    table.increments("id").primary();
    table.string("image").notNullable();
    table.string("title").notNullable();
  });
}

// "DESFAZER O MÉTODO up()"
export async function down(knex: Knex) {
  return knex.schema.dropTable("items");
}
