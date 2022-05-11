import numpy as np

def rod_cutting_problem() -> dict:
    print("ROD CUTTING PROBLEM")
    length = [1, 2, 3, 4, 5, 6, 7, 8]
    price = [1, 5, 8, 9, 10, 17, 17, 20]
    Rod_length = 8
    sol = {'Optimal solution:' : 0}
    
    print("Values: length =", length, "prices =", price, "Length of the rod =", Rod_length)
    
    N = len(length) 
    
    m = np.zeros((N, Rod_length + 1))
    
    for col in range(1, Rod_length + 1):
        m[0][col] = col
        
    for row in range(1, N):
        for col in range(1, Rod_length + 1):
            if length[row] > col:
                m[row][col] = m[row - 1][col]
            else:
                m[row][col] = max(m[row - 1][col], m[row][col - length[row]] + price[row])
                
        sol[str(row)] = 0
           
    N -= 1
    sol["Optimal solution:"] = int(m[N][Rod_length])
    while True:
        if m[N][Rod_length] == 0:
            return sol
        else:
            if m[N][Rod_length] == m[N - 1][Rod_length]:
                N -= 1
            else:
                sol[str(length[N])] += 1
                Rod_length -= N + 1
                
    
if __name__ == "__main__":
    print("The solution for the RCP with the given values is:", rod_cutting_problem())