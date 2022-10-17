import PostSummaryListItem from "../PostSummaryList/PostSummaryItem.js";
import posts from "../PostSummaryList/posts.js"

const PostSummaryList = () => {
    return (`
           <ul class="list-group">
           ${
        posts.map(post => {
            return(PostSummaryListItem(post));
        }).join('')
    }
         </ul>
`);
}

export default PostSummaryList;