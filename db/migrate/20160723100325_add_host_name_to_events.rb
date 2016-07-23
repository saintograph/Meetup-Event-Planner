class AddHostNameToEvents < ActiveRecord::Migration[5.0]
  def change
    add_column :events, :host_name, :string
  end
end
