'use strict'
const Database = use('Database');
const sanitize = use('sqlstring');
const { validate } = use('Validator');

class RoleController {
    async index({view, auth, request, response}){
        let pageRows = request.all().hasOwnProperty('rows') ? parseInt(request.all().rows) : 10;
        let start = request.all().hasOwnProperty('page') ? ((parseInt(request.all().page) - 1) * pageRows) : 0;       
        try{
            let allRoles = await Database.raw(`
            SELECT role_user.id,
            users.username as username,
            role_user.user_id,
            roles.title AS title,
            DATE_FORMAT(role_user.created_at, '%m-%d-%y') as created_at,
            DATE_FORMAT(role_user.updated_at, '%m-%d-%y') as updated_at
            FROM role_user
            INNER JOIN users
            ON role_user.user_id = users.id
            INNER JOIN roles
            ON role_user.role_id = roles.id
            ORDER BY username LIMIT ${start}, ${pageRows}    
            `);
            allRoles = allRoles[0];
            let tableRows = await Database.raw(`
            SELECT COUNT("id") as tableRows FROM role_user
            `);
            tableRows = tableRows[0][0].tableRows;
            let totalPages = tableRows > pageRows ? Math.ceil(tableRows / pageRows) : 1;
            let arrayOfPages = [];
            let i = 0;
            for(i=0;i<totalPages;i++){
                arrayOfPages.push(i + 1);
            }
            // return arrayOfPages;
            return view.render('admin/users/roles/all_roles.edge',{ 
                allRoles,
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
    
    async store({view, auth, request, response, session}){
          const validation = await validate(request.all(), {
            title: 'required'
            });
          if (validation.fails()) {
            session.withErrors(validation.messages()).flashAll();
            session.flash({errors: 'Oops, There was a problem'});
            return response.redirect('back')
          }
        try{
            const post = request.post();
            await Database.raw(`
            INSERT INTO role_user (sku, title, image_url, description, color, price, qty, material, brand_id, type_id, user_id ) VALUES(
                ${sanitize.escape(post.title)}
                )            
            `);
            session.flash({notification: 'Changes Submitted'});
            return response.redirect('/admin/users');
        } catch(error){
            console.log(error);
            return response.redirect('back');
        }
    }
    async edit({view, auth, request, response, params}){
        try{
            let role = await Database.raw(`
            SELECT * from role_user WHERE id = ${params.id}
            `);
            role = role[0][0];

            return view.render('admin/users/roles/edit_roles.edge', { role });
        } catch(error){
            console.log(error);
            return response.redirect('back');
        }
    }
    async update({view, auth, request, response,params,session}){
        const validation = await validate(request.all(), {
        title: 'required'});
        if (validation.fails()) {
          session.withErrors(validation.messages()).flashAll();
          session.flash({errors: 'Oops, There was a problem'});
          return response.redirect('back')
        }
        try{
            const post = request.post();
            await Database.raw(`
            UPDATE role_user
            SET
            title = ${sanitize.escape(post.title)}
            `);
            session.flash({notification: 'Changes Submitted'});
            return response.redirect(`/admin/users/roles/${params.id}/edit`);
        } catch(error){
            console.log(error);
            return response.redirect('back');
        }
    }
}

module.exports = RoleController
