const PostSummaryListItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <img class="rounded-circle" src="${post.avatarIcon}" height="60px" width="60px" />
                </div>
                
                <div class="col-10">
                <div class="fw-bolder">${post.userName} - ${post.time}</div>
                <div>${post.title}</div> 
                <div><img  src="${post.image}" width="100%" /></div>
                <div>${post.title}</div>
                <div class="text-secondary">${post.secondary}</div>
                <div class="row">
                    <div class="col-3"><i class="far fa-comment-dots"></i>${post.reply}</div>
                    <div class="col-3"><i class="fas fa-retweet"></i>${post.share}</div>
                    <div class="col-3"><i class="far fa-heart"></i>${post.like}</div>
                    <div class="col-3"><i class="far fa-share-alt"></i></div>
                </div>
            </div>
                   
        </li> 
    `);
}
export default PostSummaryListItem;