import { Controller, Get, Res, Param, Req, Post, Body } from '@nestjs/common'
import { Request, Response } from 'express'
import { ProductService } from './product.service'

@Controller('product')
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @Get('view')
  getProductView(@Req() req: Request) {
    return this.service.get(req.url)
  }

  @Get('view/:id')
  getProductDetail(@Param('id') id: string, @Req() req: Request): Promise<string> {
    return this.service.get(req.url)
  }

  @Post()
  createProduct(@Req() req: Request, @Body() data) {
    return this.service.post(req.url, data)
  }
}
