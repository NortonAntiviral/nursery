'use strict'
const Database = use('Database')

/*
|--------------------------------------------------------------------------
| TagSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class TagSeeder {
  async run () {
    try {                   
      const tag = await Database.raw(`
      INSERT INTO nursery.tags (title)
      Values("turbo")
      `)
    } catch (error) {
      console.log(error);
    }

    try {                   
      const tag = await Database.raw(`
      INSERT INTO nursery.tags (title)
      Values("green")
      `)
    } catch (error) {
      console.log(error);
    }

    try {                   
      const tag = await Database.raw(`
      INSERT INTO nursery.tags (title)
      Values("retro")
      `)
    } catch (error) {
      console.log(error);
    }

    try {                   
      const tag = await Database.raw(`
      INSERT INTO nursery.tags (title)
      Values("jordan")
      `)
    } catch (error) {
      console.log(error);
    }

    try {                   
      const tag = await Database.raw(`
      INSERT INTO nursery.tags (title)
      Values("white")
      `)
    } catch (error) {
      console.log(error);
    }

    try {                   
      const tag = await Database.raw(`
      INSERT INTO nursery.tags (title)
      Values("nike")
      `)
    } catch (error) {
      console.log(error);
    }
    console.log("Added tags to Tags database")
  }
}

module.exports = TagSeeder
