import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: "123",
            name: "item 56",
            qty: 20,
            description: "this is item 56"
        },
        {
            id: "146",
            name: "item 67",
            qty: 20,
            description: "this is item 67"
        }
    ];

    //creating a function to get an array of items
    findAll(): Item[]{
        return this.items;
    }

    //function to find an item with a particular id
    findOne(id): Item{
        return this.items.find(item=>item.id===id);
    }
}
