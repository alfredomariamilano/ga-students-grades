class CohortSerializer < ActiveModel::Serializer
  attributes :id, :name, :start_date, :end_date
  has_many :cohorts_users
  has_many :users, through: :cohorts_users
  has_many :grades
end
