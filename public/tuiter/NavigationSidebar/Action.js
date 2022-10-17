import NavigationItem from "./ActionItem.js";
import ActionItem from "./ActionItem.js";
const Action = () => {
    return(`
       
           ${ActionItem()}
           ${TodoItem('Pickup the kids')}
           ${TodoItem('Walk the dog')}
       
   `);
}
export default Action;