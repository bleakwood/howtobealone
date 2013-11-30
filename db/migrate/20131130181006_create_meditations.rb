class CreateMeditations < ActiveRecord::Migration
  def change
    create_table :meditations do |t|
    	t.integer :duration
    	t.text :thoughts
    	t.datetime :date

    	t.timestamps
    end
  end
end
