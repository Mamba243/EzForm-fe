module.exports = {
    devServer: {
      port: 8000, // B 端，前端
      proxy: {
        '/api': 'http://localhost:4000', // Mock
      },
    },
  };
  