import axios from 'axios';

export default {
    searchUsers: async function(search: string, page: number, rowsPerPage: number){
        const result = await axios.get(`/api/users/search?q=${search}&count=${rowsPerPage}&page=${page}`);
        return result.data;
    },
    getUserDetails: async function(screen_name: string){
      const result = await axios.get(`/api/users/show?q=${screen_name}`);
      return result.data;
  }
}