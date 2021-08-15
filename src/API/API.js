import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '38489ffb-786b-4236-a167-fe8283151742',
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users/?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then(response => response.data);
  },
  getStatus(userId) {
    return instance
      .get(`profile/status/${userId}`)
      .then(response => response.data);
  },
  updateStatus(status) {
    return instance
      .put(`profile/status`, {status: status})
      .then(response => response.data);
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me/`);
  },
};
