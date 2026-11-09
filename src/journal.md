Phase 1
I created validation functions for names and usernames using regular expressions. I learned that start and end anchors make sure the entire username follows the required rules. Without them, a longer username could still pass if part of it matches the pattern.

Phase 2
Added phone number and promo code validation. The phone pattern accepts numbers with hyphens, dots, or no separators. I used the case-insensitive flag to accept different capitalization of SUMMER. This is cleaner than checking multiple versions of the same word manually.
