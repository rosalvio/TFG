import mongoose, {ConnectionOptions} from 'mongoose';
import config from './config';

const opts: ConnectionOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

(async ()=> {
    try {
        const db = await mongoose.connect(`mongodb://${config.host}/${config.nombre}`, opts);
        console.log('Database connected to ', db.connection.name);
    } catch (error) {
     console.error(error);   
    }
})();