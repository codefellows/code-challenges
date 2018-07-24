# URL Shortener Malfunction Fix

SuperDuperLittleBittyUrl is a company that specializes in URL shortening. 

They recently encountered a major bug where the backslash ( `/` ) characters in their original URLs were being decoded improperly to percent signs ( `%` ). 

For example, a shortened URL of `http://ittybitty32.io` would point to a malformed URL such as `http:%%www.codefellows.org%how-to-apply%`.

Your job is to grab the shortened URLs, find the original URL they refer to, and replace all those `%` signs with `/`. 

Remember you will have to update the database these URLs are stored in so that `http://ittybitty32.io` will now correctly point to `https://www.codefellows.org/how-to-apply/`.
