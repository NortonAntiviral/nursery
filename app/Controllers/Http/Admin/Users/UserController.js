'use strict'
const Database = use('Database');
const sanitize = use('sqlstring');
const { validate } = use('Validator');

class UserController {
    async index({view, auth, request, response}){
        let pageRows = request.all().hasOwnProperty('rows') ? parseInt(request.all().rows) : 10;
        let start = request.all().hasOwnProperty('page') ? ((parseInt(request.all().page) - 1) * pageRows) : 0;       
        try{
            let allUsers = await Database.raw(`
            SELECT *, DATE_FORMAT(users.updated_at, '%m-%d-%y') as updated_at, DATE_FORMAT(users.created_at, '%m-%d-%y') as created_at FROM users ORDER BY username ASC LIMIT ${start}, ${pageRows}    
            `);
            allUsers = allUsers[0];
            let tableRows = await Database.raw(`
            SELECT COUNT("id") as tableRows FROM users
            `);
            tableRows = tableRows[0][0].tableRows;
            let totalPages = tableRows > pageRows ? Math.ceil(tableRows / pageRows) : 1;
            let arrayOfPages = [];
            let i = 0;
            for(i=0;i<totalPages;i++){
                arrayOfPages.push(i + 1);
            }
            // return arrayOfPages;
            return view.render('admin/users/all_users.edge',{ 
                allUsers,
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

module.exports = UserController
