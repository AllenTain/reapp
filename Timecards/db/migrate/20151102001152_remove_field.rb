class RemoveField < ActiveRecord::Migration
  def change
	remove_column :timecards, :type
  end
end
