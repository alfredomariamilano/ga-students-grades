class MarkSerializer < ActiveModel::Serializer
  attributes :id, :classwork_effort, :classwork_achievement, :homework_effort, :homework_achievement, :comment, :instructor
  belongs_to :instructor
  has_one :grade
end
