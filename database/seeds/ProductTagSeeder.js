'use strict'
const Database = use('Database')

/*
|--------------------------------------------------------------------------
| ProductTagSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class ProductTagSeeder {
  async run () {
    try {                   
      const addingTag = await Database.raw(`
      INSERT INTO nursery.product_tag (product_id,tag_id)
      Values(1,5)
      `)
    } catch (error) {
      console.log(error);
    }
    try {                   
      const addingTag = await Database.raw(`
      INSERT INTO nursery.product_tag (product_id,tag_id)
      Values(2,2)
      `)
    } catch (error) {
      console.log(error);
    }
    try {                   
      const addingTag = await Database.raw(`
      INSERT INTO nursery.product_tag (product_id,tag_id)
      Values(3,4)
      `)
    } catch (error) {
      console.log(error);
    }
    try {                   
      const addingTag = await Database.raw(`
      INSERT INTO nursery.product_tag (product_id,tag_id)
      Values(3,6)
      `)
    } catch (error) {
      console.log(error);
    }
    try {                   
      const addingTag = await Database.raw(`
      INSERT INTO nursery.product_tag (product_id,tag_id)
      Values(4,1)
      `)
    } catch (error) {
      console.log(error);
    }
    try {                   
      const addingTag = await Database.raw(`
      INSERT INTO nursery.product_tag (product_id,tag_id)
      Values(4,2)
      `)
    } catch (error) {
      console.log(error);
    }
    try {                   
      const addingTag = await Database.raw(`
      INSERT INTO nursery.product_tag (product_id,tag_id)
      Values(4,3)
      `)
    } catch (error) {
      console.log(error);
    }
    try {                   
      const addingTag = await Database.raw(`
      INSERT INTO nursery.product_tag (product_id,tag_id)
      Values(4,4)
      `)
    } catch (error) {
      console.log(error);
    }
    try {                   
      const addingTag = await Database.raw(`
      INSERT INTO nursery.product_tag (product_id,tag_id)
      Values(4,5)
      `)
    } catch (error) {
      console.log(error);
    }
    try {                   
      const addingTag = await Database.raw(`
      INSERT INTO nursery.product_tag (product_id,tag_id)
      Values(4,6)
      `)
    } catch (error) {
      console.log(error);
    }
    try {                   
      const addingTag = await Database.raw(`
      INSERT INTO nursery.product_tag (product_id,tag_id)
      Values(5,5)
      `)
    } catch (error) {
      console.log(error);
    }
    console.log("Connected Products and Tags Database");
  }
}

module.exports = ProductTagSeeder
