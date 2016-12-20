class GradeSerializer < ActiveModel::Serializer
  attributes :id, :week, :week_start, :av_class_effort, :av_class_achievement, :av_home_effort, :av_home_achievement, :student
  belongs_to :student
  has_many :marks

end
