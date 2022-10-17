const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i>
     </a>
     
     <a class="list-group-item list-group-item-action">
     <i class="fa fa-home " aria-hidden="true"></i>
     <div class="d-none d-xl-block d-xxl-block float-md-end">Home</div>
     </a>
     
     <a class="list-group-item list-group-item-action">
     <i class="fa fa-hashtag " aria-hidden="true"></i>
     <div class="d-none d-xl-block d-xxl-block float-md-end">Explore</div>
     </a>
     
     <a class="list-group-item list-group-item-action">
     <i class="fa fa-solid fa-bell" aria-hidden="true"></i>
     <div class="d-none d-xl-block d-xxl-block float-md-end">Notification</div>
     </a>
     
     <a class="list-group-item list-group-item-action">
     <i class="fa fa-solid fa-envelope" aria-hidden="true"></i>
     <div class="d-none d-xl-block d-xxl-block float-md-end">Message</div>
     </a>
     
     <a class="list-group-item list-group-item-action">
     <i class="fa fa-solid fa-bookmark" aria-hidden="true"></i>
     <div class="d-none d-xl-block d-xxl-block float-md-end">Bookmarks</div>
     </a>
     
     <a class="list-group-item list-group-item-action">
     <i class="fas fa-list" aria-hidden="true"></i>
     <div class="d-none d-xl-block d-xxl-block float-md-end">Lists</div>
     </a>
     
     <a class="list-group-item list-group-item-action">
     <i class="fas fa-user"></i>
     <div class="d-none d-xl-block d-xxl-block float-md-end">Profile</div>
     </a>
     
     <a class="list-group-item list-group-item-action">
     <i class="fal fa-info"></i>
     <div class="d-none d-xl-block d-xxl-block float-md-end">More</div>
     </a>
     
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}

export default NavigationSidebar;