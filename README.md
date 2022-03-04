# GetMySnack
Online food ordering system website created in ReactJS, NodeJS, Express, SQLite.


ToDO: FullStack Application which returns an infinite-scrolling list of trending products to the user. Tags attached to each product:

how many purchases recently
how many minutes ago was the last order for this product.
Given Conditions:

Trending Product: Purchased at least once in last 48 hours.
Current Thought on the Stack to use for development: ReactJS (FrontEnd) NodeJS, ExpressJS(BackEnd) SQLite (Database) Chose this stack because had experience working with all of them in the past projects as you can see on my other repos. Using SQLite because don't want to hold a server running just for the data. With SQLite data can be send with the application itself without any installations. Please be sure to provide an explaination of:

How you solved the problem
The problems faced:

Genrate random timestamp for each of sample record. Took help of SQL feature which provides current date and then assigned values to each record based on the current date fetched.

Fetch records which are in the time span of 48 hours, prioritize by number of purchases and time. First filtered out records which are in past 48 hours time frame. Then grouped the result by item name. Ordered the array using orderby(time and then # purchases)

Manage large amount of records getting fetched. Because of the time crunch haven't looked into managing the big data. Currently used SQLite but if had little more time would have explored hive/apache spark.

Create infinite scroll without lagging or reloading already available data. Used internally available ReactJS component. react-infinite-scroll-component. Its a widely used open source component with more than 50K downloads a week.

adding time and recent purchase tags. Used two binary fields and set their values just before the component displays the record. Could be modified by precalculating the results.

How to setup Backend: Run 'npm install' to install all the dependencies. Run node index.js You will get server running message in the browser. search for '/items' API endpoint to check available results. Frontend: Run 'npm install' to install all the dependencies. Run 'npm start' to start the project. Hit localhost to check the results are getting fetched. Note:

it takes a small amount of time to load the tags as they are getting calculated at very end just before the component loads.Please give a fraction of time to load the tags.

The SQlite database does not require any installation or execution. So no worries on the databse part.

How to run it Already covered in How to setup.

Overall Structure of the Application: Backend: Database.js: manages SQLite3 connection. exports the connection object to be used in index.js Index.js: Entry point for the backend REST API service. Make use of ExpressJS, CORS Policy auth, SQLite3 package. Sends the data on port 3000 on the endpoint '/items'.

Frontend: src: Contains almost all of the code. App.js: Loads when the application executes. Calls Header.js and Items.js. Components: Header.js: Loads the heading of the SPA. Items.js: Contains most of the rendering logic: infinite scrolling, mapping data. Calls Item.js to show each indivisual item. Item.js: Contains the visual part for one item. Make use of the data sent by parent component though props. Images: Contains all the images used thoughout the tool. Could have managed it better in a large application. UI: Logo.js: Loads Logo of 'Snackpass' component. Used in the Header component. 5. Final Output screenshots as following.

Application screenshots:
![154777404-01fa9ff2-120a-4239-bb9f-a05f8ab797bb](https://user-images.githubusercontent.com/14957493/156681565-94c7215f-ac19-44ce-ade7-95c1828d0a1e.png)

