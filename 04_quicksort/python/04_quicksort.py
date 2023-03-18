def quicksort(arr):
  if len(arr) < 2:
    return arr
  pivot = arr[0]
  minors = [i for i in arr[1:] if i <= pivot]
  bigger = [i for i in arr[1:] if i > pivot]
  return quicksort(minors) + [pivot] + quicksort(bigger)

list = [2,5,9,8,10,42,9,100]

print(quicksort(list))
