class CohortSerializer < ActiveModel::Serializer
  attributes :id, :name, :start_date, :end_date, :students, :instructors
end
