import PostSummaryListItem from "../HomeScreen/PostSummaryListItem.js";
import posts from "../HomeScreen/PostItems.js"

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