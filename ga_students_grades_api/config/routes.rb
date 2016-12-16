Rails.application.routes.draw do
  resources :marks
  resources :grades
  resources :users
  resources :cohorts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
