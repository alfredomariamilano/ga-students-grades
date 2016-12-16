class Mark < ApplicationRecord
  belongs_to :user
  belongs_to :grade
  validates :comment, presence: true, length: { minimum: 0, maximum: 142 }, allow_blank: false
  # validates :classwork_achievement, presence: true, format: /^[A-E\d\s][I]*$/
  # validates :homework_achievement, presence: true, format: /^[A-E\d\s][I]*$/
  # validates :classwork_effort, presence: true, format: /[1-5]/
  # validates :homework_effort, presence: true, format: /[1-5]/
end

# validates :classwork_achievement, presence: true, inclusion: { in: ["A", "B", "C", "D", "E", "I"], message: "%{value} is not a valid mark" }

# validates :classwork_effort, presence: true, inclusion: { in: [1, 2, 3, 4, 5], message: "%{value} is not a valid mark" }
