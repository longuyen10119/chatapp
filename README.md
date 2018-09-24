#                                    CHAT APP ASSIGNMENT


## 1. LAYOUT OF GIT REPOSITORY 
#### *Describe the layout of your git repository and the approach you took for version control.*
There are only two folders in the repository. 
The Angular - Client side is in chatapp folder.
The NodeJS server side is in the folder side.

## 2. DATA STRUCTURE
#### *Describe the main data structures used in the program. For example, how the users and groups are represented.*
We are using MongoDB, connecting on port 27017. The database name is 'assignment2' and it has following collections:
* users: id, name, and type
* groups: id, name, and list of user ids
* channels: name, groupid, and list of user ids
* chats: channel, username, message - storing chat history

## 3. REST API
#### *The Angular front end should communicate with the Node.js server using a REST API. Describe each route provided, parameters, return values, and what it does.*
* Users - Routes for user service
  * get /api/users - get list of users
  * post /api/user/ - create new users
  * put /api/user/ - update a user
  * delete /api/user - delete a user
* Groups - Routes for group service
  * get /api/groups -  get list of groups
  * post /api/group - add a new group
  * put /api/group - update a group
  * delete /api/group/:name - delete a group
* Channels - Routes for channels service
  * get /api/channels/:groupname - get channels in this current group
  * post /api/channel - create a new channel
  * put /api/channel - update a channel
  * delete /api/channel - delete a channel
## 4. ANGULAR ARCHITECTURE
#### *Describe your Angular architecture in terms of components, services, and models.*
* App Component
  * Main Component of the app that imports boostrapCDN, JQuery, and CSS styling. 
  * Main Navigation bar
* User Component and Service 
  * User Interface to display, create, or delete users
* Group Component and Service 
  * Group Interface to display, create, or delete groups
  * Adding, and deleting users in a group
* Channel Component and Service 
  * Channel Interface to display, create, or delete channels
  * Adding, and deleting users in a channel
* Chatroom
  * Where users send and receive messages
  * Able to upload profile picture

