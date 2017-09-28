class HomeController < ApplicationController
  def index
    @brand = "Twitter"
    @name =  "Ric"

    @tweets = Tweet.limit(5)



  end
end
