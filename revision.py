#def helloUser():
   # user=input("what is your name?")
   # return f"hello user}"
#print(helloUser())
# #1: Calculator function
def addition(x,y):
    return x + y
def minus(x, y):
    return x - y
def times(x, y):
    return x * y
def divide(x, y):
    return x / y
print("Welcome.")
print("select a function.")
print("1. Addition.")
print("2. Minus.")
print("3. Times.")
print("4. Divide.")
while True:
    choice = input("enter choice(1, 2, 3, 4):")
    if choice in ('1','2','3','4'):
        try:
            num1= float(input("enter the first number " "")) #float to take whole and decimals
            num2= float(input("enter the second number " "")) #converted string to int/F
        except ValueError:
            print("invaid input. Please enter a number.")
    if  choice == '1':
        print(num1, "+", num2, "=", addition(num1, num2))
    elif choice == '2':
        print(num1, "-", num2, "=", minus(num1, num2))
    elif choice == '3':
        print(num1, "*", num2, "=", times(num1, num2))
    elif choice == '4':
        print(num1, "/", num2, "=", divide(num1, num2))
      
    next_calculation = input("Let's do next calculation? (yes/no): ")
    if next_calculation == "no":
          break
else:
    print("Invalid Input")

# #2: Function to check whether numbers are odd or even
number = int(input("Enter an integer number."))
remainder = number % 2 #modulus operator find remainder
if (remainder == 0):
    print(number, "is an even Number")
else:
    print(number, "is an odd Number")

#while loop and python list for yes/no questions
sports = {"football": "football is famous because of Ronaldo and Messi.",
          "rugby": "rugby is played within 80 minutes with two teams of 15.", 
          "padel": "padel is the fasted growing racket sport.", 
          "squash": "squash is played by hitting a ball against a wall.",
          "tennis": "tennis is played over a fence with two players.", 
          "cricket": "cricket is famous because of the ashes.",
          "dodgeball": "if you can dodge a wrench..."
        }
while True:
    response = input("would you like to learn about a sport? (yes or no):")
    if response == "yes":
        for index, value in enumerate(sports, start=1):
            print(f"{index}: {value}")
        sport_choice = input("which sport would you like to learn about?")
    elif response == "no":
            print("okily dokily!")
            break 

    if sport_choice in sports:
        print(sports[sport_choice])
    else:
        print("sorry I don't know whether that sport exists.")