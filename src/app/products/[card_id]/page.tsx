import AddToCartBtn from '@/components/AddToCartBtn';
import Rendering from '@/components/rendering'
import { client } from '@/sanity/lib/client'
import Image from 'next/image'


export default async function details({params}: {params: Promise<{card_id: number}>}) {
  const { card_id } = await params;

  interface Card {
    id: number;
    productName: string;
    Productdetail: string;
    Productprice: string;
    imageUrl: string;

  }
  const product = await client.fetch(`*[_type == "Product"]{
    id,
    productName,
    Productdetail,
    Productprice, 
    "imageUrl": ProductImage.asset->url  
  }`);

  const card_result = product.find((item: Card)=> (item.id ==  card_id))
  console.log(card_result);
  
  return (
    <div className='p-28'>
      <div className='p-8 grid grid-cols-1 md:grid-cols-2 gap '>
        <Image
          src={card_result?.imageUrl}
          alt={`Card Image`}
          width={305}
          height={375}
          className="w-[163px] h-[201px] lg:w-[305px] lg:h-[375px] cursor-pointer"
        />
        <div className="flex flex-col gap-5">
          <h2 className="text-[20px] text-[#404b5b] leading-7 font-bold cursor-pointer">
            {card_result?.productName}
          </h2>
          <p className="text-sm leading-7 font-normal cursor-pointer">
            {card_result?.Productdetail}
          </p>
          <h4 className="text-[18px] leading-7 font-normal text-[#404b5b] cursor-pointer">
            £{card_result?.Productprice}
          </h4>
          <div className="flex flex-col items-baseline">
          <Rendering price={card_result?.Productprice} />
          </div>
          <div className="flex flex-col items-baseline">
            <AddToCartBtn id={Number(card_id)}/>
          </div>
        </div>
      </div>
    </div>
  );
}
