import React, { useRef } from 'react'
import { Card, WrappImage, Image } from './styles'

// const onLoad = ref => () => {
//   ref.current.classList.add(styles.loadedClass);
// };

const ItemCard = ({ item, style, onClick }: any) => {
  const ref = useRef(null)
  if (!item) {
    return (
      <article style={style}>
        <figure />
      </article>
    );
  }


  return (
    <article style={style}>
      <Card onClick={() => onClick(item.baseimageurl)}>
        <WrappImage>
          <Image
            ref={ref}
            src={item.baseimageurl}
            alt=""
          // onLoad={onLoad(ref)}
          />
        </WrappImage>
      </Card>
    </article>
  )
}

export default ItemCard


