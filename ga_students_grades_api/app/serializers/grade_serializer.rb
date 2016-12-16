class GradeSerializer < ActiveModel::Serializer
  attributes :id, :week, :week_start, :student
  belongs_to :student

end
