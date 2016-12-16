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

ActiveRecord::Schema.define(version: 20161216115904) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cohorts", force: :cascade do |t|
    t.string   "name"
    t.date     "start_date"
    t.date     "end_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "cohorts_users", id: false, force: :cascade do |t|
    t.integer "cohort_id", null: false
    t.integer "user_id",   null: false
  end

  create_table "grades", force: :cascade do |t|
    t.integer  "week"
    t.date     "week_start"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_grades_on_user_id", using: :btree
  end

  create_table "marks", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "grade_id"
    t.integer  "classwork_effort"
    t.string   "classwork_achievement"
    t.integer  "homework_effort"
    t.string   "homework_achievement"
    t.string   "comment"
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
    t.index ["grade_id"], name: "index_marks_on_grade_id", using: :btree
    t.index ["user_id"], name: "index_marks_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "role"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "grades", "users"
  add_foreign_key "marks", "grades"
  add_foreign_key "marks", "users"
end