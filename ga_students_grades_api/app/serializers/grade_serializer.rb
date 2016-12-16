class GradeSerializer < ActiveModel::Serializer
  attributes :id, :week, :week_start, :student
  has_one :student
end
