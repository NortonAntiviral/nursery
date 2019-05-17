'use strict'
const Database = use('Database')

/*
|--------------------------------------------------------------------------
| AddressSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class AddressSeeder {
  async run () {
    try {
      const customer = await Database.raw(`
      INSERT INTO nursery.addresses(address,address_2, city, state, country, zipcode,user_id)
      Values("2121 Elm Street", "apt 21", "miami", )
      `)
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = AddressSeeder
