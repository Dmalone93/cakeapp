The Challenge
To build a simple CRUD web application which can run on mobile or desktop browsers and a backend to accompany it.
This challenge is an opportunity to demonstrate how you would do this given a few loose constraints both around the source of data and the tooling to make this happen.
Due to the many frameworks, libraries and tooling options in the wild, there is no hard and fast rule as to what you can cobble together - the overall objective of this exercise is to establish some subject matter, a context to discuss some technical aspects around the choices and approaches taken!
Here we go...
Ok, as mentioned above there are no hard and fast rules, however the general format of what we’re looking for covers the various facets encountered when developing web apps in general. These broadly cover:
● Source control (git, svn etc)
● Build and package tooling (grunt, gulp, package management etc)
● Framework choices (none [vanilla js]? angularjs? reactjs? ember?)
● Deployment (hybrid/native using cordova or a progressive web app etc)
● Knowledge of an agile/iterative process.
Technologies today, can enable simple scaffolding of applications in a few hours - usually forming seed projects to further enable quick start of other applications, taking these broad areas above can you come you come up with a simple app scaffold/seed that can demonstrate use across these facets?
 The app
It’s all about cakes! create a very simple app that can allow a user to and a view and add to a list of favorite cakes.
If we were to put these into a simple agile format, then the stories would look like:
S1​ - As a cake lover, I can view all cakes that have been submitted so I can drool at their awe- some tastiness.
Acceptance Criteria
● A simple list showing the image and name of the cake and nothing else
S2​ - As a cake lover, I can submit cakes that I like so everyone can drool at my tasty suggestions.
Acceptance Criteria
● I should be able add a cake from the list of all cakes view
● I should be taken to a view where I am able to specify the name a comment and
a yum factor between 1 and 5.
● I should be returned back to the list of cakes after submitting.
S3​ - As a cake lover I can view details about a single cake so that I can see the comment made against it.
Acceptance Criteria
● I can select/click or tap any cake in the list and be taken to a view where I can see the comment/review made.
● I should be able to close or navigate back to the list of cakes once I’ve read the cake details.

Technical aspects / constraints and goals
An API endpoint to manage the cakes is available here:
http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api
Which exposes the following operations:
● GET /cakes
● GET /cakes/{id}
● POST /cakes
● PUT /cakes/{id}
● DELETE /cakes/{id}
A cake payload is in the form of: {
id: <number>,
name: <string>, comment: <string>, imageUrl: <string>, yumFactor: <number>
}
Guidance
● The app must be maintained within a source controlled repo
● The app must be built using a task runner of sorts, whatever you’re comfortable
with here whether it’s grunt, gulp or even shell scripts!
● Demonstrate use of packages using your chosen package manager. E.g
○ Grunt ○ Gulp
○ NPM via browserify/systemjs
● Any framework can be used on front / back
● Styling is not important
● The imageUrl can just be a plain text field (no image picking is required)
● Front end can be either a ‘hybrid’ app using cordova or a progressive web app
running in a desktop or mobile browser
