class User < ApplicationRecord
  #winfred, winfred@example.com, XHLlVcFG7B1%
  #test, test2@example.com, XHLlVcFG7B1%
  #test3,test3@example.com XHLlVcFG7B1%
  #Jon Snow, jon@winterfell.com, XHLlVcFG7B1%
  #test4 , same as above, same as above
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, password_length: 8..16
  
  validate :password_complexity
  
  has_many :events #, class_name: "Event", foreign_key: "organizer_id"
  
  def password_complexity
    if password.present? and not password.match(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
      errors.add :password, "please include at least one lowercase letter, one uppercase letter, one number and one symbol"
    end
  end
  
end
