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
    ]
}
