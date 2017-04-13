class HomeController < ApplicationController

#all of these start with /home!!

	get '/' do
		erb :home
	end

end