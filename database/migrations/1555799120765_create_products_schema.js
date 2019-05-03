'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateProductsSchema extends Schema {
  up () {
    this.create('create_products', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('create_products')
  }
}

module.exports = CreateProductsSchema
