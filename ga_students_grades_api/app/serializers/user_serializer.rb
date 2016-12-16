class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :role
  has_many :cohorts_users
  has_many :cohorts, through: :cohorts_users
end
