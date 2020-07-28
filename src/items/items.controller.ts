import { CreateItemDto } from './dto/create-item.dto';
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string{
        return 'get all items';
    }

    @Get(':id')
    findOne(@Param() param): string {
        return `Item ${param.id}`
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): string{
        return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`;
    }

    @Delete(':id')
    delete(@Param('id') id): string {
        return `Delete item ${id}`
    }

    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
        return `Update ${id} - Name: ${updateItemDto.name}`
    }
}
