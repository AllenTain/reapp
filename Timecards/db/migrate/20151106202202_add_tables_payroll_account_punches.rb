class AddTablesPayrollAccountPunches < ActiveRecord::Migration
  def change
    create_table :accounts do |t|
      t.text :name
      t.text :subdomain
      t.text :payroll_period
      t.date :payroll_start
      t.date :payroll_processing
      t.integer :payroll_twice_monthly_first_date
      t.integer :payroll_twice_monthly_last_date
      t.time :payroll_approval_due_at
      t.time :business_start
      t.time :business_end
      t.string :csv_format

      t.timestamps
    end
    
    create_table :payrolls do |t|
      t.text :approved_departments
      t.text :approved_locations
      t.boolean :approved
      t.date :starts_on
      t.date :ends_on
      t.text :employees
      
      t.timestamps
    end
    
    create_table :punches do |t|
      t.integer :user_id
      t.integer :assigned_shift_id
      t.date :occurrence
      t.time :time
      t.text :action
      t.text :type
      t.text :message
      t.integer :device_id
      t.integer :timcard_id

      t.timestamps
    end
  end
end
