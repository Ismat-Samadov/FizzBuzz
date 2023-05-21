public class FizzBuzz {

    public static void main(String[] args) {
        FizzBuz(1, 100, 4, 6);
    }

    public static void FizzBuz(int lowerBound, int upperBound, int FirstPattern, int SecondPattern) {

        for (int i = lowerBound; i <= upperBound; i++) {
            if ((i % FirstPattern == 0 && i % SecondPattern == 0)) {
                System.out.println("FizzBuzz");
            } else if (i % SecondPattern == 0) {
                System.out.println("Buzz");
            } else if (i % FirstPattern == 0) {
                System.out.println("Fizz");
            } else {
                System.out.println(i);
            }
        }
    }
}
