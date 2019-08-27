'use strict'
const Database = use('Database');
/*
|--------------------------------------------------------------------------
| ProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class ProductSeeder {
  async run () {
    try {                   
      const yeezyBoost350v2 = await Database.raw(`
      INSERT INTO nursery.products(sku, title, description, image_url, color, price, qty, material, brand_id, type_id, user_id)
      Values("YZB350V22175WHITE","Yeezy Boost 350 V2",
       "The adidas Yeezy Boost 350 V2 'Off White' takes the popular Yeezy model in a monochromatic direction. The shoe features a white woven Primeknit upper. The 'SPLY-350' messaging, which defined past Yeezy Boost 350 V2 releases, is also done in white so it is camouflaged within the upper. A cream midsole wraps around Boost cushioning to create a pristine version of the silhouette.",
        "/img/products/Adidas-YeezyBoost-350v2.png","white",300,10,"mesh", 2, 1, 5)
      `)
    } catch (error) {
      console.log(error);
    }
    try {                   
      const Adidas = await Database.raw(`
      INSERT INTO nursery.products(sku, title, description, image_url, color, price, qty, material, brand_id, type_id, user_id)
      Values("ADS3303ADVMSHRN","Advanced Mid Shenron",
       "insert description",
        "/img/products/Adidas-ADVMidShenron-Green.png","green",300,10,"mesh", 2, 2, 5)
      `)
    } catch (error) {
      console.log(error);
    }
    try {                   
      const nikeJordanInf = await Database.raw(`
      INSERT INTO nursery.products(sku, title, description, image_url, color, price, qty, material, brand_id, type_id, user_id)
      Values("JRD6INF4987BLACK","Jordan 5 Infrared",
       "insert description",
        "/img/products/Jordan-Jordan6Infrared-Black.png","black",300,10,"mesh", 1, 3, 5)
      `)
    } catch (error) {
      console.log(error);
    }
    try {                   
      const nikeJordanInf = await Database.raw(`
      INSERT INTO nursery.products(sku, title, description, image_url, color, price, qty, material, brand_id, type_id, user_id)
      Values("JRD1T4103GRN","Jordan 1",
       "insert description",
        "/img/products/Nike-Jordan-1-Turbo-Green.png","Green",300,10,"mesh", 1, 3, 5)
      `)
    } catch (error) {
      console.log(error);
    }
    try {                   
      const chuckTaylorOW = await Database.raw(`
      INSERT INTO nursery.products(sku, title, description, image_url, color, price, qty, material, brand_id, type_id, user_id)
      Values("CONCTO3804WHITE","Chuck Tayer Off White",
       "insert description",
        "/img/products/Converse-Chuck-Taylor-Off-White.png","white",300,10,"mesh", 3, 6, 5)
      `)
    } catch (error) {
      console.log(error);
    }


    console.log("added shoes to Products database")
  }
}

module.exports = ProductSeeder
