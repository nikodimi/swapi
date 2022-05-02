import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Row, Col, Card, ListGroup } from 'react-bootstrap'
import { getIdFromUrl } from '../helpers'
import Loading from '../components/Loading'
import StarWarsAPI from '../services/StarWarsAPI'

const MoviePage = () => {

    const [ film, setFilm ] = useState()
    const { id } = useParams()
    const [loading, setLoading] = useState(false)

    const getFilm = async (id) => {
        setLoading(true)
        const data = await StarWarsAPI.getFilm(id)
        setFilm(data)
        setLoading(false)
    }

    useEffect(() => {
        getFilm(id)
    }, [id])
    
    return (
        <>

            {loading && (
                <Loading />
            )} 

            {film && !loading && ( 
                <Row>
                    <Col md={8} className='mx-auto'>
                        <Card>
                            <Card.Header>{film.title}</Card.Header>
                            <Card.Body>
                                <Card.Text>Episode {film.episode_id}</Card.Text>
                                <Card.Text>Director {film.director}</Card.Text>
                                <Card.Text>Producer {film.producer}</Card.Text>
                                <Card.Text>Released {film.release_date}</Card.Text>
                                <Card.Subtitle>Links:</Card.Subtitle>
                            </Card.Body>
                            <ListGroup className="characterList">
                                {film.characters.map((character, index) => 
                                    <ListGroup.Item
                                        action
                                        as={Link}
                                        to={`/people/${getIdFromUrl(character)}`}
                                        key={index}
                                        >
                                        Character { getIdFromUrl(character)}
                                    </ListGroup.Item>
                                )}
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            )}
        </>
    )
    
}

export default MoviePage