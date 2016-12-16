class CreateGrades < ActiveRecord::Migration[5.0]
  def change
    create_table :grades do |t|
      t.integer :week
      t.date :week_start
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
