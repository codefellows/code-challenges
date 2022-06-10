# Benford's Law

Benford's Law is an observation that, given any discrete data set, i.e. populations, heights of buildings, costs of bills, etc, when you strip off the first digit of each piece of that data set, you will get a much higher frequency of 1's than you would the other digits 2-9. Benford's Law is often used to detect fraudulent accounting practices, where it is assumed one would falsify numbers by spreading them more uniformly rather than following the natural distribution of Benford's Law.

Given any arbitrary data set, determine if the distribution of 1's outnumbers the other digits 2-9, per Benford's Law. Return true if so, otherwise return false.