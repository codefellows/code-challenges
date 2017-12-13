# Job Scraper

Create a new repository on your file system called `job-scraper`. 

Write a real script that really works that'll scrape the first 10 pages of StackOverflow.com/jobs. Here's what information you'll be looking for:

For any job posting that is tagged with `<language of your choice>`, save in a row in a CSV file:

- The job title
- The company name 
- The location
- The date posted (in whatever date format makes the most sense to you)
- The link to the actual job posting

You may save other info as well if you see fit. You must have at least those five. 

The CSV file should be saved in a directory called `results` with the name of the CSV file including today's date and any other information you would find useful in a filename. The file format should be `.csv`

I should be able to run the script from the command line by typing...

```
$ python scraper.py
```

or whatever the corresponding command is for your language of choice. When it's running, it should tell me when it moves to a new page of results, as well as how many job postings it saved when it finishes. Make your messages informative and user friendly. 

You may use whatever packages you see fit to do this, though you may want to at least start with something that can send requests and something that can parse HTML responses. 

Push your code to GitHub. Gitignore the contents of the `results` directory but NOT the directory itself, as well as any environment you may have constructed.