import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card, ListGroup, Button } from 'react-bootstrap'
import { getIdFromUrl } from '../helpers'
import StarWarsAPI from '../services/StarWarsAPI'
import banner from '../assets/images/banner.png'

const MoviesPage = () => {

    const [films, setFilms] = useState()

    const getFilms = async () => {
        const data = await StarWarsAPI.getFilms()
        setFilms(data)
    }

    useEffect(() => {
        getFilms()
    }, [])

    return (
        <>  
            <Row>
                <h1>Movies</h1>
            
                {films && (
                    films.results.map((film) => 

                        <Col md={4} className="mb-3">
                            <Card>
                                <Card.Img variant="top" src={banner} />
                                <Card.Body>
                                    <Card.Title>{film.title}</Card.Title>
                                </Card.Body>
                                <ListGroup>
                                    <ListGroup.Item>Episode {film.episode_id}</ListGroup.Item>
                                    <ListGroup.Item>Released {film.release_date}</ListGroup.Item>
                                    <ListGroup.Item>Characters {film.characters.length}</ListGroup.Item>
                                </ListGroup>
                                <Card.Body>
                                    <Button
                                        action
                                        as={Link}
                                        to={`/films/${getIdFromUrl(film.url)}`}
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

export default MoviesPage