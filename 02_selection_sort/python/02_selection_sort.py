def searchLower(arr):
  lower = arr[0]
  lower_index = 0

  for i in range(1, len(arr)):
    if arr[i] < lower:
      lower = arr[i]
      lower_index = i
  return lower_index


def selectionSort(arr):
  new_arr = []

  for i in range(1, len(arr)):
    lower_index = searchLower(arr)
    new_arr.append(arr.pop(lower_index))

  return new_arr

list = [10,6,4,8,12,16,1,3]


print(selectionSort(list))
