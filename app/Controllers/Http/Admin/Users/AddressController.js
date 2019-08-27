'use strict'
const Database = use('Database');
const sanitize = use('sqlstring');
const { validate } = use('Validator');

class AddressController {
    async index({view, auth, request, response}){
        let pageRows = request.all().hasOwnProperty('rows') ? parseInt(request.all().rows) : 10;
        let start = request.all().hasOwnProperty('page') ? ((parseInt(request.all().page) - 1) * pageRows) : 0;       
        try{
            let allAddresses = await Database.raw(`
            SELECT addresses.id,
            addresses.address,
            addresses.address_2,
            addresses.city,
            addresses.state,
            addresses.country,
            addresses.zipcode,
            addresses.address_type,
            addresses.user_id,
            concat(users.l_name,', ',users.f_name) as name,
            DATE_FORMAT(addresses.created_at, '%m-%d-%y') as created_at,
            DATE_FORMAT(addresses.updated_at, '%m-%d-%y') as updated_at
            FROM addresses
            INNER JOIN users
            ON addresses.user_id = users.id
            ORDER BY name LIMIT ${start}, ${pageRows}   
            `);
            allAddresses = allAddresses[0];
            let tableRows = await Database.raw(`
            SELECT COUNT("id") as tableRows FROM addresses
            `);
            tableRows = tableRows[0][0].tableRows;
            let totalPages = tableRows > pageRows ? Math.ceil(tableRows / pageRows) : 1;
            let arrayOfPages = [];
            let i = 0;
            for(i=0;i<totalPages;i++){
                arrayOfPages.push(i + 1);
            }
            // return arrayOfPages;
            return view.render('admin/users/addresses/all_addresses.edge',{ 
                allAddresses,
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

module.exports = AddressController
