class CreateTimecards < ActiveRecord::Migration
  def change
    create_table :timecards do |t|
      t.string :name
      t.float :total_hours
      t.float :overtime_hours
      t.float :break_hours
      t.float :worked_hours
      t.float :lunch_hours
      t.date :occurrence
      t.text :note
      t.boolean :exceptions
      t.string :type
      t.integer :type_id
      t.integer :user_id
      t.boolean :is_valid

      t.timestamps
    end
  end
end
