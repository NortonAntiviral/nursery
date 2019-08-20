'use strict'
const Database = use('Database');
const sanitize = use('sqlstring');
const { validate } = use('Validator');

class ProductController {
    async index({view, auth, request, response}){
        let pageRows = request.all().hasOwnProperty('rows') ? parseInt(request.all().rows) : 5;
        let start = request.all().hasOwnProperty('page') ? ((parseInt(request.all().page) - 1) * pageRows) : 0;       
        try{
            let allProducts = await Database.raw(`
            SELECT *, DATE_FORMAT(products.updated_at, '%m-%d-%y') as updated_at, DATE_FORMAT(products.created_at, '%m-%d-%y') as created_at FROM products ORDER BY title ASC LIMIT ${start}, ${pageRows}    
            `);
            allProducts = allProducts[0];
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
            // return arrayOfPages;
            return view.render('admin/products/all_products.edge',{ 
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
    }
    async create({view, auth, request, response}){
        try{
            return view.render('admin/products/new_product.edge');
        } catch(error){
            console.log(error);
            return response.redirect('back');
        }
    }
    async store({view, auth, request, response, session}){
          const validation = await validate(request.all(), {
            title: 'required|unique:products,sku,title,image_url',
            description: 'required',
            color:'required',
            price:'required',
            qty:'required',
            material:'required',
            brand_id:'required',
            type_id:'required',
            user_id:'required'
            });
          if (validation.fails()) {
            session.withErrors(validation.messages()).flashAll();
            session.flash({errors: 'Oops, There was a problem'});
            return response.redirect('back')
          }
        try{
            const post = request.post();
            await Database.raw(`
            INSERT INTO products (title, description) VALUES(
                ${sanitize.escape(post.sku)},
                ${sanitize.escape(post.title)},
                ${sanitize.escape(post.image_url)},
                ${sanitize.escape(post.description)},
                ${sanitize.escape(post.color)},
                ${sanitize.escape(post.price)}
                ${sanitize.escape(post.qty)},
                ${sanitize.escape(post.material)},
                ${sanitize.escape(post.brand_id)},
                ${sanitize.escape(post.type_id)},
                ${sanitize.escape(post.type_id)}
                )            
            `);
            session.flash({notification: 'Changes Submitted'});
            return response.redirect('/admin/products');
        } catch(error){
            console.log(error);
            return response.redirect('back');
        }
    }
    async edit({view, auth, request, response, params}){
        try{
            let product = await Database.raw(`
            SELECT * from products WHERE id = ${params.id}
            `);
            product = product[0][0];

            return view.render('admin/products/edit_product.edge', { product });
        } catch(error){
            console.log(error);
            return response.redirect('back');
        }
    }
    async update({view, auth, request, response,params,session}){
        const validation = await validate(request.all(), {
        title: 'required',
        description: 'required',
        color:'required',
        price:'required',
        qty:'required',
        material:'required',
        brand_id:'required',
        type_id:'required',
        user_id:'required'});
        if (validation.fails()) {
          session.withErrors(validation.messages()).flashAll();
          session.flash({errors: 'Oops, There was a problem'});
          return response.redirect('back')
        }
        try{
            const post = request.post();
            await Database.raw(`
            UPDATE products
            SET
            sku =${sanitize.escape(post.sku)},
            title = ${sanitize.escape(post.title)},
            description = ${sanitize.escape(post.description)},
            image_url = ${sanitize.escape(post.image_url)},
            color = ${sanitize.escape(post.color)},
            price = ${sanitize.escape(post.price)},
            qty = ${sanitize.escape(post.qty)},
            material = ${sanitize.escape(post.material)},
            brand_id = ${sanitize.escape(post.brand_id)},
            type_id = ${sanitize.escape(post.type_id)},
            user_id = ${sanitize.escape(post.type_id)}                 
            WHERE id = ${params.id}           
            `);
            session.flash({notification: 'Changes Submitted'});
            return response.redirect(`/admin/products/${params.id}/edit`);
        } catch(error){
            console.log(error);
            return response.redirect('back');
        }
    }
    async delete({view, auth, request, response,params}){
        try{
            const post = request.post();
            await Database.raw(`
            DELETE FROM products
            WHERE id = ${params.id}           
            `);
            return response.redirect(`/admin/products/`);
        } catch(error){
            console.log(error);
            return response.redirect('back');
        }
    }
}

module.exports = ProductController
