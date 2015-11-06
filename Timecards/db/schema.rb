# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151106202202) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "hstore"

  create_table "accounts", force: true do |t|
    t.text     "name"
    t.text     "subdomain"
    t.text     "payroll_period"
    t.date     "payroll_start"
    t.date     "payroll_processing"
    t.integer  "payroll_twice_monthly_first_date"
    t.integer  "payroll_twice_monthly_last_date"
    t.time     "payroll_approval_due_at"
    t.time     "business_start"
    t.time     "business_end"
    t.string   "csv_format"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "payrolls", force: true do |t|
    t.text     "approved_departments"
    t.text     "approved_locations"
    t.boolean  "approved"
    t.date     "starts_on"
    t.date     "ends_on"
    t.text     "employees"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "punches", force: true do |t|
    t.integer  "user_id"
    t.integer  "assigned_shift_id"
    t.date     "occurrence"
    t.time     "time"
    t.text     "action"
    t.text     "type"
    t.text     "message"
    t.integer  "device_id"
    t.integer  "timcard_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "timecards", force: true do |t|
    t.string   "name"
    t.float    "total_hours"
    t.float    "overtime_hours"
    t.float    "break_hours"
    t.float    "worked_hours"
    t.float    "lunch_hours"
    t.date     "occurrence"
    t.text     "note"
    t.boolean  "exceptions"
    t.integer  "type_id"
    t.integer  "user_id"
    t.boolean  "is_valid"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "payroll_id"
  end

end
