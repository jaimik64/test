import React from 'react'
import Card from  'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button'
import RiAddCircleFill from 'react-icons/ri'

function ProductCard({product}){

    return (
        <Card className='h-100'>
            <div className='w-25'>
                <Badge bg="secondary">{product.category}</Badge>
            </div>
            <Card.Img variant="top" src={product.image}  />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                        <p>{product.description}</p> 
                        <span>Price : ${product.price}</span> 
                </Card.Text>
                <Button variant="primary">
                    Add To Cart
                </Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard;