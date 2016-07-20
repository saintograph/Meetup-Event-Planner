class ChangeDateFormatForEvents < ActiveRecord::Migration[5.0]
  def self.up :events do |t|
    t.change :start_date, :string
    t.change :end_date, :string
  end
  
  
  
end
