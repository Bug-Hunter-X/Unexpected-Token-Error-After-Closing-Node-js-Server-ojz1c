# Unexpected Token Error After Closing Node.js Server

This repository demonstrates an uncommon Node.js error: an 'Unexpected token' error occurring after the server has been closed. This error doesn't stem from typical syntax mistakes but arises from asynchronous operations and event listeners that remain active even after the server is shut down.

## The Problem

The provided `bug.js` file contains a basic HTTP server.  However, due to improper cleanup of asynchronous operations, an unexpected token error can occur after the server is closed and a new request attempts to be processed. This usually manifests after calling `server.close()`, resulting in a non-standard error.

## Solution

The `bugSolution.js` file presents a solution.  The solution focuses on ensuring all event listeners are properly removed before closing the server and handling potential race conditions.