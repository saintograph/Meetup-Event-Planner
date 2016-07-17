class RemoveOrganizerIdFromEvents < ActiveRecord::Migration[5.0]
  def change
    remove_column :events, :organizer_id, :integer 
  end
end
