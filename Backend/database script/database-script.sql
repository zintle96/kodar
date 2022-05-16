--CREATE USER TABLE
CREATE TABLE IF NOT EXISTS users (
	user_id SERIAL PRIMARY KEY,
	phone_number INTEGER NOT NULL,
	password VARCHAR(255) NOT NULL,
	enrolled_courses VARCHAR[]
);

-- CREATE TABLE FOR COURSES
CREATE TABLE IF NOT EXISTS course (
	course_id SERIAL PRIMARY KEY,
	course_name VARCHAR(255) UNIQUE NOT NULL,
	course_logo BYTEA
);

-- INSERT STAEMENTS
INSERT INTO course (course_name)
VALUES ('HTML'), ('CSS');

-- CREATE TABLE FOR OVERVIEW PAGE
CREATE TABLE IF NOT EXISTS overview (
	overview_id SERIAL PRIMARY KEY,
	course_id INT,
	overview_desc TEXT NOT NULL,
	overview_about TEXT NOT NULL,
	overview_prereq TEXT,
	overview_picture BYTEA,
	FOREIGN KEY (course_id) REFERENCES course(course_id)
);


-- INSERT OVERVIEW FOR ALL COURSES
INSERT INTO overview (course_id, overview_desc, overview_about)
VALUES (
	1, 
	'The abbreviation for HTML is HyperText Markup Language. It provides the structure of the web page and consists of different elements. HTML tells the browser how to display content An example of these elements contain contents such as “Hello World!”, “This is a heading”, “This is a paragraph”.', 
	'You will learn all the common HTML tags used to structure HTML pages, the skeleton of all websites. You will also be able to create HTML tables to present tabular data efficiently.'
);

INSERT INTO overview (course_id, overview_desc, overview_about, overview_prereq)
VALUES (
	2,
	'Without CSS, every web page would be drab plain text and images that flowed straight down the page. With CSS, you can add color and background images and change the layout of your page — your web pages can feel like works of art!',
	'You will learn many aspects of styling web pages! You’ll be able to set up the correct file structure, edit text and colors, and create attractive layouts. With these skills, you’ll be able to customize the appearance of your web pages to suit your every need!',
	'We recommend that you complete Learn HTML before learning CSS.'
);

-- CREATE TABLE FOR TOPICS
CREATE TABLE IF NOT EXISTS topic (
	topic_id SERIAL NOT NULL,
	course_id int,
	topic_name VARCHAR(255) NOT NULL,
	topic_desc VARCHAR(255) NOT NULL,
	PRIMARY KEY (topic_id),
	FOREIGN KEY (course_id) REFERENCES course(course_id)
);

-- INSERT TOPICS FOR HTML
INSERT INTO topic (course_id, topic_name, topic_desc)
VALUES (
	1, 'Elements and Structure', 'Learn about HTML elements and structure, the building blocks of websites.'
),
(
	1, 'Attributes', 'HTML attributes provide additional information about HTML elements.'
),
(
	1, 'Tables', 'HTML tables allow web developers to arrange data into rows and columns.'
),
(
	1, 'Forms', 'An HTML form is used to collect user input. The user input is most often sent to a server for processing.'
),
(
	1, 'Sematic HTML', 'Write clearer, more accessible HTML using Semantic HTML tags'
);

-- INSERT TOPICS FOR CSS
INSERT INTO topic (course_id, topic_name, topic_desc)
VALUES (
	2, 'Syntax and Selectors', 'Learn how to add styles websites with CSS and how to use selectors to apply styles to specific elements.'
),
(
	2, 'Visual Rules', 'In this course, you will learn how to style individual and groups of elements using various visual CSS rules.'
),
(
	2, 'The Box Model', 'In this course, you will learn how to use the Box Model to position HTML elements on your web page.'
),
(
	2, 'Display and Positioning', 'In this course, you will learn CSS rules for displaying and positioning elements on your web page.'
),
(
	2, 'Colors', 'In this course, you will learn all about choosing and setting CSS colors using a variety of techniques.'
),
(
	2, 'Typography', 'Learn all about CSS typography, such as how to include fonts from other sources and how to style your text.'
),
(
	2, 'Build a responsive page with HTML & CSS', 'This unit will teach you how to make websites that are usable via different device sizes and screen readers.'
);


-- CREATE TABLE FOR LESSONS
CREATE TABLE IF NOT EXISTS lesson (
	lesson_id SERIAL PRIMARY KEY,
	topic_id INTEGER,
	lesson_name VARCHAR(255) NOT NULL,
	lesson_content VARCHAR[],
	lesson_examples VARCHAR[],
	more_info TEXT,
	FOREIGN KEY (topic_id) REFERENCES topic (topic_id)
);

-- INSERT LESSONS FOR HTML
INSERT INTO lesson (topic_id, lesson_name, lesson_content, lesson_examples, more_info)
VALUES (
	1, 
	'HTML Document', 
	ARRAY['So what exactly is HTML? HTML provides structure to the content appearing on a website, such as images, text, or videos. Right-click on any page on the internet, choose “Inspect,” and you’ll see HTML in a panel of your screen.', 'HTML stands for HyperText Markup Language:'],
	ARRAY['A markup language is a computer language that defines the structure and presentation of raw text.', 'HyperText is text displayed on a computer or device that provides access to other text through links, also known as hyperlinks. You probably clicked on a couple of hyperlinks on your way to this Codecademy course.'],
	'Learning HTML is the first step in creating websites, but even a bit of knowledge can help you inject code snippets into newsletter, blog or website templates. As you continue learning, you can layer HTML with CSS and JavaScript to create visually compelling and dynamic websites. But for now, we’re going to focus on how to add and modify basic content on a page, like text, images, and videos. Don’t worry if the websites look ugly — we’re just getting started.'
),
(
	1,
	'Html Elements',
	ARRAY['An HTML element is defined by a start tag, some content, and an end tag.', 'The HTML element is everything from the start tag to the end tag:'],
	ARRAY['<h1>My First Heading</h1>', '<p>My first paragraph.</p>', '<!DOCTYPE html> <html> <body> <h1>My First Heading</h1> <p>My first paragraph.</p> </body> </html>'],
	'HTML elements can be nested (this means that elements can contain other elements). All HTML documents consist of nested HTML elements. The <html> element is the root element and it defines the whole HTML document. It has a start tag <html> and an end tag </html>. Then, inside the <html> element there is a <body> element: The <body> element defines the documents body. It has a start tag <body> and an end tag </body>. Then, inside the <body> element there are two other elements: <h1> and <p>. The <h1> element defines a heading, it has a start tag <h1> and an end tag </h1>. The <p> element defines a paragraph, it has a start tag <p> and an end tag </p>.'
),
(
	2,
	'HTML Attributes',
	ARRAY['HTML attributes provide additional information about HTML elements.', 'The <a> tag defines a hyperlink. The href attribute specifies the URL of the page the link goes to:'],
	ARRAY['<a href="https://www.koder.com">Visit koder website</a>', 'The <img> tag is used to embed an image in an HTML page. The src attribute specifies the path to the image to be displayed:', '<img src="img_girl.jpg">'],
	'All HTML elements can have attributes. The href attribute of <a> specifies the URL of the page the link goes to. The src attribute of <img> specifies the path to the image to be displayed. The width and height attributes of <img> provide size information for images'
);

-- INSERT LESSONS FOR CSS
INSERT INTO lesson (topic_id, lesson_name, lesson_content, lesson_examples, more_info)
VALUES (
	6,
	'Intro to CSS',
	ARRAY['While HTML is the fundamental structure of every web page, it can be visually unappealing on its own. Cascading Style Sheets or CSS is a language web developers use to style the HTML content on a web page. If you’re interested in modifying colors, font types, font sizes, images, element positioning, and more, CSS is the tool for the job!'],
	ARRAY[''],
	'In this lesson, you’ll learn how to set up your CSS file structure and select which HTML elements you wish to style.'
),
(
	6,
	'CSS Selectors',
	ARRAY['CSS selectors are used to "find" (or select) the HTML elements you want to style. We can divide CSS selectors into five categories:', 'Simple selectors (select elements based on name, id, class) Attribute selectors (select elements based on an attribute or attribute value)'],
	ARRAY['Here, all <p> elements on the page will be center-aligned, with a red text color: p { text-align: center; color: red; }', 'The CSS rule below will be applied to the HTML element with id="para1": #para1 { text-align: center;  color: red; }'],
	'The id CSS selector uses the id attribute of an HTML element to select a specific element. The id of an element is unique within a page, so the id selector is used to select one unique element! To select an element with a specific id, write a hash (#) character, followed by the id of the element.'
),
(
	8,
	'Setup and Syntax',
	ARRAY['When a browser reads a style sheet, it will format the HTML document according to the information in the style sheet.', 'There are three ways of inserting a style sheet: External CSS, Internal CSS, Inline CSS'],
	ARRAY['With an external style sheet, you can change the look of an entire website by changing just one file! Each HTML page must include a reference to the external style sheet file inside the <link> element, inside the head section.', '<link rel="stylesheet" href="mystyle.css">'],
	'An internal style sheet may be used if one single HTML page has a unique style. The internal style is defined inside the <style> element, inside the head section. An inline style may be used to apply a unique style for a single element. To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property.'
);