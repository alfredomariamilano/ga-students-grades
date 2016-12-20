class CohortSerializer < ActiveModel::Serializer
  attributes :id, :name, :start_date, :end_date, :students, :instructors


  # attribute :grades, if: :is_student?
  #
  # def is_student?
  #   true if object.student.role === 'student'
  # end
end
