# Implicit Type Coercion in TypeScript

This repository demonstrates a potential issue in TypeScript related to implicit type coercion.  In certain situations, the type checker might not catch type mismatches that lead to runtime errors.  The example showcases a scenario where string and number types are added implicitly, resulting in unexpected behavior.

## Problem

The `add` function is designed to take two numbers and return their sum. However, due to TypeScript's flexibility, the compiler does not raise an error when a string is passed as an argument. At runtime, JavaScript performs type coercion, resulting in an unexpected numerical result.

## Solution

The solution involves enforcing stricter type checking through explicit type guards or input validation to prevent incorrect arguments from being passed to the function.