Rails.application.routes.draw do
  mount_devise_token_auth_for 'Student', at: 'student', controllers: {
    registrations: 'student/registrations'
  }

  mount_devise_token_auth_for 'Admin', at: 'admin', controllers: {
    registrations: 'admin/registrations'
  }

  scope module: :student do 
    resources :student_profiles, only: [:show, :update, :create]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
