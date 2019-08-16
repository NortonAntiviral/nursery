'use strict'

class AdminController {
    index({view, auth}){
        return view.render('admin/dashboard');
    }
    about({view}){
        return view.render('pages/about');
    }
}

module.exports = AdminController
