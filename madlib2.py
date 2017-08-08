import sys

print "MabLib Time!"

adjective1  = raw_input("Enter an adjective: ")
nationality = raw_input("Enter a nationality: ")
person      = raw_input("Enter a person: ")
noun1       = raw_input("Enter a noun: ")
adjective2  = raw_input("Enter a second adjective: ")
noun2       = raw_input("Enter a second noun: ")
adjective3  = raw_input("Enter a third adjective: ")
adjective4  = raw_input("Enter a fourth adjective: ")
plural_noun = raw_input("Enter a plural noun: ")
noun3       = raw_input("Enter a third noun: ")
number1     = raw_input("Enter a number: ")
is_a_number = True

if number1.isdigit() == False:
  is_a_number = False
  while is_a_number == False:
    number1 = raw_input("This must be a number. Enter a number: ")
    if number1.isdigit() == True:
      is_a_number = True
  
shape       = raw_input("Enter a shape: ")
food1       = raw_input("Enter a food: ")
food2       = raw_input("Enter a second food: ")

number2     = raw_input("Enter a second number: ")
if number2.isdigit() == False:
  is_a_number = False
  while is_a_number == False:
    number2 = raw_input("This must be a number. Enter a number: ")
   if number2.isdigit() == True:
     is_a_number = True

madlib = "Pizza was invented by a " + adjective1 + " " + nationality + " chef named " + person + ".  To make a pizza, you need to take a lump of " + noun1 + ", and make a thin, round " + adjective2 + " " + noun2 + ". Then you cover it with " + adjective3 + " " + " sauce, " + adjective4 + " cheese, and fresh chopped " + plural_noun + ". When it is done, cut it into " + number1 + " " + shape + ". Some kids like " + food1 + " pizza the best, but my favorite is the " + food2 + " pizza. If I could, I would eat pizza " + number2 + " times a day!"
  
print madlib 