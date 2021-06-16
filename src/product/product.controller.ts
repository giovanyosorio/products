import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Res,
  HttpStatus,
  Param,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Post('/create')
  async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO) {
    //console.log(createProductDTO);
    const product = await this.productService.createProduct(createProductDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Product created',
      product,
    });
  }

  @Get('/')
  async getProduct(@Res() res) {
    //console.log(createProductDTO);
    const products = await this.productService.getProducts();
    return res.status(HttpStatus.OK).json({
      message: 'Products',
      products,
    });
  }
  @Get('/:productID')
  async getProductId(@Res() res, @Param('productID') productID) {
    //console.log(createProductDTO);
    const product = await this.productService.getProduct(productID);
    if (!product) throw new NotFoundException('product doesnt exists ');

    return res.status(HttpStatus.OK).json(product);
  }
  @Delete('/delete')
  async deleteProductId(@Res() res, @Query('productID') productID) {
    //console.log(createProductDTO);
    const productDeleted = await this.productService.deleteProduct(productID);
    if (!productDeleted)
      throw new NotFoundException('product deleted succesfully ');

    return res.status(HttpStatus.OK).json({
      message: 'product deleted',
      productDeleted,
    });
  }
  @Put('/update')
  async updateProduct(
    @Res() res,
    @Body() createProductDTO: CreateProductDTO,
    @Query('productID') productID,
  ) {
    //console.log(createProductDTO);
    const updateProduct = await this.productService.updateProduct(
      productID,
      createProductDTO,
    );
    if (!updateProduct)
      throw new NotFoundException('product deleted succesfully ');

    return res.status(HttpStatus.OK).json({
      message: 'product updated',
      updateProduct,
    });
  }
}
