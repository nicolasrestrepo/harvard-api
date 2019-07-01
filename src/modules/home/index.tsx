import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'
import InfiniteLoader from "react-window-infinite-loader"
import { get } from '../../utils/request'
import { FixedSizeGrid } from 'react-window'
import ItemCard from './components/itemCard'
import Modal from '../commons/modal'
import { IItem } from './interfaces'
import { Wrapper } from './styles'




let requestCache: any = {};
const COLUMN_WIDTH = 370
const ROW_HEIGHT = 280

const Home: React.FC<RouteComponentProps> = () => {

  const [items, setItems] = useState<IItem[]>([])
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)
  const [page, setPage] = useState<number>(0)
  const [columns, setColumns] = useState<number>(0)
  const [count, setCount] = useState<number>(10)

  // set modal for view detail prop
  const [viewDetail, setViewDetail] = useState<boolean>(false)
  // set image that is already cached for in the detail do not make a new request
  const [detailImgUrl, setDetailImg] = useState<string>('')

  const isItemLoaded = ({ index }: any) => !!items[index];

  // get more items a validate if the section is in cache
  const loadMoreItems: any = async (visibleStartIndex: any, visibleStopIndex: any) => {
    console.log('dataaaaa -->')
    try {
      const key = [visibleStartIndex, visibleStopIndex].join(':');
      if (requestCache[key]) {
        return;
      }

      let itemsRetrieved = true;

      for (let i = visibleStartIndex; i < visibleStopIndex; i += 1) {
        if (!items[i]) {
          itemsRetrieved = false;
          break;
        }
      }

      if (itemsRetrieved) {
        requestCache[key] = key;
        return;
      }
      const newPage = page + 1
      const { data, status } = await get('/image', {
        page: newPage,
        size: 10
      })

      if (data && status === 200) {
        const { info: { page } } = data
        setItems([...items, ...data.records])
        setPage(page)
        setCount(count + 10)
      }

      requestCache[key] = key;
    } catch (error) {
      console.log('error', error)
    }
  };


  const renderCell = ({ rowIndex, columnIndex, style }: any) => {

    const item = items[rowIndex * columns + columnIndex];
    return <ItemCard onClick={handleViewDetail} {...{ item, style }} />
  };


  const handleOnItemsRendered = (infiniteOnItemsRendered: any) => ({
    visibleColumnStartIndex,
    visibleColumnStopIndex,
    visibleRowStartIndex,
    visibleRowStopIndex,
  }: any) => {

    const visibleStartIndex = visibleRowStartIndex * columns + visibleColumnStartIndex;
    const visibleStopIndex = visibleRowStopIndex * columns + visibleColumnStopIndex;

    infiniteOnItemsRendered({
      visibleStartIndex,
      visibleStopIndex,
    });
  };

  // responsive recalculate size, for render columns
  const recalcSize = () => {

    const recalWidth = (document.documentElement.clientWidth || document.body.clientWidth) - 70;

    const recalHeight = window.innerHeight - 60;
    const recalColumns = Math.floor((width - 60) / COLUMN_WIDTH);

    setWidth(recalWidth)
    setHeight(recalHeight)
    setColumns(recalColumns)

  };

  // use for open and close modal
  const handleViewDetail = (imgUrl: string) => {
    setDetailImg(imgUrl)
    setViewDetail(true)
  }

  const handleOnCloseDetail = () => {
    setViewDetail(false)
  }
  //

  useEffect(() => {
    console.log('data')
    recalcSize()
    window.addEventListener('resize', recalcSize);
    return () => {
      window.removeEventListener('resize', recalcSize)
    };
  })

  return (
    <Wrapper>
      <Modal
        imgUrl={detailImgUrl}
        firstModalVisible={viewDetail}
        title='Image Detail'
        onClose={handleOnCloseDetail}
      />
      <InfiniteLoader
        isItemLoaded={isItemLoaded}
        loadMoreItems={loadMoreItems}
        itemCount={count}
      >
        {({ onItemsRendered, ref }) => (
          <FixedSizeGrid
            onItemsRendered={handleOnItemsRendered(onItemsRendered)}
            columnCount={columns}
            columnWidth={COLUMN_WIDTH}
            height={height}
            rowCount={Math.ceil(count / columns)}
            rowHeight={ROW_HEIGHT}
            width={width}
            ref={ref}
          >
            {renderCell}
          </FixedSizeGrid >
        )
        }
      </InfiniteLoader>
    </Wrapper>
  )
}

export default Home

