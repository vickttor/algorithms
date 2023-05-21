book = dict()

book["Apple"] = 0.69
book["milk"] = 1.49
book["cookies"] = 2.70

print(book["milk"])
print(book.get("cookies"))

# Telephone Directory

telephone_dict = dict()

telephone_dict["Jenny"] = 8675309
telephone_dict["emergency"] = 911

print(telephone_dict["Jenny"])

# vote

voted = {}

def verify_voter(name):
  if voted.get(name):
    print("Send Away")
  else:
    voted[name] = True
    print("Let vote")

verify_voter("tom")
verify_voter("mike")
verify_voter("mike")

