[User, Cohort, Grade, Mark].each(&:destroy_all)

i1 = User.create!(first_name: 'Alex', last_name: 'Chin', role: 'instructor', email: 'alex@alex.com', password: 'password', confirmed_at: Time.now)
s1 = User.create!(first_name: 'Random', last_name: 'Child', email: 'random@random.com', password: 'password', confirmed_at: Time.now)
i2 = User.create!(first_name: 'Rane', last_name: 'Gowan', role: 'instructor', email: 'rane@rane.com', password: 'password', confirmed_at: Time.now)
i3 = User.create!(first_name: 'Nat', last_name: 'Huitson', role: 'instructor', email: 'nat@nat.com', password: 'password', confirmed_at: Time.now)

c1 = Cohort.create!(name: 'WDI22', start_date: Time.now, end_date: Time.now + (60*60*24*60))

g1 = Grade.create!(week: 1, week_start: Time.now, user_id: 2)
g2 = Grade.create!(week: 2, week_start: (Time.now + (60*60*24*60)), user_id: 2)

m1 = Mark.create!(user_id: 1, grade_id: 1, classwork_effort: 3, classwork_achievement: 'B', homework_effort: 2, homework_achievement: 'C', comment: 'Should be trying harder, little shite')
m2 = Mark.create!(user_id: 3, grade_id: 1, classwork_effort: 5, classwork_achievement: 'C', homework_effort: 4, homework_achievement: 'D', comment: 'Nah - Im not having it')
m3 = Mark.create!(user_id: 4, grade_id: 1, classwork_effort: 2, classwork_achievement: 'A', homework_effort: 3, homework_achievement: 'E', comment: 'Utterly terrible - NOOOOOOOOO!')
m4 = Mark.create!(user_id: 1, grade_id: 2, classwork_effort: 1, classwork_achievement: 'B', homework_effort: 1, homework_achievement: 'B', comment: 'Much much better')
m5 = Mark.create!(user_id: 3, grade_id: 2, classwork_effort: 2, classwork_achievement: 'B', homework_effort: 2, homework_achievement: 'A', comment: 'Yes please - more of the same')
m6 = Mark.create!(user_id: 4, grade_id: 2, classwork_effort: 1, classwork_achievement: 'A', homework_effort: 2, homework_achievement: 'B', comment: 'Utterly fantastic - YESSSSSSSS!')

c1.users << i1
c1.users << i2
c1.users << i3
c1.users << s1
