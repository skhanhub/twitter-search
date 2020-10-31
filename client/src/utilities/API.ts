import axios from 'axios';

export default {
    searchUsers: async function(search: string){
        const result = await axios.get(`/api/users/search?q=${search}`);
        return result.data;
    },
    getUserDetails: async function(id: number){
      const result = await axios.get(`/api/users/search?q=${id}`);
      return result.data;
  }
}