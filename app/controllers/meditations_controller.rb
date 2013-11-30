class MeditationsController < ApplicationController
	respond_to :json

	def create
		respond_with Meditation.create(params[:meditation])
	end

	def index
    respond_to do |format|
      format.html
      format.json { render json: Meditation.all }
    end
  end
end