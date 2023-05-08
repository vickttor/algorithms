# The code bellow will throw an error! because it enters into a  infinite loop.

# def countdown(i):
#     print(i)
#     countdown(i - 1)

# countdown(10)

# Since we define a base case the infinite loop will not happens!

def countdown(i):
  print(i)
  if(i > 0):
    countdown(i - 1)
  else:
    return
    
countdown(10)