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
      INSERT INTO nursery.addresses(address,address_2, city, state, country, zipcode, address_type, user_id)
      Values("2121 Elm Street", "apt 21", "miami","fl", "USA", "34567", "shipping", 1 )
      `)
    } catch (error) {
      console.log(error);
    }
    try {
      const customer = await Database.raw(`
      INSERT INTO nursery.addresses(address,address_2, city, state, country, zipcode, address_type, user_id)
      Values("4175 Crenshaw Blvd", "apt 2", "oakland","ca", "USA", "41754", "billing", 1 )
      `)
    } catch (error) {
      console.log(error);
    }
    try {
      const customer = await Database.raw(`
      INSERT INTO nursery.addresses(address,address_2, city, state, country, zipcode, address_type, user_id)
      Values("2941 Cambridge Dr", "apt 302", "richmond","va", "USA", "63205", "shipping", 2 )
      `)
    } catch (error) {
      console.log(error);
    }
    try {
      const customer = await Database.raw(`
      INSERT INTO nursery.addresses(address,address_2, city, state, country, zipcode, address_type, user_id)
      Values("2941 Cambridge Dr", "apt 302", "richmond","va", "USA", "63205", "billing", 2 )
      `)
    } catch (error) {
      console.log(error);
    }
    try {
      const customer = await Database.raw(`
      INSERT INTO nursery.addresses(address,address_2, city, state, country, zipcode, address_type, user_id)
      Values("328 grand ave", "apt 4g", "brooklyn","ny", "USA", "11745", "shipping", 3 )
      `)
    } catch (error) {
      console.log(error);
    }
    try {
      const customer = await Database.raw(`
      INSERT INTO nursery.addresses(address,address_2, city, state, country, zipcode, address_type, user_id)
      Values("358 billy st", "", "flushing","ny", "USA", "11358", "billing", 3 )
      `)
    } catch (error) {
      console.log(error);
    }
    console.log('Added addresses to customers')
  }
}

module.exports = AddressSeeder
