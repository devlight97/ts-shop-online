import { Body, Controller, Delete, Get, Post, Put, Req } from '@nestjs/common'
import { Request, Response } from 'express'
import { CartService } from './cart.service'

@Controller('cart')
export class CartController {
  constructor(private readonly service: CartService) {}

  @Get(':id')
  public getCart(@Req() req: Request) {
    return this.service.get(req.url)
  }

  @Post()
  public createCart(@Req() req: Request, @Body() body) {
    return this.service.post(req.url, body)
  }

  @Post('product')
  public addToCart(@Req() req: Request, @Body() body) {
    return this.service.post(req.url, body)
  }

  @Delete('product/:id')
  public deleteFromCart(@Req() req: Request) {
    return this.service.delete(req.url)
  }

  @Post('test')
  public test(@Body() body) {
    return body
  }

  @Put()
  public updateCart(@Req() req: Request, @Body() body) {
    return this.service.put(req.url, body)
  }
}
