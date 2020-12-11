import mongoose from 'mongoose';

const connect = async (): Promise<void> => {
  try {
    mongoose.set('useCreateIndex', true);
    await mongoose.connect('mongodb://localhost/url-shortener', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('DB connected');
  } catch (error) {
    console.error('Error occurred during connecting to DB:');
    console.error(error);
  }
};

export default connect;
