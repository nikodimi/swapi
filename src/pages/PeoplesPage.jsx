import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card, ListGroup, Button } from 'react-bootstrap'
import { getIdFromUrl } from '../helpers'
import Loading from '../components/Loading'
import StarWarsAPI from '../services/StarWarsAPI'

const PeoplesPage = () => {

    const [people, setPeople] = useState()
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getPeople = async () => {
            setLoading(true)
            const data = await StarWarsAPI.getPeople(page)
            setLoading(false)
            setPeople(data)
        }
        getPeople()    
    }, [page])

    return (
        <>  

            {loading && (
                <Loading />
            )}

            {people && !loading && (
                <Row>
                    <h1>People</h1>
                    
                    {people.results.map((person, index) => (
                        <Col md={4} className="mb-3" key={index}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{person.name}</Card.Title>
                                </Card.Body>
                                <ListGroup>
                                    <ListGroup.Item>Gender {person.gender}</ListGroup.Item>
                                    <ListGroup.Item>Born {person.birth_year}</ListGroup.Item>
                                    <ListGroup.Item>In {person.films.length} films</ListGroup.Item>
                                </ListGroup>
                                <Card.Body>
                                    <Button
                                        as={Link}
                                        to={`/people/${getIdFromUrl(person.url)}`}
                                        >
                                        Read more
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}

                    <div className="d-flex justify-content-between align-items-center mt-4">     
                        <Button
                            disabled={page === 1}
                            onClick={() => setPage(prevValue => prevValue - 1)}
                            variant="primary"
                        >Previous Page</Button>
                   
                    <div className="page">{page}</div>
                   
                        <Button
                            onClick={() => setPage(prevValue => prevValue + 1)}
                            disabled={!people.next}
                            variant="primary"
                        >Next Page</Button>
                    </div>
                </Row>
            )}
                
        </>
    )
}

export default PeoplesPage