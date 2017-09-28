# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

tweets = [
    {message: 'for example'},
    {message: 'i like examples'},
    {message: 'I like IRC chat '},
    {message: 'This is a string'},
    {message: 'THis is not text'},
    {message: 'I think i\'ve left my power charger in canberra'},
    {message: 'for example'},
    {message: 'la de da '},
    {message: 'fa lalala'},
    {message: 'for example'},
    {message: 'for example'}
]

Tweet.create(tweets)
