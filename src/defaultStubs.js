const stubs = {};

stubs.cpp = `#include <iostream>
using namespace std;

int main() {
    cout << "Hello World";
    return 0;
}
`;

stubs.python = `# python3

print("Hello World !!!")`;


stubs.java = `
public class Main {
    public static void main(String []args) {
        System.out.println("Hello World");
    }
};
`

export default stubs;