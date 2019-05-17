'use strict'
const Database = use('Database')

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class RoleSeeder {
  async run () {
    try {
      const customer = await Database.raw(`
      INSERT INTO nursery.roles(title)
      Values("customer")
      `)
      console.log(`added Customer to Roles Table`);
    } catch (error) {
      console.log(error);
    }
    try {
      const service = await Database.raw(`
      INSERT INTO nursery.roles(title)
      Values("customer")
      `)
      console.log(`added Service to Roles Table`);
    } catch (error) {
      console.log(error);
    }
    try {
      const Admin = await Database.raw(`
      INSERT INTO nursery.roles(title)
      Values("admin")
      `)
      console.log(`added Admin to Roles Table`);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = RoleSeeder
