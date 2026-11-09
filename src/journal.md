Phase 1
I created validation functions for names and usernames using regular expressions. I learned that start and end anchors make sure the entire username follows the required rules. Without them, a longer username could still pass if part of it matches the pattern.

Phase 2
Added phone number and promo code validation. The phone pattern accepts numbers with hyphens, dots, or no separators. I used the case-insensitive flag to accept different capitalization of SUMMER. This is cleaner than checking multiple versions of the same word manually.

Phase 3
I created a function that reformats valid phone numbers into a standard format. Capturing groups separate the area code, exchange, and line number. The test() method checks whether a string matches a pattern, while replace() uses the captured groups to change how the phone number looks.

Phase 4
I created the processRegistration() function to bring all the validation steps together. It checks each required field and stores any errors in an array. If the information is valid, it returns the user's data with a formatted phone number and indicates whether the promo discount was applied. Building the smaller functions first made the final pipeline easier to organize and test.
