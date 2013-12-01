class MeditationsController < ApplicationController
	respond_to :html

	skip_before_filter  :verify_authenticity_token

	def create
		respond_to do |format|
			format.html { render :json => Meditation.create(meditation_params) }
		end
	end

	def index
	    respond_to do |format|
	      format.html
	      format.json { render json: Meditation.all }
	    end
	end

    private

	def meditation_params
      params.require(:meditation).permit(:duration)
    end

end