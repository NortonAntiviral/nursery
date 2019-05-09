'use strict'
const { validate} = use('Validator')
const Hash = use('Hash')
const User = use('App/Models/User')
const Database = use('Database')
const sanitize = use('sqlstring')

class AuthController {
    async register({response, request, view}){
        return view.render('account/register')
    }
    async storeUser({response, request, view, session}){
        // validation of input fields
        const validation = await validate(request.all(),{
            email: 'required|email|unique:users,email',
            password: 'required|min:6|max:40',
            confirm_password: 'required'
        })
        // passwords are the same?
        if(request.input('password') === request.input('confirm_password')){
            //Check if validation passes
            if(validation.fails()){
                session.withErrors(validation.messages()).flashExcept(['password','confirm_password'])

                return response.redirect('back')
            } else {
                // try to save user to database
                try{
                let newUser = await User.create({
                    email: request.input('email'),
                    password: request.input('password')
                })
                 } catch(error){
                     return error
                 }
                session.flash({success: 'Welcome to Nursery of Kickz'})
                 return response.redirect('/')
            }
        } else {
            session.withErrors([
                {
                    field: 'password', message: 'confirm password'
                },
            {
                field: 'confirm_password', message: 'confirm password' 
            }
        ]).flashExcept(['password', 'confirm_password'])
            return response.redirect('back')
        }
    }
    async login({response, request, view,}){
        return view.render('account/login')
    }
    async handleLogin({response, request, view, auth, session}){
        // Use data from form
        const postData = request.post();
        let user = await Database.raw(`
        SELECT * FROM nursery.users WHERE users.email = ${
            sanitize.escape(postData.email)
        } LIMIT 1;
        `);

        user = user[0][0];

        if(user) {
            //verify the password
            const passwordVerified = await Hash.verify(postData.password, user.password);
        
        
        if(passwordVerified) {
            // login User
            await auth.login(user);
            session.flash({success: 'You are logged in'})
            return response.redirect('/');
        } else {
            session.withErrors([
                {field: 'password', message: 'Incorrect password'}
            ]).flashExcept(['password'])
            return response.redirect('back');
        } 
        } else {
            session.withErrors([
                {
                    field: 'email', message: 'Email does not exist'
                }
        ]).flashExcept(['password'])
            return response.redirect('back');
        }
        
        console.log(user);
        return user;
        // return request.all();
    }
    async logout({response, request, view, auth, session}) {
        try{
            await auth.logout();
        session.flash({success: 'You are logged out'});
        return response.redirect('/');
        } catch(error){
            console.log(error)
            session.flash({error: 'Logout Error'});
        return response.redirect('/');
        }
        
    }
}


module.exports = AuthController
