class HomeController < ApplicationController

#all of these start with /home!!

	get '/' do
		erb :home
	end

# 	post '/' do 
# 		@post = Event.new
# 		p params
# 		@post.username = params["username"]
# 		@post.body = params["body"]

# 		@posts.Event.all
# 		@post.to_json

# 		erb :chatRoom

# 	end

# 	patch '/:id' do
# 		content_type :json 
# 		id = params[:id]

# 	erb :chatRoom

# end

end