import app from './app';

const PORT = process.env.NODE_LOCAL_PORT || 3003;

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default server;
