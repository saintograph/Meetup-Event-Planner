class Event < ApplicationRecord
    #belongs_to :organizers, class_name: "User"
    belongs_to :user
    validates :title, presence: true
    # validates :start_date, presence: true
    # validates :end_date, presence:true
    # validates :address, presence:true
    # validates :guests, presence:true
    # validates :host_name, presence:true
    # validates :guests, presence: true 
end
