# Tech assignment - Network speed 
- Write a program that solves the most suitable (with highest non-zero speed) network station for a device at a  given point (x, y).

- This problem can be solved in 2-dimensional space. Network stations have reach and speed
that depends on the distance to the station.

A network station’s speed can be calculated as follows:
  speed = (reach - device's distance from network station)^2
  if distance > reach, speed = 0

Network stations are located at points (x, y) and have reach r[x,y,r]:
  
  [
  [0,  0,  9],
  [20, 20, 6],
  [10, 0, 12],
  [5, 5,  13],
  [99, 25, 2],

]
Print out the most suitable network station and the network speed from devices (x, y):
(0, 0), (100, 100), (15, 10), (18, 18), (13, 13) and (25, 99)

Program should output the solution to these two cases:
● Best station found, output station location and speed
● No station within reach found, output error message

It can be in the form of:
  “Best network station for point x,y is x,y with speed z”
  “No network station within reach for point x,y”

# Solutions
- The solution will be found on network.js file.
# How to run the solution
- Before you run this programe, Node js should be installed on your machine(Other option: see below)
- Open your favourite editor and then open folder nord-cloud-assignment-dn
- Open terminal and select root folder and type command :

 # node network.js
- Then program will be executed and you will see the following results on terminal:

Best Network station for point: (0,0) is (5,5) with speed: 35.15
No network station within reach for point : (100,100)
Best Network station for point: (15,10) is (5,5) with speed: 3.31
Best Network station for point: (18,18) is (20,20) with speed: 10.06
No network station within reach for point : (25,99)
Best Network station for point: (13,13) is (5,5) with speed: 2.84
No network station within reach for point : (25,99)

# Alternativly, you can use online editor tool https://codepen.io/pen/ and copy network.js code and page into it where you will see exactly the same results.       

# How to test this solution.
-The solution can be tested using Jest(JavaScript Testing Framework) which is pretty simple and almost need no configuration at all.

# Instruction: 
-Open nord-cloud-assignment-dn folder then on terminal type command :
 # npm install -- save-dev jest
 -The Jest Testing framework library will be installed on your machine. Now run the test using command :
 #  npm test
 
 After running test command you will see the following output: 

  PASS  ./network.test.js
  findMostSuitableStation for point(0,0)
    √ if point(0,0) is given it should return best netwok station (5,5) with highest speed 35.15 (3 ms)                     
  findMostSuitableStation for point(13,13)                                                                                  
    √ if point(13,13) is given it should return netwok station (5,5) with lowest speed 2.84 (1 ms)                          
  findMostSuitableStation for point(25,99)                                                                                  
    √ if point(25,99) is given it should return no netwok station(undefined) (1 ms)                                         
  getDistance between station and device                                                                                    
    √ Distance between two postion(x1,y1) and (x2,y2)                                                                       
  getNetworkSpeed if distance < reach                                                                                       
    √ Distance less than reach should print non zero Network speed                                                          
  getNetworkSpeed if distance > reach                                                                                       
    √ Distance greater than reach should print  zero(0) network speed (1 ms)                                                
                                                                                                                            
Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        0.823 s, estimated 1 s
