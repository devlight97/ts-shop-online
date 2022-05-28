import {
  Controller,
  Get,
  Res,
  Param,
  Req,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common'
import { Request, Response } from 'express'
import { ProductService } from './product.service'

// @Catch(HttpException)
@Controller('product')
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @Get('view')
  getProductView(@Req() req: Request) {
    return this.service.get(req.url)
  }

  @Get('view/:id')
  getProductDetail(@Param('id') id: string, @Req() req: Request) {
    return this.service.get(req.url)
  }

  @Post()
  createProduct(@Req() req: Request, @Body() body) {
    return this.service.post(req.url, body)
  }

  @Put()
  updateProduct(@Req() req: Request, @Body() body) {
    return this.service.put(req.url, body)
  }

  @Delete()
  deleteProduct(@Req() req: Request) {
    return this.service.delete(req.url)
  }
}
