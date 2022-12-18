class Student::StudentProfilesController < ApplicationController
  before_action :set_student_profile, only: [:show, :update]

  def create
    @student_profile_new = StudentProfile.new(student_profile_params)
    @student_profile_new.student_id = current_student.id
    if @student_profile_new.save
      render json: @student_profile_new
    else
      render json: @student_profile_new.errors, status: :unprocessable_entity
    end
  end
  def show
    render json: @student_profile
  end

  def update
    if @student_profile.update(student_profile_params)
      render json: @student_profile
    else
      render json: @student_profile.errors, status: :unprocessable_entity
    end
  end

  private

  def set_student_profile
    @student_profile = StudentProfile.find(params[:id])
  end

  def student_profile_params
    params.require(:student_profile).permit(:last_name, :first_name, :gender, :birthplace, :university_name, :grade, :faculty, :depertment, :profile_image)
  end
end
