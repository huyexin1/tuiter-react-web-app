import WhoToFollowListItem from "../WhoToFollowList/WhoToFollowListItem.js";
import who from "../WhoToFollowList/who.js"

const WhoToFollowList = () => {
    return (`
           <ul class="list-group">
           ${
        who.map(each => {
            return(WhoToFollowListItem(each));
        }).join('')
    }
         </ul>
`);
}

export default WhoToFollowList;