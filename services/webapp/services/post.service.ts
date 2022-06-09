import { BaseService } from './base-service'

export interface ICreatePostRequest {
  productId: number
  title: string
  content: string
  pictureUrl: string
}

export class PostService extends BaseService {
  public baseUrl = '/api/v1/post'

  public async create(post: ICreatePostRequest): Promise<void> {
    return this.post<void>('', post)
  }
}

export const postService = new PostService()
