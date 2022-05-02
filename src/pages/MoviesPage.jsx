import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card, ListGroup, Button } from 'react-bootstrap'
import { getIdFromUrl } from '../helpers'
import Loading from '../components/Loading'
import StarWarsAPI from '../services/StarWarsAPI'
import banner from '../assets/images/banner.png'

const MoviesPage = () => {

    const [films, setFilms] = useState()
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getFilms =  async () => {
            setLoading(true)
            const data = await StarWarsAPI.getFilms(page)
            setFilms(data)
            setLoading(false)
        }
        getFilms()
    }, [page])

    return (
        <>  
            {loading && (
                <Loading />
            )}      
        
            {films && !loading && (
                <Row>
                    <h1>Films</h1>

                    {films.results.map((film) => (
                        <Col md={4} className="mb-3" key={film.episode_id}>
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
                                        as={Link}
                                        to={`/films/${getIdFromUrl(film.url)}`}
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
                            disabled={!films.next}
                            variant="primary"
                        >Next Page</Button>
                    </div>
                </Row>        
            )}           
                
        </>
    )
}

export default MoviesPage