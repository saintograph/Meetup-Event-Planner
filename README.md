# README

Rails 5 Event Planner for Udacity Sr. Web Developer Nanodegree

Live demo [here](https://pure-fortress-81588.herokuapp.com). 

To run locally : 

    $ git clone https://github.com/winfredselwyn/Meetup-Event-Planner.git

Require dependencies : npm, Rails 5, and ruby '2.3.0' or higher. Then :

    $ cd Meetup-Event-Planner
    $ npm install
    $ bundle install

Deployed minified code location in `public/assets` :

application-xxxxx.js 

precompiler gem listed in `Gemfile`, this line :

     gem 'uglifier', '>= 1.3.0'

Github repo for 'uglifier' [here](https://github.com/lautis/uglifier)

To precompile assets after modification for production

    $ RAILS_ENV=production rails assets:precompile


// Note

Revisions completed for third cycle of resubmissions, Udacity Sr. Web Dev.

All React JS frontend code is in app/assets/javascripts.

Revisions :

 1. Issue ( fixed ) : Added validation for datetime fields
 2. Issue ( fixed ) : All required input fields now have the attribute 'required'.
 
 