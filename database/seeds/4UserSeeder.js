'use strict'
const Database = use('Database')
const Hash = use('Hash')

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class UserSeeder {
  async run () {
    let password = await Hash.make('test123');
    let master = await Hash.make('Sk3l3t0nK3y')
    try {
      const user1 = await Database.raw(`
      INSERT INTO nursery.users(username, email, password, f_name, l_name)
      Values("customer1", "customer1@gmail.com", "${password}", "John", "Doe")
      `)
      console.log(`added customer1 to database`);
    } catch (error) {
      console.log(error);
    }  
    try {
      const user2 = await Database.raw(`
      INSERT INTO nursery.users(username, email, password, f_name, l_name)
      Values("customer2", "customer2@gmail.com", "${password}", "Laquisha", "Johnson")
      `)
      console.log(`added customer2 to database`);
    } catch (error) {
      console.log(error);
    }
    try {
      const user3 = await Database.raw(`
      INSERT INTO nursery.users(username, email, password, f_name, l_name)
      Values("customer3", "customer3@gmail.com", "${password}", "Ashy", "Larry")
      `)
      console.log(`added customer3 to database`);
    } catch (error) {
      console.log(error);
    }
    try {
      const user4 = await Database.raw(`
      INSERT INTO nursery.users(username, email, password, f_name, l_name)
      Values("service1", "service1@gmail.com", "${password}", "Tyrone", "Biggums")
      `)
      console.log(`added service1 to database`);
    } catch (error) {
      console.log(error);
    }
    try {
      const user5 = await Database.raw(`
      INSERT INTO nursery.users(username, email, password, f_name, l_name)
      Values("admin1", "admin1@gmail.com", "${password}", "Leonard", "Washington")
      `)
      console.log(`added admin1 to database`);
    } catch (error) {
      console.log(error);
    }
    try {
      const user6 = await Database.raw(`
      INSERT INTO nursery.users(username, email, password, f_name, l_name)
      Values("NortonAntiviral", "officialantiviral@gmail.com", "${master}", "Chris", "Norton")
      `)
      console.log(`added master to database`);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserSeeder
