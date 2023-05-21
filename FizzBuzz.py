def FizzBuzz(lowerBound, upperBound, FirstPattern, SecondPattern):
    for i in range(lowerBound, upperBound):
        if ((i % FirstPattern == 0) and (i % SecondPattern == 0)):
            print("FizzBuzz")
        elif (i % FirstPattern == 0):
            print("Fizz")
        elif (i % SecondPattern == 0):
            print("Buzz")
        else:
            print(i)


FizzBuzz(1, 16,3,5)
