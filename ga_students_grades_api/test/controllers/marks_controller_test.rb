require 'test_helper'

class MarksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @mark = marks(:one)
  end

  test "should get index" do
    get marks_url, as: :json
    assert_response :success
  end

  test "should create mark" do
    assert_difference('Mark.count') do
      post marks_url, params: { mark: { classwork_achievement: @mark.classwork_achievement, classwork_effort: @mark.classwork_effort, comment: @mark.comment, grade_id: @mark.grade_id, homework_achievement: @mark.homework_achievement, homework_effort: @mark.homework_effort, user_id: @mark.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show mark" do
    get mark_url(@mark), as: :json
    assert_response :success
  end

  test "should update mark" do
    patch mark_url(@mark), params: { mark: { classwork_achievement: @mark.classwork_achievement, classwork_effort: @mark.classwork_effort, comment: @mark.comment, grade_id: @mark.grade_id, homework_achievement: @mark.homework_achievement, homework_effort: @mark.homework_effort, user_id: @mark.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy mark" do
    assert_difference('Mark.count', -1) do
      delete mark_url(@mark), as: :json
    end

    assert_response 204
  end
end
