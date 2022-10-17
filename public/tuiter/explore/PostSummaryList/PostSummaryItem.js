const PostSummaryItem = (post) => {
    return(`<li class="list-group-item">
                    <div class="row">
                        <div class="col-8">
                            <div class="text-secondary">${post.topic}</div>
                            <div class="fw-bolder">${post.userName} - ${post.time}</div>
                            <div>${post.title}</div>
                        </div>

                        <div class="col-4">
                            <img class="float-end rounded-corners-all-around" src="${post.image}" height="100px"/>
                        </div>
                    </div>
                </li> `);
}
export default PostSummaryItem;