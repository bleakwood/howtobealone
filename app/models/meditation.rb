class Meditation < ActiveRecord::Base
	has_many :feelings

	def before_feeling
	end

	def after_feeling
	end
end