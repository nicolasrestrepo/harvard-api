import React from 'react'
import 'jest-dom/extend-expect'
import Modal from '../'
import { render, cleanup, fireEvent } from '@testing-library/react'

afterEach(cleanup)

jest.mock('react-dom', () => {
  return {
    ...jest.requireActual('react-dom'),
    createPortal: (element: React.ElementType, target: any) => {
      return element;
    }
  };
});

describe('<Modal />', () => {
  test('should be render when send prop firstModalVisible in true', () => {

    const handleOnClose = jest.fn()

    const { getByText } = render(

      <Modal
        firstModalVisible={true}
        title='modal test'
        onClose={handleOnClose}
        imgUrl='https://nrs.harvard.edu/urn-3:HUAM:VRS11370_dynmc'
      />

    )
    expect(getByText('modal test')).toBeInTheDocument()
  })

  test('the modal should to close', () => {
    const handleOnClose = jest.fn()

    const { getByText, getByLabelText } = render(

      <Modal
        firstModalVisible={true}
        title='modal test'
        onClose={handleOnClose}
        imgUrl='https://nrs.harvard.edu/urn-3:HUAM:VRS11370_dynmc'
      />

    )

    fireEvent.click(getByText(/X/i))
    expect(handleOnClose).toHaveBeenCalledTimes(1)

  })
})


