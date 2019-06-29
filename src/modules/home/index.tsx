import React, { useState, useEffect, useRef } from 'react'
import { RouteComponentProps } from '@reach/router'
import { FixedSizeGrid } from "react-window"
import InfiniteLoader from "react-window-infinite-loader"
import { get } from '../../utils/request'
import ItemCard from './components/itemCard'
// import List from '../commons/List'

let requestCache: any = {};
const COLUMN_WIDTH = 250
const ROW_HEIGHT = 320

const Home: React.FC<RouteComponentProps> = () => {

  const [items, setItems] = useState<any>([])
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)
  const [page, setPage] = useState<number>(0)
  const [columns, setColumns] = useState<number>(0)
  const [count, setCount] = useState<number>(0)



  const isItemLoaded = ({ index }: any) => !!items[index];

  // get more items a validate if the section is in cache
  const loadMoreItems: any = async (visibleStartIndex: any, visibleStopIndex: any) => {
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
        size: 20
      })

      setItems([...items, ...data.records])
      setPage(data.info.page)
      requestCache[key] = key;
    } catch (error) {
      console.log('error', error)
    }
  };

  const getData = async () => {
    try {
      const { data, status } = await get('/image', {
        page: 1,
        size: 20
      })
      if (status === 200) {
        setPage(data.info.page)
        setItems(data.records)
        setCount(data.info.totalrecords)
      }
    } catch (error) {
      console.log('some error', error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const renderCell = ({ rowIndex, columnIndex, style }: any) => {

    const item = items[rowIndex * columns + columnIndex];
    return <ItemCard {...{ item, style }} />
  };

  const onItemsRendered2 = (infiniteOnItemsRendered: any) => ({
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

  const recalcSize = () => {

    const recalWidth = (document.documentElement.clientWidth || document.body.clientWidth) - 40;
    const recalHeight = window.innerHeight - 160;
    const recalColumns = Math.floor((width - 40) / COLUMN_WIDTH);

    setWidth(recalWidth)
    setHeight(recalHeight)
    setColumns(recalColumns)

  };


  useEffect(() => {
    recalcSize()
    window.addEventListener('resize', recalcSize)
    return () => {
      window.removeEventListener('resize', recalcSize)
    };
  })

  return (
    <>

      <InfiniteLoader
        isItemLoaded={isItemLoaded}
        loadMoreItems={loadMoreItems}
        itemCount={count}
      >
        {({ onItemsRendered, ref }) => (
          <FixedSizeGrid
            onItemsRendered={onItemsRendered2(onItemsRendered)}
            columnCount={columns}
            columnWidth={COLUMN_WIDTH}
            height={height}
            rowCount={Math.ceil(count / columns)}
            rowHeight={ROW_HEIGHT}
            width={width}
            ref={ref}
          >
            {renderCell}
          </FixedSizeGrid>
        )}
      </InfiniteLoader>
    </>
  )
}

export default Home

