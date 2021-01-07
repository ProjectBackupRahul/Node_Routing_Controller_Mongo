import * as mongoose from "mongoose";
export class dbConnection {

    public static dbConnect (){
          mongoose.connect(' mongodb://127.0.0.1:27017/jwtmongoapp', 
          { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
          var db = mongoose.connection;
        
          //@ Handling mongo Error 
          db.on('error', console.error.bind(console, 'connection error:'));
          db.once('open', () => {
            console.log(` Mongo DB Connected `)
          });
    }
}