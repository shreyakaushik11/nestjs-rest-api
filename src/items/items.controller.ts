import { CreateItemDto } from './dto/create-item.dto';
import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';

@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string{
        return 'get all items';
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): string{
        return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`;
    }
}
