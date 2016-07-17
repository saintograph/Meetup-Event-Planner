class Event < ApplicationRecord
    #belongs_to :organizers, class_name: "User"
    belongs_to :user
end
