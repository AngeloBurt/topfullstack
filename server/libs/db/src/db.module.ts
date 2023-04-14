import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './models/user.model';

const models = TypegooseModule.forFeature([User]);

@Global()
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://127.0.0.1:27017/topfullstack', {
      // useNewUrlParser: true,
      // useUnifiedTopology:true,
      // useCreateIndex:true,
      // useFindAndModify:true,
    }),
    models,
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
