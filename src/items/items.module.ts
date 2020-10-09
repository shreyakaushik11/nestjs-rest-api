import { MongooseModule } from '@nestjs/mongoose';
import { Items, ItemSchema } from './schemas/item.schema';
import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

@Module({
  imports: [MongooseModule.forFeature([{name:Items.name, schema: ItemSchema}])],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
