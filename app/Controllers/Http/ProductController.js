'use strict'

class ProductController {
    index({view}){
        return view.render('products/all');
    }
}



module.exports = ProductController
