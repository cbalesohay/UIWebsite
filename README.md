# University of Idaho Website for the Center for Intelligent Industrial Robotics (CIIR)

# Project Report

This project was assigned to me to learn, build, and deploy a React website for CIIR. The educational outcomes of this assignment has been the learning and integration of React, Bootstrap, React-icons with a deployment on AWS servers. I wanted to integrate the layout to be able to easily modify contents within the site without disrupting the layout. Titles, photos, labels, positions, descriptions, and names are set to default spinners or placeholders if those sections are not added. This implamentation allows future updaters to spot errors quickly and effectivly.


# Documentation
The location for all of the files to change will be located in the src folder under components an then under lists. src/components/Lists

Add/Sub Projects: To add of subtract projects located on the projects page, under the above file location will be a projects.js folder containing all projects. To add a project you can copy and past the layout containing (id, title, altImage, url, description, buttonText, link) and past it at the end of the array with the updaated information for the project. The photo/s to be used for the project will need to be added to the images folder located at src/images. After you added the project to projects.js, you need to create a new page for the new project. Located under src/pages/IndividualProjects create a new folder as the project name, then create a jsx file and a css file for the respective project. For reference, you can copy the layout of the other individual project pages and then edit the imformation for the new page. You will also need to add the path and element to the main.jsx file. To remove a project, delete from current spot in array in the projects.js file and then delete the associated individual page files for the project.

Add/Sub Staff: To add of subtract staff members, under the above file location will be a people.js folder containing everyone currently on staff. To add someone you can copy and past the layout containing (id, name, title, position, photo, imgAlt, description, emial) and past it at the end of the array with the updated information for the project. The photo/s to be used for the individual will need to be added to the images folder located at src/images. To remove a staff member, delete from current spot in array.

Add/Sub Spotlight Section: The spotlight section photos and lebels are hardcoded into the SpotlighCard.jsx file located in the SpotlightCard folder in the UI sections src/UI/SpotlightCard. The spotlight information can be updated in the same SpotlighCard.jsx file. If the user is adding a new file to the project, they will need to add the photo to the images section located at src/images. 