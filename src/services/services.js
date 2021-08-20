

import axios from 'axios';
class Services{
    static async searchGithub(criteria , onError) {
        var self = this;
        var query = `https://api.github.com/search/users?q=${criteria}`;
        console.log(query);
    
        if (!criteria || criteria.length === 0) {
          self.setState({ itemList: [], searchError: false })
          return;
        }
        // try {
          var res = await axios.get(query);
    
          const items = res.data.items;
          return items;
        }
        // catch (error) {
        //   if (error.response) {
        //     onError(error.response)
        //   }
        // };
      // }
}

export default Services;

