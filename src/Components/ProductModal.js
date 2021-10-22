import React from 'react'
import { Modal, Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductModal = ({ data, showModal, closeModal,title }) => {
  return !showModal ? (<React.Fragment></React.Fragment>) : (
    <Modal show={showModal} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header >
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      {
          title==="Product added"
          ?
          <div></div>
        :
          <Modal.Header >
        <Modal.Title>{data.title} : {data.id}</Modal.Title>
      </Modal.Header> 
    }
      <Modal.Body>
        {data.description}
      </Modal.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Price: {data.price}</ListGroupItem>
          <ListGroupItem>category: {data.category}</ListGroupItem>
        </ListGroup>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ProductModal