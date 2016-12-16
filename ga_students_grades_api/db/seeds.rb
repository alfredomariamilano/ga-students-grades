[User, Cohort, Grade, Mark].each(&:destroy_all)

i1 = User.create(first_name: 'Alex', last_name: 'Chin', role: 'instructor')
s1 = User.create(first_name: 'Random', last_name: 'Child')

c1 = Cohort.create(name: 'WDI22', start_date: Time.now, end_date: Time.now + (60*60*24*60))

# c1 << s1
