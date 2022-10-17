const WhoToFollowListItem = (who) => {
    return(`
      <li class="list-group-item list-group-item-action" tabindex="-1" aria-disabled="true">
        <div class="row">
            <div class="col-2">
                <img class="icon-image rounded-circle" src="${who.avatarIcon}" height="100px"/>
            </div>
            <div class="col-6">
                <div class="fw-bolder">${who.userName}</div>
                <div class="text-secondary">@${who.handle}</div>
            </div>
            <div class="col-4">
                <button class="btn btn-primary w-100 mt-2 rounded-pill">
                    Follow
                </button>
            </div>
        </div>
    </li>
   `);
}
export default WhoToFollowListItem;

