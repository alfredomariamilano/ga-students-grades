class CreateCohorts < ActiveRecord::Migration[5.0]
  def change
    create_table :cohorts do |t|
      t.string :name
      t.date :start_date
      t.date :end_date

      t.timestamps
    end
  end
end
