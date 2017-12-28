# Website Assignment 


**The website is themed on an e-commerce site selling Jewellery.**

The requirement was to create the website that I have designed as part of the CTEC3905 Front End Web Development module. The website contains four pages: Index page, Collection page, About Us page and Contact page.  

### CSS
Animation and transitions were used on the website to achieve some effects on the pages. These were mainly on the product carousel and navigation areas to give the links and buttons a hover effect. A separate carousel style sheet file was created because it is only used on the homepage and in this way helps to reduce unnecessary style being downloaded where they are not required.
The CSS style uses media queries breakpoints to layout the elements for the mobile and desktop versions. 

### Javascript
In the website, JavaScript was used to validate the user input on the contact form. If the user does not write anything in the text boxes, a message is displayed to the user to fill the text field. This was repeated for all the fields on the contact form. Javascript has also been used on the navigation to register events and the product carousel to move the product slider.  
The Google map API was used on the contact page to display the location. The map has been customised to show a location marker and provide the company name using the API.

## 4 Basic design principles (PARC)
**1. Proximity** 

Grouping related products to for a group. On the website, related or similar products are places close to each other on the collection page where image and product details are grouped. The users can view the details and price together and make their selection.

**2. Alignment**

 Elements have been aligned on every page of the website to create an appealing layout. Alignment is important to get a consistent feel for both the Mobile and Desktop versions so that the information on the page is structured in a clear way. It makes it easier for the users to view the pages.

**3. Repetition**

 The design theme has been repeated on the pages to create a consistent look. The same size of fonts for the body and titles have been used to make the sections look similar and for the customers to read the content of the pages easily.The images have a similar background style to make the pages consistent across the site.

**4. Contrast**

 The layout of the website is simple so that the information is presented in a clear way. The main body of the website is presented in a contrasting colour to make it look visually pleasing. The navigation links as use a contrasting colour on hover to highlight possible selections on the links to go to different pages. 

## Information Architecture
**1. Potential Users**

 People who want to buy jewellery. They can be viewing the website nationally or internationally. 

**2. Content**

 Simple navigation is used to navigate between pages for the audience. For the mobile version, a hamburger drop-down list menu used to navigate pages.

**3. Context**

 The purpose of the jewellery website is to sell products online and target online customers. The website is meant to be used by people irrespective of their gender, ethnicity or computer experience. The Jewelry Empire's aim is to get as many customers as possible and make maximum profits from sales. 

## Validation of the website
**1. HTML**
All website pages have been validated using the W3C HTML validator which validated successfully without any errors or warnings.
https://validator.w3.org/nu/?doc=https://bkavia.github.io/website_assignment/index.html

**2. CSS**
The CSS styles of the website have been validated and no errors were found. These can be seen by following the URL below
https://jigsaw.w3.org/css-validator/validator?uri=https://bkavia.github.io/website_assignment/index.html


**3. Accessibility** 
The website was checked using the accessibility checker to ensure that it does not have errors. As per the suggestion, all errors have been corrected.

## SiteMap
An XML sitemap for the website has been generated so that search engines can be directed to the main contents of the website. The file is placed under the root directory and is called sitemap.xml

## Hand drawn Wireframes
**Mobile first Wireframes**
![mobile-home-collections-wireframe](wireframes/mobile-home-collections.jpg "mobile-home-collections")
![mobile-aboutUs-contact-wireframe](wireframes/mobile-aboutUs-contact.jpg "mobile-aboutUs-contact")

**Desktop Wireframes**
![desktop-home-wireframe](wireframes/desktop-home.jpg "desktop-home")
![desktop-collections-wireframe](wireframes/desktop-collections.jpg "desktop-collections")
![Desktop-aboutus-wireframe](wireframes/desktop-aboutus.jpg "Desktop-aboutus")
![desktop-contact-wireframe](wireframes/desktop-contact.jpg "desktop-contact")


## Experimental code/Problems
Codepen was used for experimental purposes for the website. The product carousel needed some research on how to implement it. The idea of the carousel came after looking at the Sainsbury's website which displays different categories products. Experiment code was written on codepen to get an idea how it will work for the website. The experimental version can be seen by following the link https://codepen.io/anon/pen/MrbMNx?editors=1111. 
There was an initial problem with the wrapping of the div which caused multiple lines on the slider to appear. This was first fixed by making the width really long but it did not work well when many products were added. This issue was fixed using the flexbox display and setting the div style not to wrap.


## References

- W3 School website was used to reference HTML, CSS, JavaScript, Transitions, and Animations. For more information visit,    https://www.w3schools.com/html/
-  Hamburger and cart images downloaded from https://www.iconsdb.com
- Home page image slider. https://codepen.io/dudleystorey/pen/ehKpi
