import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import ReactDom from 'react-dom'
import { CloseButton, Header } from './styles'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

interface IProps {
  firstModalVisible: boolean
  title: string
  onClose: () => void
  imgUrl: string
}

const CustomModal = ({ title, imgUrl, firstModalVisible, onClose }: IProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  const closeModal = () => {
    onClose()
    setModalVisible(false)
  }

  useEffect(() => {
    setModalVisible(firstModalVisible)
  }, [firstModalVisible])

  // the modal must be in other element of the principal root
  return ReactDom.createPortal(
    <div>
      <Modal
        isOpen={modalVisible}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Detail"
      >
        <Header>
          <h2>{title}</h2>
          <CloseButton onClick={closeModal}>X</CloseButton>
        </Header>
        <div>
          <img width='450' src={imgUrl} />
        </div>

      </Modal>
    </div>,
    // @ts-ignore
    document.getElementById('modal')
  );
}


export default CustomModal
