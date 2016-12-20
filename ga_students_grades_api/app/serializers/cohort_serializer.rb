class CohortSerializer < ActiveModel::Serializer
  attributes :id, :name, :start_date, :end_date, :instructors, :students

  has_many :grades, through: :students

  # def is_student?
  #   true if object.student.role === 'student'
  # end

end
