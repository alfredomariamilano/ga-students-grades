class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :role
  has_many :cohorts
  attribute :marks, if: :is_instructor?
  attribute :grades, if: :is_student?
  # has_many :grades
  # has_many :marks

  def is_instructor?
    true if object.role === 'instructor'
  end

  def is_student?
    true if object.role === 'student'
  end

end
