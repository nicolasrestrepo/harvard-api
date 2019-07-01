import React, { useRef } from 'react'
import { Card, WrappImage, Image } from './styles'
import Skeleton from "react-loading-skeleton"

const ItemCard = ({ item, style, onClick }: any) => {

  const ref = useRef(null)

  if (!item) {
    return (
      <article style={style}>
        <Skeleton height={275} width={350} />
      </article>
    );
  }


  return (
    <article data-testid='item-card' style={style}>
      <Card onClick={() => onClick(item.baseimageurl)}>
        <WrappImage>
          <Image
            ref={ref}
            src={item.baseimageurl}
            alt="harvard-image"
          />
        </WrappImage>
      </Card>
    </article>
  )
}

export default ItemCard


