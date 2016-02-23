## README

node.js playlist module using YouTube Search API

### How to Run:
1. Clone the repository.
2. Inside the local repo, edit the ```key.json``` file to include your personal Google Developer Key
3. Run ```npm install``` to add relevant node modules
4. Run ```npm start``` to start the server
5. Direct your browser to ```http://localhost:3000/```


### Writeup / Notes: 
This module uses the YouTube Search API to construct a playlist for the currently selected artist. 

The playlist videos are presented in tile format for easier browsing. Each thumbnail also links to the original YouTube video. In future iterations, it may be helpful to include a mouseover info box containing details such as title and video stats to further help the user select videos of interest. 
