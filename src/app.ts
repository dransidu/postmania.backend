import express , {Application, Request, Response} from 'express';
import routes from "./api/v1/routes";

const app : Application = express();

const port : number = 5000;

app.use('/api/v1',routes);

app.listen(port, () => console.log(`Server start on ${port}`))