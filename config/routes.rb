Rails.application.routes.draw do
  
  devise_for :users
  devise_scope :user do
    authenticated :user do
      root :to => 'books#index'
    end
    unauthenticated :user do
      root :to => 'devise/registrations#new', as: :unauthenticated_root
    end
  end
  
  namespace :api do
    namespace :v1 do
      resources :events, only: [:index, :create, :destroy, :update]
    end
  end

  # resources :events
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
