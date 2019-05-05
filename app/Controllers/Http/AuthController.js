'use strict'

class AuthController {
    async register({response, request, view}){
        return view.render('account/register')
    }
    async storeUser({response, request, view}){
        return view.render('account/register')
    }
    async login({response, request, view}){
        return view.render('account/login')
    }
    async handleLogin({response, request, view}){
        return view.render('account/register')
    }

}

module.exports = AuthController
