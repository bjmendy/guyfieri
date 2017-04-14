class ApplicationController < Sinatra::Base
	enable :sessions
	require 'bundler'
	Bundler.require

# db = URI.parse(ENV['DATABASE_URL'])

# 	DB_NAME = db.path[1..-1]

ActiveRecord::Base.establish_connection(
	:adapter => 'postgresql',
	:database => 'flavortown'
	# :adapter  => db.scheme == 'postgres' ? 'postgresql' : db.scheme,
	# :host     => db.host,
 #    :port     => db.port,
 #    :username => db.user,
 #    :password => db.password,
 #    :database => DB_NAME,
 #    :encoding => 'utf8'
	)

  ##THIS IS WHAT HEROKU NEEDS! ^^^ //might need to be updated

  set :views, File.expand_path('../../views', __FILE__)
  set :public_dir, File.expand_path('../../public', __FILE__)
  set :session_secret, 'test'

  not_found do
  	erb :not_found
  end

end