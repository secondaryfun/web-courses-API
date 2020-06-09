# Online Courses API

This API has a list of all courses available on Udemy as of June 1, 2020, with a review score of 4 out of 5 stars or higher.

The courses are sorted by category and subcategory.

## Build Plan

1. Pull Data from Udemy
- setup API connection
- js file to pull multiple times (100 per page max) to pull down the course list
- js file to write output to file
2. Create Schema
- determine best use case
3. Seed Data
4. Define Routes
5. Write Controllers

# API Documentation

## The root path for this version of your API

```
https://rocky-refuge-49252.herokuapp.com
```
## Authentification.

1. No authentification is required.

## Endpoints

* /courses
* /category 

# Category HTTP Methods

* GET /category/  -  Returns a list of all categories and subcategories.
```
    https://rocky-refuge-49252.herokuapp.com/category/
```
* POST /category/  -  Create a new category.
```
    https://rocky-refuge-49252.herokuapp.com/category/
```
1. A body string is required.
```
    {
        "title": "Bob Ross Presents"
        "sub-categories": ["Happy Little Trees", "Clouds"]
    }
```
* GET /category/categoryID  -  Returns the category with _id = categoryID.
```
    https://rocky-refuge-49252.herokuapp.com/category/5ed99a55a6d40c4c57c9db94
```
* PUT /category/categoryID  -  Searches for an existing category and modifies it based on the request body.
```
    https://rocky-refuge-49252.herokuapp.com/category/5ed99a55a6d40c4c57c9db94
```
1. A body string is required with the properties to change and new values.
```
    {
        "title": "Bob Ross Was Here"
    }
```
* DELETE /category/categoryID  -  Searches for an existing category and removes it from the database.
```
    https://rocky-refuge-49252.herokuapp.com/category/5ed99a55a6d40c4c57c9db94
```
* GET /category/title/title  -  Returns the category with title = title.
```
    https://rocky-refuge-49252.herokuapp.com/category/title/Development
```
* GET /category/sub-category/title  -  Returns a list of subcategories from based on the category.
```
    https://rocky-refuge-49252.herokuapp.com/category/title/Development
```

# Course HTTP Methods

* GET /course/  -  Returns a random course.
```
    https://rocky-refuge-49252.herokuapp.com/category/
```
* POST /course/  -  Creates a new course.
```
    https://rocky-refuge-49252.herokuapp.com/courses/
```
1. A body string is required.
```
    {
        "title": "Bob Ross Paints"
    }
```
* GET /courses/courseID  -  Returns the course with _id = courseID.
```
    https://rocky-refuge-49252.herokuapp.com/courses/5ed93a01ee6492311ae49005
```
* PUT /courses/courseID  -  Searches for an existing courses and modifies it based on the request body.
```
    https://rocky-refuge-49252.herokuapp.com/courses/5ed93a01ee6492311ae49005
```
1. A body string is required with the properties to change and new values.
```
    {
        "is_paid": false,
        "price": 0
    }
```
* DELETE /courses/courseID  -  Searches for an existing courses and removes it from the database.
```
    https://rocky-refuge-49252.herokuapp.com/courses/5ed93a01ee6492311ae49005
```
* GET /courses/title/title  -  Returns the courses with title = title.
```
    https://rocky-refuge-49252.herokuapp.com/courses/title/AWS Certified Data Analytics Specialty 2020 (ex Big Data)
```
* GET /courses/sub-category/title  -  Returns a list of courses with primary_subcategory = title.
```
    https://rocky-refuge-49252.herokuapp.com/courses/title/Development
```
