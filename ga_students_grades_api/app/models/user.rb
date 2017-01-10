class User < ApplicationRecord
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable, :omniauthable
  include DeviseTokenAuth::Concerns::User
  ROLES  = ['admin', 'instructor', 'student', 'producer']

  has_and_belongs_to_many :cohorts
  has_many :grades
  has_many :marks

  before_save :assign_role

    private

      def assign_role
        self.role = 'student' if !self.role
      end

end
