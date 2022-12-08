class Student::StudentProfilesController < ApplicationController
  before_action :set_student_profile, only: [:show, :update]

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
