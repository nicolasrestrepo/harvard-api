import React from 'react'
import { render, cleanup } from '@testing-library/react'
import ItemCard from '../itemCard'


afterEach(cleanup)

describe('</ItemCard>', () => {
  test('render with content and shouldbe exist', () => {
    const item = {
      baseimageurl: 'ttps://nrs.harvard.edu/urn-3:HUAM:VRS11370_dynmc'
    }
    const { getByAltText } = render(
      <ItemCard item={item} />,
    )
    expect(getByAltText('harvard-image')).toBeTruthy()
  })

  test('render without content, should exist a child loading', async () => {

    const { container } = render(
      <ItemCard />,
    )
    expect(container.firstChild).toBeTruthy()
  })
})
