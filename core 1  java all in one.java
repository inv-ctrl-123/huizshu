import javax.swing.*;
import java.awt.event.*;
import java.io.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

public class AllInOneJavaExamples {

    public static void main(String[] args) {
        // Uncomment any example call below to run it:

        // example1HelloWorld();
        // example2IfElse();
        // example3ForLoop();
        // example4WhileLoop();
        // example5SwitchCase();
        // example6Arrays();
        // example7ArrayList();
        // example8MethodOverloading();
        // example9RecursionFactorial();
        // example10TryCatch();
        // example11FileIO();
        // example12Inheritance();
        // example13Interface();
        // example14LambdaExpression();
        // example15StreamAPI();
        // example16ThreadExample();
        // example17SynchronizedExample();
        // example18ExceptionHandlingCustom();
        // example19StaticExample();
        // example20FinalExample();
        // example21AbstractClass();
        // example22NestedLoop();
        // example23StringManipulation();
        // example24HashMapExample();
        // example25LinkedListExample();
        // example26StackExample();
        // example27QueueExample();
        // example28FilterEvenNumbers();
        // example29GenericsExample();
        // example30SwingGUI();
        // example31SerializationExample();
        // example32EnumExample();
        // example33NestedClassExample();
        // example34AnonymousClassExample();
        // example35PolymorphismExample();
        // example36ConstructorOverloading();
        // example37StaticMembersExample();
        // example38CommandLineArgs(args);
        // example39DateTimeExample();
        // example40MathFunctionsExample();
        // example41BinarySearchExample();

        // For demonstration, let's run example 1 and example 41
        example1HelloWorld();
        example41BinarySearchExample();
    }

    static void example1HelloWorld() {
        System.out.println("Hello, World!");
    }

    static void example2IfElse() {
        int x = 10;
        if (x > 0) {
            System.out.println("Positive");
        } else {
            System.out.println("Non-positive");
        }
    }

    static void example3ForLoop() {
        for (int i = 0; i < 5; i++) {
            System.out.println("Count: " + i);
        }
    }

    static void example4WhileLoop() {
        int i = 0;
        while (i < 5) {
            System.out.println("While loop i: " + i);
            i++;
        }
    }

    static void example5SwitchCase() {
        int day = 3;
        switch (day) {
            case 1: System.out.println("Monday"); break;
            case 2: System.out.println("Tuesday"); break;
            case 3: System.out.println("Wednesday"); break;
            default: System.out.println("Other day");
        }
    }

    static void example6Arrays() {
        int[] arr = {1, 2, 3, 4};
        for (int val : arr) {
            System.out.print(val + " ");
        }
        System.out.println();
    }

    static void example7ArrayList() {
        ArrayList<String> list = new ArrayList<>();
        list.add("Java");
        list.add("Python");
        for (String lang : list) {
            System.out.println(lang);
        }
    }

    static void example8MethodOverloading() {
        System.out.println(sum(5, 10));
        System.out.println(sum(5.5, 2.5));
    }

    static int sum(int a, int b) { return a + b; }
    static double sum(double a, double b) { return a + b; }

    static void example9RecursionFactorial() {
        int n = 5;
        System.out.println("Factorial of " + n + " is " + factorial(n));
    }

    static int factorial(int n) {
        if (n <= 1) return 1;
        else return n * factorial(n - 1);
    }

    static void example10TryCatch() {
        try {
            int a = 5 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero!");
        }
    }

    static void example11FileIO() {
        String filename = "test.txt";
        try (BufferedWriter bw = new BufferedWriter(new FileWriter(filename))) {
            bw.write("Hello File");
        } catch (IOException e) {
            e.printStackTrace();
        }
        try (BufferedReader br = new BufferedReader(new FileReader(filename))) {
            System.out.println("File content: " + br.readLine());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    static void example12Inheritance() {
        class Animal {
            void sound() { System.out.println("Animal sound"); }
        }
        class Dog extends Animal {
            @Override
            void sound() { System.out.println("Bark"); }
        }
        Animal a = new Dog();
        a.sound();
    }

    static void example13Interface() {
        interface Vehicle {
            void start();
        }
        class Car implements Vehicle {
            public void start() { System.out.println("Car starting"); }
        }
        Vehicle v = new Car();
        v.start();
    }

    static void example14LambdaExpression() {
        Runnable r = () -> System.out.println("Lambda running");
        r.run();
    }

    static void example15StreamAPI() {
        List<Integer> nums = Arrays.asList(1,2,3,4);
        nums.stream()
            .filter(n -> n % 2 == 0)
            .forEach(System.out::println);
    }

    static void example16ThreadExample() {
        Thread t = new Thread(() -> System.out.println("Thread running"));
        t.start();
    }

    static void example17SynchronizedExample() {
        class Counter {
            int count = 0;
            synchronized void increment() {
                count++;
            }
        }
        Counter c = new Counter();
        c.increment();
        System.out.println("Count: " + c.count);
    }

    static void example18ExceptionHandlingCustom() {
        class MyException extends Exception {
            MyException(String msg) { super(msg); }
        }
        try {
            throw new MyException("Custom Exception");
        } catch (MyException e) {
            System.out.println(e.getMessage());
        }
    }

    static void example19StaticExample() {
        class StaticDemo {
            static int count = 0;
            StaticDemo() { count++; }
        }
        new StaticDemo();
        new StaticDemo();
        System.out.println("Count: " + StaticDemo.count);
    }

    static void example20FinalExample() {
        final int x = 10;
        System.out.println("Final x: " + x);
    }

    static void example21AbstractClass() {
        abstract class Shape {
            abstract void draw();
        }
        class Circle extends Shape {
            void draw() { System.out.println("Drawing circle"); }
        }
        Shape s = new Circle();
        s.draw();
    }

    static void example22NestedLoop() {
        for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= 2; j++) {
                System.out.println("i = " + i + ", j = " + j);
            }
        }
    }

    static void example23StringManipulation() {
        String s = "Hello";
        System.out.println(s.toLowerCase());
        System.out.println(s.replace("l", "L"));
    }

    static void example24HashMapExample() {
        HashMap<String, Integer> map = new HashMap<>();
        map.put("Alice", 30);
        map.put("Bob", 25);
        System.out.println("Alice's age: " + map.get("Alice"));
    }

    static void example25LinkedListExample() {
        LinkedList<String> list = new LinkedList<>();
        list.add("First");
        list.add("Second");
        System.out.println("LinkedList: " + list);
    }

    static void example26StackExample() {
        Stack<Integer> stack = new Stack<>();
        stack.push(1);
        stack.push(2);
        System.out.println("Stack top: " + stack.peek());
    }

    static void example27QueueExample() {
        Queue<String> queue = new LinkedList<>();
        queue.offer("A");
        queue.offer("B");
        System.out.println("Queue head: " + queue.peek());
    }

    static void example28FilterEvenNumbers() {
        List<Integer> nums = Arrays.asList(1,2,3,4,5,6);
        List<Integer> evenNums = new ArrayList<>();
        for (int n : nums) {
            if (n % 2 == 0) evenNums.add(n);
        }
        System.out.println("Even numbers: " + evenNums);
    }

    static void example29GenericsExample() {
        class Box<T> {
            T item;
            void set(T item) { this.item = item; }
            T get() { return item; }
        }
        Box<String> stringBox = new Box<>();
        stringBox.set("Hello");
        System.out.println("String box: " + stringBox.get());

        Box<Integer> intBox = new Box<>();
        intBox.set(123);
        System.out.println("Integer box: " + intBox.get());
    }

    static void example30SwingGUI() {
        JFrame frame = new JFrame("Simple GUI");
        JButton button = new JButton("Click me!");
        button.setBounds(100, 100, 120, 40);

        button.addActionListener(e -> JOptionPane.showMessageDialog(frame, "Button Clicked!"));

        frame.add(button);
        frame.setSize(350, 300);
        frame.setLayout(null);
        frame.setVisible(true);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }

    static void example31SerializationExample() {
        class Person implements Serializable {
            private static final long serialVersionUID = 1L;
            String name;
            int age;
            Person(String name, int age) { this.name = name; this.age = age; }
        }
        Person p = new Person("Alice", 30);
        try (ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("person.ser"))) {
            out.writeObject(p);
            System.out.println("Serialized");
        } catch (IOException e) {
            e.printStackTrace();
        }
        try (ObjectInputStream in = new ObjectInputStream(new FileInputStream("person.ser"))) {
            Person p2 = (Person) in.readObject();
            System.out.println("Deserialized: " + p2.name + ", age: " + p2.age);
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    static void example32EnumExample() {
        enum Day { MON, TUE, WED, THU, FRI, SAT, SUN }
        Day today = Day.WED;
        switch (today) {
            case MON: System.out.println("Monday"); break;
            case FRI: System.out.println("Friday"); break;
            case SAT: case SUN: System.out.println("Weekend"); break;
            default: System.out.println("Midweek"); break;
        }
    }

    static void example33NestedClassExample() {
        class OuterClass {
            int outerValue = 10;
            class InnerClass {
                void display() { System.out.println("Outer value is " + outerValue); }
            }
        }
        OuterClass outer = new OuterClass();
        OuterClass.InnerClass inner = outer.new InnerClass();
        inner.display();
    }

    static void example34AnonymousClassExample() {
        interface Greeting { void sayHello(); }
        Greeting greet = new Greeting() {
            public void sayHello() {
                System.out.println("Hello from anonymous class!");
            }
        };
        greet.sayHello();
    }

    static void example35PolymorphismExample() {
        class Vehicle {
            public void start() { System.out.println("Vehicle starting"); }
        }
        class Car extends Vehicle {
            public void start() { System.out.println("Car starting with ignition"); }
        }
        Vehicle v = new Vehicle();
        Vehicle c = new Car();
        v.start();
        c.start();
    }

    static void example36ConstructorOverloading() {
        class Rectangle {
            int length, width;
            Rectangle() { length = 0; width = 0; }
            Rectangle(int l, int w) { length = l; width = w; }
            int area() { return length * width; }
        }
        Rectangle r1 = new Rectangle();
        Rectangle r2 = new Rectangle(10, 20);
        System.out.println("Area r1: " + r1.area());
        System.out.println("Area r2: " + r2.area());
    }

    static void example37StaticMembersExample() {
        class Counter {
            static int count = 0;
            Counter() { count++; }
            static void displayCount() { System.out.println("Count: " + count); }
        }
        new Counter();
        new Counter();
        Counter.displayCount();
    }

    static void example38CommandLineArgs(String[] args) {
        System.out.println("Number of args: " + args.length);
        for (int i = 0; i < args.length; i++) {
            System.out.println("Arg " + i + ": " + args[i]);
        }
    }

    static void example39DateTimeExample() {
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        System.out.println("Current date/time: " + now.format(formatter));
    }

    static void example40MathFunctionsExample() {
        double num = 16.0;
        System.out.println("Sqrt of " + num + " = " + Math.sqrt(num));
        System.out.println("2^3 = " + Math.pow(2, 3));
        System.out.println("Absolute -5 = " + Math.abs(-5));
        System.out.println("Max 10,20 = " + Math.max(10, 20));
        System.out.println("Random 0-1 = " + Math.random());
    }

    static void example41BinarySearchExample() {
        int[] arr = {2, 5, 7, 9, 12, 15, 20};
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number to search: ");
        int key = sc.nextInt();
        int index = binarySearch(arr, key);
        if (index == -1) System.out.println("Element not found");
        else System.out.println("Element found at index " + index);
        sc.close();
    }

    static int binarySearch(int[] arr, int key) {
        int low = 0, high = arr.length - 1;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (arr[mid] == key) return mid;
            else if (arr[mid] < key) low = mid + 1;
            else high = mid - 1;
        }
        return -1;
    }
}
