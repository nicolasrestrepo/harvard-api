import React, { useRef } from 'react'
import { Card, WrappImage, Image } from './styles'

// const onLoad = ref => () => {
//   ref.current.classList.add(styles.loadedClass);
// };

const ItemCard = ({ item, style }: any) => {
  const ref = useRef(null)
  if (!item) {
    return (
      <article style={style}>
        <figure style={{ backgroundColor: '#000000' }} />
      </article>
    );
  }


  return (
    <article style={style}>
      <Card>
        <WrappImage>
          <Image
            width='160'
            ref={ref}
            src={item.baseimageurl}
            onLoad={(e) => console.log('onload', e)}
            alt=""
          // onLoad={onLoad(ref)}
          />
        </WrappImage>
      </Card>
    </article>
  )
}

export default ItemCard


