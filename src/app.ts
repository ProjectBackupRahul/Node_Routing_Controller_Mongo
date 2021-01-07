import 'reflect-metadata'
import { createExpressServer, useContainer } from 'routing-controllers';
import { UserController } from './Controllers/UserController';
import { ValidUserController } from './Controllers/ValidUserController';
import { dbConnection } from './DBconfig/dbconnect'
import {Container} from "typedi";
import { severAddress } from './ServerAddress/ServerAddress';

useContainer(Container);

const PORT = 9800;
const app = createExpressServer( {
  cors: true,
  controllers: [
    UserController,
    ValidUserController
  ], 
});

app.listen(PORT, async () =>{
   severAddress.appAddress(PORT);
   dbConnection.dbConnect();
});