require 'sinatra/base'

require './controllers/ApplicationController'
require './controllers/RegisterController'
require './controllers/HomeController'

require './models/UserModel'
require './models/HomeModel'
require './models/RegisterModel'

config.assets.paths << Rails.root.join("app", "assets", "fonts")

map('/') {run ApplicationController}
map('/register') {run RegisterController}
map ('/home') {run HomeController}