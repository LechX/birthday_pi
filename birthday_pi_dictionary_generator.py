import time
import pickle

# begin timer for testing run speed (actual time, not processing speed)
start_time = time.time()

# create lists for dates and master dictionary for date/digit pairings
days = []
months = []
years = []
all_dates = []
master_dict = {}

# wrap .find() in function
def pi_finder(some_string, sequence):
    return some_string.find(sequence)

# take in month, day, and year; append to all_dates in MMDDYYYY format
def american_date_append(month, day, year):
    date = month + day + year # arrange as d + m + y for non-US
    all_dates.append(date)

# start building day and month lists with preceding zeros
for i in range(1,10):
    aught = "0" + str(i)
    days.append(aught)
    months.append(aught)

# add days, months, and years to lists
for i in range(10,32):
    days.append(str(i))

for i in range(10,13):
    months.append(str(i))

for i in range(1900,2051):
    years.append(str(i))

# append dates to all_dates
for y in years:
    for m in months:
        for d in days:
            if m == "02" and int(d) <= 28:
                american_date_append(m, d, y)
            elif (m == "04" or m == "06" or m == "09" or m == "11") and int(d) <= 30:
                american_date_append(m, d, y)
            elif m == "01" or m == "03" or m == "05" or m == "07" or m == "08" or m == "10" or m == "12":
                american_date_append(m, d, y)
            else:
                continue

# add leap years
for y in years:
    if int(y) % 100 == 0 and int(y) % 400 != 0:
        continue
    elif int(y) % 4 == 0:
        american_date_append("02", "29", y)
    else:
        continue



# search pi-billion and append instance's digit to master_dict
search = open("pi-billion.txt", "r")
pi_string = search.read()
index = 0
for date in range(0,len(all_dates)):
    run_time = time.time()
    master_dict[all_dates[date]] = pi_finder(pi_string, all_dates[date])
    print("{} seconds to find index {}".format(time.time() - run_time, index))
    index += 1

# create text file and pickle-dump dictionary in
with open("birthday_pi_dictionary.txt", "wb") as repository:
    pickle.dump(master_dict, repository)

# print time elapsed to console
print("--- {} seconds ---".format(time.time() - start_time))
