class Mark < ApplicationRecord
  belongs_to :instructor
  belongs_to :grade
  validates :comment, presence: true, length: { minimum: 0, maximum: 140 }, allow_blank: false

  validates :classwork_achievement, presence: true, format: /[[A-E][I]]/, length: { minimum: 1, maximum: 1 }
  validates :homework_achievement, presence: true, format: /[[A-E][I]]/, length: { minimum: 1, maximum: 1 }
  validates :classwork_effort, presence: true, format: /[1-5]/
  validates :homework_effort, presence: true, format: /[1-5]/
end
