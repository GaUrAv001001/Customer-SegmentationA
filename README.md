# Customer-SegmentationA

# Web scraper
# In the web scraper you need to make sure that the URL of the website is correct.
# At the end of the URL there is the page no. which needs to be replaced with the variable whose value changes based on the range of the loop
# url = "https://www.flipkart.com/samsung-galaxy-f04-opal-green-64-gb/product-reviews/itmd0c05f8b03876?pid=MOBGKY2V7QZ2QVFS&lid=LSTMOBGKY2V7QZ2QVFSGOGYVU&marketplace=FLIPKART&page="+str(i)

# The extracted data is the csv format. The extracted fields are not enough so you need to combine the data with the data from the kaggle.com. The fileds w considered for segmentation are review and price.

# Note: The web Scrapr will not work if the HTML of the website is changed you need to write another logic for that.


# K-means clustering 
# After the data is processed feed that dataset to the K-means algorithm.
# After performing segmentation It will add Target column to the end of the dataset. Which shows what cluster that perticualr row belongs to.

# Python script 
# Python script is used to store the data into the mysql.
# you need to specify the password, local host and the database name in the engine variable
# engine = create_engine('mysql+pymysql://root:xyz@localhost:3306/customer?charset=utf8mb4')
# Here the password is xyz and the localhost is 3306 and the databse is customer.
# path = r'C:\Users\Admin\OneDrive\Documents\Major_project\Final_project\data'
# you need to give the path of the folder to the path variable in the data to be stored is present.

# Website
# In order to fetch that data using website you need to install the dependences for react js, node js and express js.
# setup the database which is mysql.
# An all set.

