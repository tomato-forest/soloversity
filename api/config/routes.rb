Rails.application.routes.draw do
  mount_devise_token_auth_for 'Student', at: 'student', controllers: {
    registrations: 'student/registrations'
  }

  mount_devise_token_auth_for 'Admin', at: 'admin', controllers: {
    registrations: 'admin/registrations'
  }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
