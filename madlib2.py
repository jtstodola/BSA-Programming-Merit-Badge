# import is a module that gives us access to variables and functions that work with the interpreter
# sys gives us access to a variety of functions: https://docs.python.org/2/library/sys.html
import sys

# This prints the string MadLib Time! to the command prompt
print("MabLib Time!")

# https://docs.python.org/2/library/functions.html#raw_input
# input prints the string passed to it to the command prompt
#   and takes the user's input. 
#   We then assigning it to a variable.
#   (If you are using OS X, you will need to use raw_input() instead of input())
adjective1  = input("Enter an adjective: ")
nationality = input("Enter a nationality: ")
person      = input("Enter a person: ")
noun1       = input("Enter a noun: ")
adjective2  = input("Enter a second adjective: ")
noun2       = input("Enter a second noun: ")
adjective3  = input("Enter a third adjective: ")
adjective4  = input("Enter a fourth adjective: ")
plural_noun = input("Enter a plural noun: ")
noun3       = input("Enter a third noun: ")

# Assigning the value of True to is_a_number.
is_a_number = True
number1     = input("Enter a number: ")

# Check to see if the input from number1 is a number. is_digit() is a boolean
#   and will return either True or False. Here we check to see if is_digit()
#   returns False. If it does, the program will proceed to line 31. If it is True,
#   the program will jump to line 38.
if number1.isdigit() == False:
  # We have determined that number1 is not a number, so we want to assign is_a_number
  #   to False.
  is_a_number = False
  
  # We want to continue to prompt the user to enter a number until they give us the
  #   correct input. 
  #   While is_a_number is equal to False proceed to line 40, else jump to line 44.
  while is_a_number == False:
    number1 = input("This must be a number. Enter a number: ")
    
    # If the input they gave us is a number, we want to assign True to is_a_number
    #   so we can break out of the while loop.
    if number1.isdigit() == True:
      is_a_number = True
  
shape       = input("Enter a shape: ")
food1       = input("Enter a food: ")
food2       = input("Enter a second food: ")
number2     = input("Enter a second number: ")

# This is the same number check as that starting on line 31.
if number2.isdigit() == False:
  is_a_number = False
  while is_a_number == False:
    number2 = input("This must be a number. Enter a number: ")
    if number2.isdigit() == True:
      is_a_number = True

# We want to add in all of the above values from our user input that are assigned to variables
#   above to our madlib. We do this by concatenating the variables with our string and assign it to 
#   a new variable.
madlib = "Pizza was invented by a " + adjective1 + " " + nationality + " chef named " + person + ".  To make a pizza, you need to take a lump of " + noun1 + ", and make a thin, round " + adjective2 + " " + noun2 + ". Then you cover it with " + adjective3 + " " + " sauce, " + adjective4 + " cheese, and fresh chopped " + plural_noun + ". When it is done, cut it into " + number1 + " " + shape + ". Some kids like " + food1 + " pizza the best, but my favorite is the " + food2 + " pizza. If I could, I would eat pizza " + number2 + " times a day!"

# Print our completed MadLib to the command prompt
print(madlib)
