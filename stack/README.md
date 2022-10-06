# Stack Data Structure

Stack is a linear data structure which follows a particular order in which operations are performed. The order may be **Last In First Out(LIFO)** or **First In Last Out(FILO)** 
In JavaScript the array object has inbuilt function we need in order to use it as a stack. Examples of these functions are push, pop, peek, length and so on.

#### Stacks in Real Life
There are many real-life examples of a stack. Consider the simple example of books stacked over one another on a table. The book which is at the top is the first one to be removed, i.e. the book which has been placed at the bottommost position remains in the stack for the longest period of time. So, it can be simply seen to follow the `LIFO/FILO` order.

#### Complexity Analysis
###### Time Complexity

- **Push() -> O(1)**
- **Pop() -> O(1)**
- **isEmpty() -> O(1)**
- **size() -> O(1)**

#### Types of Stacks

- **Register Stack**: This type of stack is also a memory element present in the memory unit and can handle a small amount of data only. The height of the register stack is always limited as the size of the register stack is very small compared to the memory. 
- **Memory Stack**: This type of stack can handle a large amount of memory data. The height of the memory stack is flexible as it occupies a large amount of memory data. 

#### Applications of Stacks
- Infix to Postfix /Prefix conversion
- Redo-undo features
- Forward and backward features in web browsers
- Used in many algorithms like Tower of Hanoi, tree traversals, stock span problems, and histogram problems.
- Backtracking is one of the algorithm designing techniques. Some examples of backtracking are the Knight-Tour problem, N-Queen problem, find your way through a maze, and game-like chess or checkers in all these problems we dive into someway if that way is not efficient we come back to the previous state and go into some another path. To get back from a current state we need to store the previous state for that purpose we need a stack.
- In Graph Algorithms like Topological Sorting and Strongly Connected Components
- In Memory management, any modern computer uses a stack as the primary management for a running purpose. Each program that is running in a computer system has its own memory allocations
- String reversal is also another application of stack. Here one by one each character gets inserted into the stack. So the first character of the string is on the bottom of the stack and the last element of a string is on the top of the stack. After Performing the pop operations on the stack we get a string in reverse order.

#### Implementation of Stacks
- Using arrays
- Using linked list

###### Advantages of array implementation:
- Easy to implement.
- Memory is saved as pointers are not involved. 


###### Disadvantages of array implementation:
- It is not dynamic.
- It doesn’t grow and shrink depending on needs at runtime.

###### Advantages of Linked List implementation:
- The linked list implementation of a stack can grow and shrink according to the needs at runtime.
- It is used in many virtual machines like JVM.
- Stacks are more secure and reliable as they do not get corrupted easily.
- Stack cleans up the objects automatically.

###### Disadvantages of Linked List implementation:                                                                                         
- Requires extra memory due to the involvement of pointers.
- Random accessing is not possible in stack.
- The total size of the stack must be defined before.
- If the stack falls outside the memory it can lead to abnormal termination.