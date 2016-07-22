class Event < ApplicationRecord
    #belongs_to :organizers, class_name: "User"
    belongs_to :user
    validates :title, presence: true
    # validates :guests, presence: true 
end
