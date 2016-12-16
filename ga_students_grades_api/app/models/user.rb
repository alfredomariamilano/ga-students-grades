class User < ApplicationRecord
  ROLES  = ['instructor', 'student', 'producer']

  has_and_belongs_to_many :cohorts

  before_save :assign_role

    private

      def assign_role
        self.role = 'student' if !self.role
      end
end
