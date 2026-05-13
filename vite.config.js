import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react' // اصلاح شد

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  resolve: {
    alias: {
      // این خط باعث می‌شود تمام ایمپورت‌های react-native به نسخه وب تبدیل شوند
      'react-native': 'react-native-web',
    },
  },
})
