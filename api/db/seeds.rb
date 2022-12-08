# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Student.create!(
  email: 'test@test.com',
  password: 'password',
)

StudentProfile.create!(
  student_id: 1,
  last_name: '山田',
  first_name: '太郎',
  gender: 2,
  birthplace: 1,
  university_name: '東京大学',
  grade: 4,
  faculty: '政経学部',
  depertment: '経済学科'
)
