class FeelingsController < ApplicationController
	respond_to :html

	def create
		respond_to do |format|
			format.html { render :json => Feeling.create(feeling_params) }
		end
	end

	private
	def feeling_params
      params.require(:feeling).permit(:feeling_desc)
    end
end