class UserMailer < ApplicationMailer
  default from: 'from@99Cats.com'

  def welcome_email(user)
    @user = user
    @url = 'http://example.com/login'
    mail(to: @user.email, subject: 'Welcome to our Website!')
  end
end
