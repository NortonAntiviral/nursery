'use strict'
const Database = use('Database')

/*
|--------------------------------------------------------------------------
| TypeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class TypeSeeder {
  async run () {
    try {
      const yeezy = await Database.raw(`
      INSERT INTO nursery.types(title, description)
      Values("Yeezy", "Adidas's Yeezy shoes" )
      `)
    } catch (error) {
      console.log(error);
    }
    try {
      const adidas = await Database.raw(`
      INSERT INTO nursery.types(title, description)
      Values("Adidas", "general shoe brand" )
      `)
    } catch (error) {
      console.log(error);
    }
    try {
      const jordans = await Database.raw(`
      INSERT INTO nursery.types(title, description)
      Values("Jordan", "Jordan shoes" )
      `)
    } catch (error) {
      console.log(error);
    }
    try {
      const nike = await Database.raw(`
      INSERT INTO nursery.types(title, description)
      Values("Nike", "General Nike brand shoes" )
      `)
    } catch (error) {
      console.log(error);
    }
    try {
      const lebron = await Database.raw(`
      INSERT INTO nursery.types(title, description)
      Values("Lebrons", "Lebron James shoes" )
      `)
    } catch (error) {
      console.log(error);
    }
    try {
      const chuckTaylor= await Database.raw(`
      INSERT INTO nursery.types(title, description)
      Values("Chuck Taylor", "Chuck Taylor shoes" )
      `)
    } catch (error) {
      console.log(error);
    }
    try {
      const converse= await Database.raw(`
      INSERT INTO nursery.types(title, description)
      Values("Converse", "insert description" )
      `)
    } catch (error) {
      console.log(error);
    }
  
    console.log('Added type to types database')
  }

  
}

module.exports = TypeSeeder
