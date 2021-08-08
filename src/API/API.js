import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '0c654e95-5b38-4abe-b7f6-1f6280858953',
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users/?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  follow(user) {
    return instance.post(`follow/${user.id}`);
  },
  unfollow(user) {
    return instance.delete(`follow/${user.id}`);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then(response => response.data);
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me/`);
},
}