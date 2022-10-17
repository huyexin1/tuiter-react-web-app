const tuits = [
    {
        title:'Web Development',
        topic:'React Js',
        tuit:'React.js is a single page application framework.'
    }
]

function mainContent(){
    return(`
                <div class="row">
                <div class="col-sm-10 col-md-10 col-xl-10" >
                    <div class="position-relative">
                        <input class=" ps-4 form-control rounded-pill" placeholder="  Search Tuiter"/>
                        <i class="fas fa-search position-absolute wd-search-tuiter"></i>
                    </div>
                </div>
                <div class="col-2 col-md-2 col-xl-2">
                    <i class="fa fa-cog icon-size" aria-hidden="true"></i>
                </div>
            </div>

            <ul class="nav nav-tabs mt-2 mb-2">
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
                <img src="starship.jpg" width="100%"/>
                <h2 class="position-absolute bottom-0 left-0 text-white">SpaceX's Starship</h2>
            </div>

            <ul class="list-group">
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-8">
                            <div class="text-secondary">Web Development</div>
                            <div class="fw-bolder">ReactJS-2h</div>
                            <div>React.js is a single page application framework.</div>
                        </div>

                        <div class="col-4">
                            <img class="float-end rounded-corners-all-around" src="react.jpg" height="100px"/>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-8">
                            <div class="fw-bolder">JavaScript-2h</div>
                            <div>JavaScript is a programming language that can run on browser as well as desktop.</div>
                            <div class="text-secondary">123K Tweets</div>
                        </div>

                        <div class="col-4">
                            <img class="float-end rounded-corners-all-around" src="JavaScript.jpg" height="100px"/>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-8">
                            <div class="text-secondary">Web Development</div>
                            <div class="fw-bolder">jQuery</div>
                            <div class="text-secondary">123K Tweets</div>
                        </div>

                        <div class="col-4">
                            <img class="float-end rounded-corners-all-around" src="jQuery.jpg" height="100px"/>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-8">
                            <div class="text-secondary">Web Development</div>
                            <div class="fw-bolder">NodeJs</div>
                            <div class="text-secondary">123K Tweets</div>
                        </div>

                        <div class="col-4">
                            <img class="float-end rounded-corners-all-around" src="NodeJs.jpg" height="100px"/>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <div class="d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-4">
            <div class="list-group">
                <div class="list-group-item list-group-item-action" tabindex="-1" aria-disabled="true">
                    Who to Follow
                </div>
                <div class="list-group-item list-group-item-action" tabindex="-1" aria-disabled="true">
                    <div class="row">
                        <div class="col-2">
                            <img class="icon-image" src="java.jpg" height="100px"/>
                        </div>
                        <div class="col-6">
                            <div class="fw-bolder">Java</div>
                            <div class="text-secondary">@Java</div>
                        </div>
                        <div class="col-4">
                            <button class="btn btn-primary w-100 mt-2 rounded-pill">
                                Follow
                            </button>
                        </div>
                    </div>
                </div>

                <div class="list-group-item list-group-item-action" tabindex="-1" aria-disabled="true">
                    <div class="row">
                        <div class="col-2">
                            <img class="rounded-circle icon-image"
                                 src="relativityspace.jpg"
                                 data-holder-rendered="true">
                        </div>
                        <div class="col-6">
                            <div class="fw-bolder">Relativity Space</div>
                            <div class="text-secondary">@JRelativityspace</div>
                        </div>
                        <div class="col-4">
                            <button class="btn btn-primary w-100 mt-2 rounded-pill">
                                Follow
                            </button>
                        </div>
                    </div>
                </div>

                <div class="list-group-item list-group-item-action" tabindex="-1" aria-disabled="true">
                    <div class="row">
                        <div class="col-2">
                            <img class="rounded-circle icon-image"
                                 src="virgin.jpg"
                                 data-holder-rendered="true">
                        </div>
                        <div class="col-6">
                            <div class="fw-bolder">Virgin Galactic</div>
                            <div class="text-secondary">@virgingalactic</div>
                        </div>
                        <div class="col-4">
                            <button class="btn btn-primary w-100 mt-2 rounded-pill">
                                Follow
                            </button>
                        </div>
                    </div>
                </div>

                <div class="list-group-item list-group-item-action" tabindex="-1" aria-disabled="true">
                    <div class="row">
                        <div class="col-2">
                            <img class="rounded-circle icon-image"
                                 src="nasa.jpg"
                                 data-holder-rendered="true">
                        </div>
                        <div class="col-6">
                            <div class="fw-bolder">NASA</div>
                            <div class="text-secondary">@nasa</div>
                        </div>
                        <div class="col-4">
                            <button class="btn btn-primary w-100 mt-2 rounded-pill">
                                Follow
                            </button>
                        </div>
                    </div>
                </div>

                <div class="list-group-item list-group-item-action" tabindex="-1" aria-disabled="true">
                    <div class="row">
                        <div class="col-2">
                            <img class="rounded-circle icon-image"
                                 src="tesla.jpg"
                                 data-holder-rendered="true">
                        </div>
                        <div class="col-6">
                            <div class="fw-bolder">Tesla</div>
                            <div class="text-secondary">@tesla</div>
                        </div>
                        <div class="col-4">
                            <button class="btn btn-primary w-100 mt-2 rounded-pill">
                                Follow
                            </button>
                        </div>
                    </div>
                </div>

            </div>`)
}