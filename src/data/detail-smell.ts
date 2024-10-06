export const data = [
  {
    id: 1,
    title: "Data Class",
    desc: "Data Class Smell terjadi ketika sebuah class hanya digunakan untuk menyimpan data dan tidak memiliki fungsi lainnya.",
    treatment:
      "Untuk mengatasi smell code di atas, kita dapat melakukan Move Method dan Extract Method dari class lain ke class yang memiliki data tersebut.",
    codeBefore: `public class Product {
        private String name;
        private double price;
        private String category;
     
        // Constructor
        public Product(String name, double price, String category) {
            this.name = name;
            this.price = price;
            this.category = category;
        }
     
        // Getter and Setter
        public String getName() {
            return name;
        }
         ...
    }
     
    public class ProductUtils {
     
        public static void displayProducts(Product product) {
            System.out.println(product.name);
            System.out.println(product.price);
      System.out.println(product.category);
        }
    }`,
    codeAfter: `public class Product {
      private String name;
      private double price;
      private String category;
   
      // Constructor
      public Product(String name, double price, String category) {
          this.name = name;
          this.price = price;
          this.category = category;
      }
   
      // Getter and Setter
      public String getName() {
          return name;
      }
       ...
   
    // Method
    public static void displayProducts(Product product) {
          System.out.println(product.name);
        System.out.println(product.price);
    System.out.println(product.category);
      }
  }
  `,
  },
  {
    id: 2,
    title: "Duplicate Code",
    desc: "Duplicate Code adalah smell yang terjadi ketika ada lebih dari satu method yang sama atau mirip dalam suatu project.",
    treatment:
      "Untuk smell di atas, kita dapat menggunakan solusi Extract Method dengan mengeluarkan method calculateArea() dan membuat sebuah abstract class yaitu class Shape dengan method calculateArea().",
    codeBefore: `public class Square {
      private double sideLength;
     
      public Square(double sideLength) {
          this.sideLength = sideLength;
      }
     
      public double calculateArea() {
          return sideLength * sideLength;
      }
  }
   
  public class Circle {
      private double radius;
     
      public Circle(double radius) {
          this.radius = radius;
      }
     
      public double calculateArea() {
          return Math.PI * radius * radius;
      }
  }
  `,
    codeAfter: `abstract class Shape {
      public abstract double calculateArea();
  }
   
  class Square extends Shape {
      private double sideLength;
     
      public Square(double sideLength) {
          this.sideLength = sideLength;
      }
     
      @Override
      public double calculateArea() {
          return sideLength * sideLength;
      }
  }
   
  class Circle extends Shape {
      private double radius;
     
      public Circle(double radius) {
          this.radius = radius;
      }
     
      @Override
      public double calculateArea() {
          return Math.PI * radius * radius;
      }
  }
  `,
  },
  {
    id: 3,
    title: "Speculative Generality",
    desc: "Speculative Generality adalah smell yang terjadi ketika sepotong code dibuat berdasarkan spekulasi masa depan terhadap project tersebut, sehingga ada code kompleks yang mungkin belum berguna pada saat software tersebut digunakan.",
    treatment:
      "Menghapus code yang tidak diperlukan untuk project tersebut pada saat itu.",
    codeBefore: "",
    codeAfter: "",
  },
  {
    id: 4,
    title: "Dead Code",
    desc: "Dead Code smell terjadi ketika ada code yang tidak digunakan, baik code tersebut adalah sebuah variabel, parameter, method, class, atau parameters. Smell ini biasanya terjadi ketika refactoring dan code yang tidak digunakan tidak langsung dihapus sehingga akan mengacaukan codebase.",
    treatment: "Langsung menghapus potongan code yang tidak digunakan.",
    codeBefore: "",
    codeAfter: "",
  },
  {
    id: 5,
    title: "Lazy Class",
    desc: "Lazy Class dapat kita temukan ketika ada sebuah class yang jarang digunakan, smell ini dapat menghambat development karena kompleksitas codebase yang meningkat.",
    treatment:
      "Menghapus class yang jarang digunakan dan memindahkan fungsinya ke class lain menggunakan Extract Method.",
    codeBefore: "",
    codeAfter: "",
  },
  {
    id: 6,
    title: "Comments",
    desc: "The Comments adalah smell yang ditemukan pada sebuah method atau potongan kode yang memiliki komen untuk menjelaskan kegunaan dan algoritma dari potongan kode tersebut. Terdapat sebuah kutipan untuk smell ini yaitu 'The best comment is a good name for a method or class', yang artinya nama dari sebuah method harusnya sudah cukup menjelaskan fungsi dari potongan kode tersebut.",
    treatment:
      "Treatment untuk smell ini adalah dengan menghapus komentar yang tidak diperlukan dan mengubah nama method atau class agar menjadi lebih mudah dimengerti. Jika dalam satu method terdapat beberapa komentar yang menjelaskan bagian yang berbeda maka bagian-bagian yang berbeda tersebut dapat diubah menjadi method baru menggunakan Extract Method.",
    codeBefore: `# Function to calculate the area of a circle
    def function_a(radius):
        # Pi value
        pi = 3.14159
        # Calculating the area using formula: pi * r^2
        area = pi * (radius ** 2)
        # Returning the area
        return area
        
        
        
        
        
        
        
        
        
        `,
    codeAfter: `def calculate_area(radius):
        pi = 3.14159
        area = pi * (radius ** 2)
        return area
        
        
        
        
        
        
        
        
        
        
        
        
        
        `,
  },
  {
    id: 7,
    title: "Divergent Change",
    desc: "Divergent Change adalah keadaan yang terjadi ketika banyak perubahan dilakukan pada satu kelas atau modul tertentu. Ini menunjukkan bahwa kelas tersebut memiliki terlalu banyak tanggung jawab atau responsabilitas, sehingga perubahan yang dilakukan pada satu fungsionalitas atau fitur sering kali mempengaruhi banyak bagian dari kelas tersebut.",
    treatment: "",
    codeBefore: `public class Student {
      private String name;
      private String studentId;
      private String program;
  
  
      public Student(String name, String 
        studentId, String program) {
          this.name = name;
          this.studentId = studentId;
          this.program = program;
      }
  
  
      public void inputData(String name, 
        String studentId, String program) {
          this.name = name;
          this.studentId = studentId;
          this.program = program;
      }
  
  
      public void displayData() {
          System.out.println("Name: " + name);
          System.out.println("Student ID: " 
          + studentId);
          System.out.println("Program: " + 
          program);
      }
  }
  
  
  // Usage
  public class Main {
      public static void main(String[] args) 
      {
          Student student1 = new Student("John
           Doe", "123456", "Computer Science");
          student1.displayData();
          student1.inputData("Jane Smith", 
          "654321", "Information Technology");
          student1.displayData();
      }
  }
  `,
    codeAfter: `public class Student {
      private String name;
      private String studentId;
      private String program;
  
  
      public Student(String name, String 
        studentId, String program) {
          this.name = name;
          this.studentId = studentId;
          this.program = program;
      }
  
  
      // Getters and setters for attributes
  
  
      public void displayData() {
          System.out.println("Name: " + name);
          System.out.println("Student ID: " 
          + studentId);
          System.out.println("Program: " + 
          program);
      }
  }
  
  
  public class StudentDataInput {
      public static void inputData(Student 
        student, String name, String studentId
        , String program) {
          student.name = name;
          student.studentId = studentId;
          student.program = program;
      }
  }
  
  
  public class Main {
      public static void main(String[] args) {
          Student student1 = new Student("John 
          Doe", "123456", "Computer Science");
          StudentDataInput.inputData(student1, 
          "Jane Smith", "654321", "Information 
          Technology");
          student1.displayData();
      }
  }
  `,
  },
  {
    id: 8,
    title: "Shotgun Surgery",
    desc: "Shotgun Surgery adalah fenomena di mana satu perubahan memengaruhi banyak kelas sekaligus dalam kode  di mana hal ini terjadi ketika sebuah modifikasi memerlukan sejumlah kecil perubahan yang tersebar di berbagai kelas dalam basis kode. Dalam hal ini, kita harus mengedit modifikasi yang sama di setiap kelas yang telah kita buat.",
    treatment:
      "Untuk mengkonsolidasikan perilaku kelas yang sudah ada ke dalam satu kelas tunggal, kita dapat menggunakan Move Method atau Move Field. Jika tidak ada kelas yang match dengan penggabungan, maka dapat membuat kelas yang baru.",
    codeBefore: `class Product {
      private String name;
      private double price;
      private String category;
  
  
      public Product(String name, double price, 
        String category) {
          this.name = name;
          this.price = price;
          this.category = category;
      }
  
  
      // Getter and setter methods
  }
  
  
  class ShoppingCart {
      private List<Product> products;
  
  
      public ShoppingCart() {
          this.products = new ArrayList<>();
      }
  
  
      public void addProduct(Product product) {
          this.products.add(product);
      }
  
  
      public double calculateTotal() {
          double total = 0;
          for (Product product : this.products) {
              total += product.getPrice();
          }
          return total;
      }
  }
  `,
    codeAfter: `class Product {
      private String name;
      private double price;
  
  
      public Product(String name, double price) {
          this.name = name;
          this.price = price;
      }
  
  
      public double getPrice() {
          return price;
      }
  
  
      // Getter and setter methods
  }
  
  
  class ShoppingCart {
      private List<Product> products;
  
  
      public ShoppingCart() {
          this.products = new ArrayList<>();
      }
  
  
      public void addProduct(Product product) {
          this.products.add(product);
      }
  
  
      public double calculateTotal() {
          double total = 0;
          for (Product product : this.products) {
              total += product.getPrice();
          }
          return total;
      }
  }
  `,
  },
  {
    id: 9,
    title: "Parallel Inheritance Hierarchies",
    desc: "Parallel Inheritance Hierarchies adalah bad code smell yang terjadi ketika menambahkan sebuah kelas yang baru yang pada akhirnya bersifat memaksa untuk membuat kelas dependen lainnya. Kelas-kelas dalam program membentuk dua atau lebih hierarki sejajar. Hierarki-hierarki ini sering saling tergantung, menyebabkan perubahan di satu hierarki memaksa perubahan di hierarki lainnya. Ini membuat kode sulit dipahami, dipelihara, dan diperluas.",
    treatment:
      "Jadikan instance dari satu hierarki merujuk ke instance dari hierarki lainnya atau hapus hierarki pada kelas yang dirujuk (Move Method atau Move Field)",
    codeBefore: `class Animal {
      public void makeSound() {
          // method abstrak untuk menghasilkan suara hewan
      }
  }
  
  
  class Dog extends Animal {
      @Override
      public void makeSound() {
          System.out.println("Bark");
      }
  }
  
  
  class Cat extends Animal {
      @Override
      public void makeSound() {
          System.out.println("Meow");
      }
  }
  
  
  class Bird extends Animal {
      @Override
      public void makeSound() {
          System.out.println("Chirp");
      }
  }
  
  
  class FlyingBird extends Bird {
      public void fly() {
          System.out.println("Flying");
      }
  }
  
  
  class SwimmingBird extends Bird {
      public void swim() {
          System.out.println("Swimming");
      }
  }
  `,
    codeAfter: `class Animal {
      public void makeSound() {
          // method abstrak untuk menghasilkan suara hewan
      }
  }
  
  
  class Dog extends Animal {
      @Override
      public void makeSound() {
          System.out.println("Bark");
      }
  }
  
  
  class Cat extends Animal {
      @Override
      public void makeSound() {
          System.out.println("Meow");
      }
  }
  
  
  class Bird extends Animal {
      @Override
      public void makeSound() {
          System.out.println("Chirp");
      }
     
      public void fly() {
          System.out.println("Flying");
      }
     
      public void swim() {
          System.out.println("Swimming");
      }
  }
  `,
  },
];
