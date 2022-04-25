import { useEffect, useState } from 'react'
import { Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import StarWarsAPI from '../services/StarWarsAPI'

const PeoplesPage = () => {

    const [people, setPeople] = useState()

    const getPeople = async () => {
        const data = await StarWarsAPI.getPeople()
        setPeople(data)
        console.log(data)
    }

    useEffect(() => {
        getPeople()
    }, [])

    console.log(people)

    return (
        <>  
            <Row>
                <h1>People</h1>
            
                {people && (
                    people.results.map((person) => 

                    <Col md={4}>

                        <Card>
                            {/* <Card.Img variant="top" src={banner} /> */}
                            <Card.Body>
                                <Card.Title>{person.name}</Card.Title>
                            </Card.Body>
                            <ListGroup>
                                <ListGroupItem>Gender {person.gender}</ListGroupItem>
                                <ListGroupItem>Born {person.birth_year}</ListGroupItem>
                                <ListGroupItem>In {person.films.length} movies</ListGroupItem>
                            </ListGroup>
                        </Card>

                    </Col>

                ))}
                
            </Row>
        </>
  )
}

export default PeoplesPage