 var createHtml ='';

content.forEach((video)=>{
    createHtml = createHtml+`
    <div class="video-preview">
    <div class="thumbnail-row">
    <a href=${video.videoLink}">
        <img class="thumbnail-1"src="${video.thumbnail}">
        </a>
        
        <div class="video-time">${video.videoTime}</div>
        <div id="watchlater"class="watch-later"><svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 24 24" width="25" focusable="false" style="pointer-events: none; width: 25; height:25; fill:white; background-color:rgb(0, 0, 0); border-radius:4px; border:2px solid rgb(0, 0, 0);"><path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path></svg></div>
        <div id="addto" class="add-to"><svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 24 24" width="25" focusable="false" style="pointer-events: none; width: 25; height: 25; fill:white; background-color:black; border-radius:4px;border:2px solid rgb(0, 0, 0)"><path d="M21 16h-7v-1h7v1zm0-5H9v1h12v-1zm0-4H3v1h18V7zm-11 8-7-4v8l7-4z"></path></svg></div>
        <div id="watchlatertext"class="watch-later-text">Watch Later</div>
        <div id="addtotext"class="add-to-text">Add to Queue</div>
    </div>
    <div class="video-info-grid">

    <div class="channel-picture">
       
       <img class="profile-picture" title="${video.channelName}" src="${video.channelPicture}">
       </a>
    </div>
    
    <div class="video-info">
         <div class="tooltip-channel js-tooltip">${video.channelName}</div>
        <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.0//EN'  'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'><svg class="new-icon" enable-background="new 0 0 24 24" id="Layer_1" version="1.0" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
        <p title="${video.videoTitle}" class="video-title">
            ${video.videoTitle}
        </p>
        <p class="video-author">
            ${video.channelName}
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; width: 14; height: 14; fill:gray;"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path></svg>
        </p>
        <p class="video-views">
        ${video.videoViews} views &#183; ${video.videoYears}
        </p>
    </div>
    </div>
</div>`;})

document.querySelector('.video-gird').innerHTML = createHtml;

let shortsContent ='';
 var shorts1 = shorts.slice(0,8);

shorts1.forEach((shortsVideo)=>{
    shortsContent = shortsContent+ `<div class="shorts-video js-shorts-video">
    <div class="shorts-img">
    <a href=${shortsVideo.shortsLink}>
        <img class="shorts-1" src="${shortsVideo.shortsImage}">
        </a>
    </div>
    <div class="shorts-text-bottom">
        <p class="shorts-title">${shortsVideo.shortsName}</p><br>
        <p class="shorts-view">${shortsVideo.shortsViews} views</p>
    </div>
  </div> `
});
document.querySelector('.js-shorts-video-div').innerHTML = shortsContent;


var createHtml1='';
content1.forEach((videos)=>{
    createHtml1 = createHtml1+`
    <div class="video-preview">
    <div class="thumbnail-row">
    <a href=${videos.videoLink}>
        <img class="thumbnail-1"src="${videos.thumbnail}">
        </a>
        
        <div class="video-time">${videos.videoTime}</div>
        <div id="watchlater"class="watch-later"><svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 24 24" width="25" focusable="false" style="pointer-events: none; width: 25; height:25; fill:white; background-color:rgb(0, 0, 0); border-radius:4px; border:2px solid rgb(0, 0, 0);"><path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path></svg></div>
        <div id="addto" class="add-to"><svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 24 24" width="25" focusable="false" style="pointer-events: none; width: 25; height: 25; fill:white; background-color:black; border-radius:4px;border:2px solid rgb(0, 0, 0)"><path d="M21 16h-7v-1h7v1zm0-5H9v1h12v-1zm0-4H3v1h18V7zm-11 8-7-4v8l7-4z"></path></svg></div>
        <div id="watchlatertext"class="watch-later-text">Watch Later</div>
        <div id="addtotext"class="add-to-text">Add to Queue</div>
    </div>
    <div class="video-info-grid">

    <div class="channel-picture">
       
       <img class="profile-picture" title="${videos.channelName}" src="${videos.channelPicture}">
       </a>
    </div>
    
    <div class="video-info">
         <div class="tooltip-channel js-tooltip">${videos.channelName}</div>
        <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.0//EN'  'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'><svg class="new-icon" enable-background="new 0 0 24 24" id="Layer_1" version="1.0" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
        <p title="${videos.videoTitle}" class="video-title">
            ${videos.videoTitle}
        </p>
        <p class="video-author">
            ${videos.channelName}
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; width: 14; height: 14; fill:gray;"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path></svg>
        </p>
        <p class="video-views">
        ${videos.videoViews} views &#183; ${videos.videoYears}
        </p>
    </div>
    </div>
</div>`;})
document.querySelector('.video-gird1').innerHTML = createHtml1;


document.addEventListener('DOMContentLoaded', function () {
    // Get references to the elements
    var mainShortsDiv = document.querySelector('.js-main-shorts');
    var lastDiv = document.querySelector('.js-last');

    // Add click event listener to the js-last div
    lastDiv.addEventListener('click', function () {
        // Remove the main-shorts div
        mainShortsDiv.remove();
    });
});
// document.querySelector('.js-menu')
// addEventListener('click',toggleWrap())

// function toggleWrap() {
//     var sidebar = document.getElementById('sidebar');
//     var currentWrap = sidebar.style.flexWrap || getComputedStyle(sidebar).flexWrap;

//     sidebar.style.flexWrap = (currentWrap === 'wrap') ? 'nowrap' : 'wrap';
// }

// document.addEventListener('DOMContentLoaded', function () {
//     const menuButton = document.querySelector('.js-menu');
//     const sidebar = document.querySelector('.sidebar');

//     menuButton.addEventListener('click', function () {
//         sidebar.classList.toggle('sidebar-hidden');
//     });
// });
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.js-menu');
    const sidebar = document.querySelector('.js-sidebar');

    menuButton.addEventListener('click', function () {
        sidebar.classList.toggle('sidebar-collapsed');
        sidebar.classList.toggle('sidebar-expanded');
        sidebar.classList.toggle('sidebar-hidden');
    });
});

// menuButton.addEventListener('click',function hidden(){
//     sidebar.remove();
// })