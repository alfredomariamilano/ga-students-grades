[User, Cohort, Grade, Mark].each(&:destroy_all)

i1 = User.create!(first_name: 'Alex', last_name: 'Chin', role: 'instructor', email: 'alex@alex.com', password: 'password', confirmed_at: Time.now)
s1 = User.create!(first_name: 'Random', last_name: 'Child', email: 'random@random.com', password: 'password', confirmed_at: Time.now)

c1 = Cohort.create!(name: 'WDI22', start_date: Time.now, end_date: Time.now + (60*60*24*60))

c1.users << i1
c1.users << s1
