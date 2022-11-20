class Student::RegistrationsController < DeviseTokenAuth::RegistrationsController
  before_action :sign_up_params, if: :devise_controller?
  private

  def sign_up_params
    params.require(:registration).permit(:email, :password, :password_confirmation)
  end
end
