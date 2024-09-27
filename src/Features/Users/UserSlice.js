import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const themes = {
  winter: 'winter',
  dracula: 'dracula',
};

// Get theme from localStorage or default to winter
const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme') || themes.winter;
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
};

// Initial state for the user slice
const initialState = {
  user: null, // initially, no user is logged in
  theme: getThemeFromLocalStorage(),
  username: 'coding addict',
  isGuest : false // Mark user as a guest

};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const { username, email } = action.payload;

      // Field condition check: both username and email should be present
      if (!username || !email) {
        toast.error("Username and email are required to login.");
        return;
      }

      state.user = action.payload; // Update user state
      localStorage.setItem('user', JSON.stringify(action.payload)); // Persist user in local storage

      toast.success(`Welcome, ${username}!`);
    },
    logoutUser: (state) => {
      state.user = null; // Reset user state to null
      localStorage.removeItem('user'); // Remove user from local storage
      toast.info("You've been logged out.");
    },
    GuestUser:(state)=>{
      state.user = null; // Clear user data
      state.isGuest = true; // Mark user as a guest
    },
    toggleTheme: (state) => {
      // Toggle between themes
      state.theme = state.theme === themes.dracula ? themes.winter : themes.dracula;
      document.documentElement.setAttribute('data-theme', state.theme);

      // Save the selected theme in local storage
      localStorage.setItem('theme', state.theme);
      toast.info(`Theme switched to ${state.theme}`);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme,GuestUser } = userSlice.actions;

export default userSlice.reducer;
