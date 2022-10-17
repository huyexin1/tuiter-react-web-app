import PostSummaryListItem from "../HomeScreen/PostSummaryListItem.js";
import PostItems from "../HomeScreen/PostItems.js"

const PostSummaryList = () => {
    return (`
           <ul class="list-group">
           ${
        PostItems.map(post => {
            return(PostSummaryListItem(post));
        }).join('')
    }
         </ul>
`);
}

export default PostSummaryList;