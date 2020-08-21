Co handles academic math papers and makes them easier to read
Scans maths papers
Looks for sums/ numbers
Extracts strings

Extracting sum as strings

string calculator

Input
operators = +-/*
extract("1")
extract("1 + 2" )
extract("2 + 2" )
extract("2 ? 2" )
extract("1+2" )


Output
(["1", 1])
(["1 + 2" , 3])
(["2 + 2" , 4])
error - invalid input
error - invalid input



