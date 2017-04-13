class RegisterController < ApplicationController
##EVERY ROUTE STARTS WIT REGISTER

get '/login' do
	erb :login
end

get '/' do
	erb :register 
end

post '/login' do
	username = params[:username]
	password = params[:password]

	user = User.find_by(username: username)

	if user && user.authenticate(password)
		##takes plain text and hash and matches up so it will return true
			##otherwise will return false
		session[:logged_in] = true
		session[:username] = true
		session[:user_id] = user.id 
		redirect '/home'
	else
		p 'winnerwinnerchickendinnnnerrrrrr'
		@message = "login successful"
		redirect '/register/login'
	end
end

	post '/' do
		@user = User.new
		@user.username = params["username"]
		@user.password = params["password"]
		@user.save
		redirect '/register/login'
	end

	get '/logout' do
		session.destroy
		redirect '/register/login'
	end

end


