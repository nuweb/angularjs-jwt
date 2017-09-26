export default {
  auth: {
    jwt: { secret: process.env.JWT_SECRET || 'angularjs-jwt'}
  }
};
