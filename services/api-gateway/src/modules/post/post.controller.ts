import { Request } from 'express'

import { Body, Controller, Post, Req } from '@nestjs/common'

import { PostService } from './post.service'

@Controller('post')
export class PostController {
  constructor(private readonly service: PostService) {}

  @Post()
  async create(@Req() req: Request, @Body() body) {
    return this.service.post(req.url, body)
  }
}
