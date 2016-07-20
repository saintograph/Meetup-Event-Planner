class ChangeDateFormatForEvents < ActiveRecord::Migration[5.0]
  def self.up 
    change_table :events do |t|
      t.change :start_date, :string
      t.change :end_date, :string
    end
  end
  
  def self.down
    change_table :events do |t|
    t.change :start_date, :datetime
    t.change :end_date, :datetime
    end
  end
  
end
