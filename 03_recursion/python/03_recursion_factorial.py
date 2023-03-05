# Calculate the factorial of a number

def fat(i):
    if i == 1:
      return 1
    else: 
      return i * fat(i - 1)
    
print(fat(6)) # it returns 120