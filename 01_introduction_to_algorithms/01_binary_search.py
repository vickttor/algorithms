def bynarySearch(list, item):
    low = 0
    high = len(list) - 1

    while low <= high:
      middle = round((low + high) / 2)
      guess = list[middle]

      if guess == item:
        return middle
      if guess > item:
        high = middle - 1
      else:
        low = middle + 1

      return None 
  
list = [1, 2, 3, 4, 5]

print(bynarySearch(list, 3)) # must print 2
print(bynarySearch(list, -1)) # must print None