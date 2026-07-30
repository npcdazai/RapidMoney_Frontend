module.exports = {
  apps: [
    {
      name: 'rapidmoney-frontend',
      // Invoke the Next.js binary directly rather than `npm start` so PM2
      // signals reach the server process instead of an npm wrapper.
      script: './node_modules/next/dist/bin/next',
      args: 'start -p 3001',
      cwd: '/home/ubuntu/RapidMoney_Projects/RapidMoney_Frontend',

      // Fork mode, single instance. Bump to cluster mode with:
      //   instances: 'max', exec_mode: 'cluster'
      instances: 1,
      exec_mode: 'fork',

      env: {
        NODE_ENV: 'production',
        // 3000 is taken by rapidmoney-backend.
        PORT: 3001,
      },

      // Restart policy
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      min_uptime: '15s',
      max_restarts: 10,
      restart_delay: 4000,

      // Logs
      error_file: './logs/pm2-error.log',
      out_file: './logs/pm2-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',

      kill_timeout: 5000,
    },
  ],
};
