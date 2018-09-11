ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew doctor
brew install cask

brew tap caskroom/versions
brew cask install java8

brew cask install google-chrome
brew cask install iterm2
brew cask install evernote
brew cask install skype
brew cask install slack
brew cask install sublime-text

brew install maven //available in external folder
brew install sbt

#python packages
sudo easy_install pip
pip install airflow

