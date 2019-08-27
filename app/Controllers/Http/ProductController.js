'use strict'
const Database = use('Database');
const sanitize = use('sqlstring');
const { validate } = use('Validator');

class ProductController {   
    async index({view, auth, request, response}){
        let pageRows = request.all().hasOwnProperty('rows') ? parseInt(request.all().rows) : 30;
        let start = request.all().hasOwnProperty('page') ? ((parseInt(request.all().page) - 1) * pageRows) : 0;       
        try{
            let allProducts = await Database.raw(`
            SELECT products.id,
            products.sku,
            products.title,
            products.description,
            products.image_url,
            products.color,
            products.price,
            products.qty,
            products.material,
            types.title as type,
            brands.title as brand,
            products.user_id,
            concat(users.l_name,', ',users.f_name) as updated_by,
            DATE_FORMAT(products.created_at, '%m-%d-%y') as created_at,
            DATE_FORMAT(products.updated_at, '%m-%d-%y') as updated_at
            FROM products
            INNER JOIN brands
            ON products.brand_id = brands.id
            INNER JOIN types
            ON products.type_id = types.id
            INNER JOIN users
            ON products.user_id = users.id
            ORDER BY title ASC LIMIT ${start}, ${pageRows}     
            `)
            allProducts = allProducts[0]
            let tableRows = await Database.raw(`
            SELECT COUNT("id") as tableRows FROM products
            `);
            tableRows = tableRows[0][0].tableRows;
            let totalPages = tableRows > pageRows ? Math.ceil(tableRows / pageRows) : 1;
            let arrayOfPages = [];
            let i = 0;
            for(i=0;i<totalPages;i++){
                arrayOfPages.push(i + 1);
            }
            const products = [1,2,3,4,5,6,7,8,9,10];
            return view.render('products/all.edge',{ 
                products,
                allProducts,
            currentPage: request.all().hasOwnProperty('page') ? parseInt(request.all().page) : 1,
             arrayOfPages,
             totalPages,
             pageRows
        });
        } catch(error){
            console.log(error);
            return response.redirect('back');
        }
        
        // return view.render('products/all', {products});
    }
   async newArrivals({view,auth,request, response}){
    let allProducts = await Database.raw(`
    SELECT products.id,
    products.sku,
    products.title,
    products.description,
    products.image_url,
    products.color,
    products.price,
    products.qty,
    products.material,
    types.title as type,
    brands.title as brand,
    products.user_id,
    concat(users.l_name,', ',users.f_name) as updated_by,
    DATE_FORMAT(products.created_at, '%m-%d-%y') as created_at,
    DATE_FORMAT(products.updated_at, '%m-%d-%y') as updated_at
    FROM products
    INNER JOIN brands
    ON products.brand_id = brands.id
    INNER JOIN types
    ON products.type_id = types.id
    INNER JOIN users
    ON products.user_id = users.id
    ORDER BY title ASC LIMIT ${start}, ${pageRows}     
    `)
        const products = [1,2,3,4,5,6,7,8,9,10];
        return view.render('products/all', {products});
    }
    async show({view,auth,request,response}){
        return view.render('products/single');
    }
}


module.exports = ProductController
