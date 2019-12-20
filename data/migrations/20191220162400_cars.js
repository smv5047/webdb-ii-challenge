
exports.up = async function(knex) {
  await knex.schema.createTable("cars", (table) => {
      table.increments("id")
      //VIN
      table.integer("VIN").notNull().unique()
      //MAKE
      table.text("make").notNull()
      //MODEL
      table.text("model").notNull()
      //MILEAGE
      table.float("mileage").notNull()
      //TRANSMISSION
      table.text("transmission")
      //TITLESTATUS
      table.text("titleStatus")
  })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("cars")
};
