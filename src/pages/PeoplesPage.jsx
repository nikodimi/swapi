import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card, ListGroup, Button } from 'react-bootstrap'
import { getIdFromUrl } from '../helpers'
import StarWarsAPI from '../services/StarWarsAPI'

const PeoplesPage = () => {

    const [people, setPeople] = useState()

    const getPeople = async () => {
        const data = await StarWarsAPI.getPeople()
        setPeople(data)
    }

    useEffect(() => {
        getPeople()
    }, [])

    return (
        <>  
            <Row>
                <h1>People</h1>
            
                {people && (
                    people.results.map((person) => 

                        <Col md={4} className="mb-3">
                            <Card>
                                <Card.Body>
                                    <Card.Title>{person.name}</Card.Title>
                                </Card.Body>
                                <ListGroup>
                                    <ListGroup.Item>Gender {person.gender}</ListGroup.Item>
                                    <ListGroup.Item>Born {person.birth_year}</ListGroup.Item>
                                    <ListGroup.Item>In {person.films.length} movies</ListGroup.Item>
                                </ListGroup>
                                <Card.Body>
                                    <Button
                                        action
                                        as={Link}
                                        to={`/people/${getIdFromUrl(person.url)}`}
                                        >
                                        Read more
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                ))}
                
            </Row>
        </>
  )
}

export default PeoplesPage