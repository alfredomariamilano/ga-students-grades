class Grade < ApplicationRecord
  belongs_to :user
  alias_attribute :student, :user
  has_many :marks

  def av_class_effort
    if marks
      marks.average(:classwork_effort).round
    end
  end

  def av_home_effort
    if marks
      marks.average(:homework_effort).round
    end
  end

  def av_class_achievement
    if marks.length > 0
      count = 0
      marks.each do |mark|
        count += 'ABCDE'.index(mark.classwork_achievement)
      end
      return 'ABCDE'[(count/marks.length).round]
    end
    return null
  end

  def av_home_achievement
    if marks.length > 0
      count = 0
      marks.each do |mark|
        count += 'ABCDE'.index(mark.homework_achievement)
      end
      return 'ABCDE'[(count/marks.length).round]
    end
    return null
  end

end
