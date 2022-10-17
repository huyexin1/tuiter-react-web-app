import PostSummaryList from "./PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col-sm-10 col-md-10 col-xl-10">
                    <div class="position-relative">
                        <input class=" ps-4 form-control rounded-pill" placeholder="  Search Tuiter"/>
                        <i class="fas fa-search position-absolute wd-search-tuiter text-color-white"></i>
                    </div>
                </div>
                <div class="col-2 col-md-2 col-xl-2">
                    <i class="fa fa-cog icon-size" aria-hidden="true"></i>
                </div>
            </div>
           
           <ul class="nav mb-2 nav-tabs">
                     <li class="nav-item">
                    <a class="nav-link active" href="#">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" tabindex="-1">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" tabindex="-1">Entertainment</a>
                </li>
           </ul>
           <div class="position-relative">
                <img src="../explore/starship.jpg" width="100%"/>
                <h2 class="position-absolute bottom-0 left-0 text-white">SpaceX's Starship</h2>
            </div>
           ${PostSummaryList()}
          
    `);
}
export default ExploreComponent;
