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
extract("1 + 2 + 1" )
extract("2 + 2" )
extract("2 ? 2" )
extract("1+2" )


Output
(["1", 1])
(["1 + 2" , 3])
(["2 + 2" , 4])
error - invalid input
error - invalid input



# Review 4

My fourth review* with a project overview set by a 'company' that handles academic math papers and makes them easier to read. The company:
* Scans maths papers
* Looks for sums/ numbers
* Extracts strings


<i>* A third-party assessed process review. The call lasts an hour, and the challenge is laid out at the beginning with a non-technical user story. The reviewee must ask questions until there is a clear technical translation of the requirements, and then test, and implement the user story.
</i>

Here are the requirement outlines:

## Input Examples
* Usable operators are: +-/*

```
extract("1")
extract("1 + 2" )
extract("1 + 2 + 1" )
extract("2 + 2" )
```


## Output Examples
```
(["1", 1])
(["1 + 2" , 3])
(["1 + 2 + 1", 4] )
(["2 + 2" , 4])
```

## Approach
This repo looks at an [inside-out](https://8thlight.com/blog/georgina-mcfadyen/2016/06/27/inside-out-tdd-vs-outside-in.html) approach to testing, which meant building up each test incrementally until full functonality was in place. Watch how I tackle the challenge [here](https://www.youtube.com/watch?v=1LOASnTQQQM).
For a look at the same kata with an outside-in approach to TDD, have a look [over here](https://github.com/sofyloafy/outside-in-paperScanner).
