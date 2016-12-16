class Cohort < ApplicationRecord
  has_and_belongs_to_many :users
  has_many :grades

  def instructors
    users.where(role: 'instructor')
  end

  def students
    users.where(role: 'student')
  end

end
