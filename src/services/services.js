

import axios from 'axios';
class Services {
  static async searchGithub(criteria) {
    var self = this;
    var query = `https://api.github.com/search/users?q=${criteria}`;
    
    var res = await axios.get(query);

    const items = res.data.items;
    return items;
  }
}

export default Services;

