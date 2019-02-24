'use strict'

class UserController {
    register({view}){
        return view.render('account/register');
    }
    login({view}){
        return view.render('account/login');
    }
}

module.exports = UserController
