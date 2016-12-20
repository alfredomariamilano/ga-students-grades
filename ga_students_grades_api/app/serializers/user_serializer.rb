class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :role
  has_many :cohorts
  has_many :grades
  has_many :marks
end
