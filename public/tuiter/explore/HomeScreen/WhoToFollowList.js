import WhoToFollowListItem from "../HomeScreen/WhoToFollowListItem.js";
import who from "../HomeScreen/who.js"

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