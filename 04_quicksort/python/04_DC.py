list = [1,6,3,10,8,3,52,4,28,33,41,88]

# Recursive function to sum
def my_sum(arr):
  if arr == []:
    return 0
  return arr[0] + my_sum(arr[1:])

print("Sum: " + str(my_sum(list)))

# Recursive function to get the length
def my_len(arr):
  if arr == []:
    return 0
  return 1 + my_len(arr[1:])

print("Length: " + str(my_len(list)))

# Recursive function to get the max
def my_max(arr):
  if my_len(arr) == 2:
    return arr[0] if arr[0] > arr[1] else arr[1]
  sub_max = my_max(arr[1:])
  return arr[0] if arr[0] > sub_max else sub_max

print(my_max(list))