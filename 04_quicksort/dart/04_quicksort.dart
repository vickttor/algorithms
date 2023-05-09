// QuickSort in Dart
List<int> quickSort(List<int> arr) {
  if (arr.length < 2) return arr;

  int pivo = arr.removeAt(0);
  var lowers = arr.where((el) => el <= pivo).toList();
  var highers = arr.where((el) => el > pivo).toList();
  return [...quickSort(lowers), pivo, ...quickSort(highers)];
}

void main() {
  List<int> list = [6, 2, 8, 4, 99, 32, 67, 88, 12, 1, 5, 3];

  print(quickSort(list));
}
