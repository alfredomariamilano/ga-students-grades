class CreateMarks < ActiveRecord::Migration[5.0]
  def change
    create_table :marks do |t|
      t.references :user, foreign_key: true
      t.references :grade, foreign_key: true
      t.integer :classwork_effort
      t.string :classwork_achievement
      t.integer :homework_effort
      t.string :homework_achievement
      t.text :comment

      t.timestamps
    end
  end
end
