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
}

module.exports = RoleController
