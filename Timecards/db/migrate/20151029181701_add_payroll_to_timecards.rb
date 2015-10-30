class AddPayrollToTimecards < ActiveRecord::Migration
  def change
	add_column :timecards, :payroll_id, :integer
  end
end
