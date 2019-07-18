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
      const yeezyBoost350v2 = await Database.raw(`
      INSERT INTO nursery.types(title, description)
      Values("Yeezy Boost 350 V2", "The adidas Yeezy Boost 350 V2 'Off White' takes the popular Yeezy model in a monochromatic direction. The shoe features a white woven Primeknit upper. The 'SPLY-350' messaging, which defined past Yeezy Boost 350 V2 releases, is also done in white so it is camouflaged within the upper. A cream midsole wraps around Boost cushioning to create a pristine version of the silhouette." )
      `)
    } catch (error) {
      console.log(error);
    }
    try {
      const yeezyBoost350v2 = await Database.raw(`
      INSERT INTO nursery.types(title, description)
      Values("Adidas", "The adidas Yeezy Boost 350 V2 'Off White' takes the popular Yeezy model in a monochromatic direction. The shoe features a white woven Primeknit upper. The 'SPLY-350' messaging, which defined past Yeezy Boost 350 V2 releases, is also done in white so it is camouflaged within the upper. A cream midsole wraps around Boost cushioning to create a pristine version of the silhouette." )
      `)
    } catch (error) {
      console.log(error);
    }
    try {
      const retroTurbo = await Database.raw(`
      INSERT INTO nursery.types(title, description)
      Values("Jordan Retro 1 Turbo Green", "The Air Jordan 1 High GS “Turbo Green” is the kids’ grade school sizing for the popular colorway released in 2019. A distressed treatment was used on the leather of the upper to create a vintage effect, and the kids' Jordan 1 has a teal and white color scheme with hints of purple and yellow to pay homage to the Charlotte Hornets, the NBA team that hosted the 2019 NBA All-Star Game. A cream midsole helps continue the vintage aesthetic, and each pair is completed with a grey outsole." )
      `)
    } catch (error) {
      console.log(error);
    }
    try {
      const retroTurbo = await Database.raw(`
      INSERT INTO nursery.types(title, description)
      Values("Nike", "The Air Jordan 1 High GS “Turbo Green” is the kids’ grade school sizing for the popular colorway released in 2019. A distressed treatment was used on the leather of the upper to create a vintage effect, and the kids' Jordan 1 has a teal and white color scheme with hints of purple and yellow to pay homage to the Charlotte Hornets, the NBA team that hosted the 2019 NBA All-Star Game. A cream midsole helps continue the vintage aesthetic, and each pair is completed with a grey outsole." )
      `)
    } catch (error) {
      console.log(error);
    }
    try {
      const lebronZoom3 = await Database.raw(`
      INSERT INTO nursery.types(title, description)
      Values("Zoom Lebron 3 QS", "The Nike Zoom LeBron 3 “Superman” is a 2019 retro release of the once-rare player exclusive colorway for LeBron James. Originally produced only for James to wear in 2006, the Superman-themed colorway of his third signature basketball shoe features a white, red, blue, and yellow color combination inspired by the Man of Steel’s iconic superhero suit. This is also known as the “Alternate Superman” colorway, as there was a similar PE version with the blue and red accents reversed that James also wore." )
      `)
    } catch (error) {
      console.log(error);
    }
    try {
      const chuckTaylorOW= await Database.raw(`
      INSERT INTO nursery.types(title, description)
      Values("Chuck Taylor", "insert description" )
      `)
    } catch (error) {
      console.log(error);
    }
    try {
      const chuckTaylorOW= await Database.raw(`
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
