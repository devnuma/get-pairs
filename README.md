# Get Pairs

## Description

`getPairs` is a JavaScript function that finds pairs of numbers in an array that sum up to a given target. Each element can be used only once. This project includes tests to verify different edge cases.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/get-pairs.git
   ```

2. cd get-pairs

3. npm test

## **Time Complexity Analysis**

### **Breaking Down the Loops**

1. **Iterating through the array (`for` loop):**
   - Runs `n` times, where `n` is the length of `arr`.
   - **Time Complexity: O(n)**.

2. **Checking and updating the `Map` (`seen.has()`, `seen.get()`, `seen.set()`):**
   - **Map operations (`has()`, `get()`, `set()`) are O(1)** on average.
   - **Set operations (`add()`, `delete()`) are O(1)** on average.
   - These operations occur **inside the loop**, so they run **O(n) times**.

### **Overall Time Complexity**
- Since all operations inside the loop are **O(1)** and the loop runs **O(n)** times, the total time complexity is:
  **O(n)** (Linear Time Complexity).

---

## **Space Complexity Analysis**

### **Memory Usage**
1. **`seen` (Map storing Sets):**
   - In the worst case, the `Map` stores up to **n** elements.
   - Each entry in the `Map` contains a `Set`, which can store up to `n` indices.
   - **Worst-case space complexity: O(n)**.

2. **`result` (Array storing pairs):**
   - In the worst case, there are `n/2` pairs (when every two numbers form a pair).
   - **Worst-case space complexity: O(n)**.

3. **Other variables (`element`, `pair`, `first`):**
   - These take constant space **O(1)**.

### **Overall Space Complexity**
- The dominant factor is the `Map` and `result` array, both taking **O(n) space**.
- Therefore, the total **space complexity is O(n)**.
