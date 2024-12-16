# TypeScript Type Error Bug

This repository demonstrates a common type error in TypeScript where an array is passed to a function expecting a string. The error message highlights the type mismatch, showing that the function expects a string, but receives an array of strings instead. The solution involves either modifying the function to accept an array, or modifying the function call to pass a single string. 

## Bug

The `bug.ts` file contains the erroneous code.  The `greeter` function expects a string argument, but the `user` variable is an array of strings.  Attempting to call `greeter` with this array results in a type error.

## Solution

The `bugSolution.ts` file provides a corrected version.  This solution demonstrates how to handle this type error by either changing the function signature or modifying the function call. 