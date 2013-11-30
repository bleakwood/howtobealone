class CreateFeelings < ActiveRecord::Migration
  def change
    create_table :feelings do |t|
    	t.belongs_to :meditation
    	t.text :description
    	t.string :feeling_type
    	t.string :feeling_desc
    	t.float :metric

    	t.timestamps
    end
  end
end
