'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', 'PageController.home');
Route.get('/about', 'PageController.about');

// Admin
Route.get('/admin', 'Admin/AdminController.index');

// Admin/Products**********************************************************************
Route.get('/admin/products', 'Admin/Products/ProductController.index');
Route.post('/admin/products', 'Admin/Products/ProductController.store');
Route.get('/admin/products/new', 'Admin/Products/ProductController.create');
Route.put('/admin/products/:id', 'Admin/Products/ProductController.update');
Route.get('/admin/products/:id/edit', 'Admin/Products/ProductController.edit');
Route.get('/admin/products/:id/delete', 'Admin/Products/ProductController.delete');

// Admin/Products/Types************************************************************************
Route.get('/admin/products/types', 'Admin/Products/TypeController.index');
Route.post('/admin/products/types', 'Admin/Products/TypeController.store');
Route.get('/admin/products/types/new', 'Admin/Products/TypeController.create');
Route.put('/admin/products/types/:id', 'Admin/Products/TypeController.update');
Route.get('/admin/products/types/:id/edit', 'Admin/Products/TypeController.edit');
Route.get('/admin/products/types/:id/delete', 'Admin/Products/TypeController.delete');

// Admin/Products/Categories**********************************************************************
Route.get('/admin/products/categories', 'Admin/Products/CategoryController.index');
Route.post('/admin/products/categories', 'Admin/Products/CategoryController.store');
Route.get('/admin/products/categories/new', 'Admin/Products/CategoryController.create');
Route.put('/admin/products/categories/:id', 'Admin/Products/CategoryController.update');
Route.get('/admin/products/categories/:id/edit', 'Admin/Products/CategoryController.edit');
Route.get('/admin/products/categories/:id/delete', 'Admin/Products/CategoryController.delete');

// Admin/Products/Tags**********************************************************************
Route.get('/admin/products/tags', 'Admin/Products/TagController.index');
Route.post('/admin/products/tags', 'Admin/Products/TagController.store');
Route.get('/admin/products/tags/new', 'Admin/Products/TagController.create');
Route.put('/admin/products/tags/:id', 'Admin/Products/TagController.update');
Route.get('/admin/products/tags/:id/edit', 'Admin/Products/TagController.edit');
Route.get('/admin/products/tags/:id/delete', 'Admin/Products/TagController.delete');

// Admin/Users**********************************************************************
Route.get('/admin/users', 'Admin/Users/UserController.index');
Route.post('/admin/users/', 'Admin/Users/UserController.store');
Route.get('/admin/users/new', 'Admin/Users/UserController.create');
Route.put('/admin/users/:id', 'Admin/Users/UserController.update');
Route.get('/admin/users/:id/edit', 'Admin/Users/UserController.edit');
Route.get('/admin/users/:id/delete', 'Admin/Users/UserController.delete');

// Admin/Users/Roles**********************************************************************
Route.get('/admin/users/roles', 'Admin/Users/RoleController.index');
Route.post('/admin/users/roles', 'Admin/Users/RoleController.store');
Route.get('/admin/users/roles/new', 'Admin/Users/RoleController.create');
Route.put('/admin/users/roles/:id', 'Admin/Users/RoleController.update');
Route.get('/admin/users/roles/:id/edit', 'Admin/Users/RoleController.edit');
Route.get('/admin/users/roles/:id/delete', 'Admin/Users/RoleController.delete');

// Admin/Users/Addresses**********************************************************************
Route.get('/admin/users/addresses', 'Admin/Users/AddressController.index');
Route.post('/admin/users/addresses', 'Admin/Users/AddressController.store');
Route.get('/admin/users/addresses/new', 'Admin/Users/AddressController.create');
Route.put('/admin/users/addresses/:id', 'Admin/Users/AddressController.update');
Route.get('/admin/users/addresses/:id/edit', 'Admin/Users/AddressController.edit');
Route.get('/admin/users/addresses/:id/delete', 'Admin/Users/AddressController.delete');

// Admin/Users/UserSearch**********************************************************************
/*
// ****************************************/

// Products
Route.get('/products', 'ProductController.index');
Route.get('/:brands/:subcategory/:slug', 'ProductController.show');
Route.get('/products/new-arrivals', 'ProductController.newArrivals').middleware('auth');

// Cart
Route.get('/cart/checkout', 'CartController.checkout');

//Account
Route.get('/account', 'UserController.index');
Route.get('/account/change-password', 'UserController.changePassword');
Route.get('/account/orders', 'UserController.orders');

// User Authentication
Route.get('/register', 'AuthController.register');
Route.post('/register', 'AuthController.storeUser');
Route.get('/login', 'AuthController.login');
Route.post('/login', 'AuthController.handleLogin');
Route.get('/logout', 'AuthController.logout');

    `               `