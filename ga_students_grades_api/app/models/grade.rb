class Grade < ApplicationRecord
  alias_attribute :student, :user
  belongs_to :student
end
