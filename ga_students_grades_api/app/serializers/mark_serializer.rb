class MarkSerializer < ActiveModel::Serializer
  attributes :id, :classwork_effort, :classwork_achievement, :homework_effort, :homework_achievement, :comment
  has_one :user
  has_one :grade
end
