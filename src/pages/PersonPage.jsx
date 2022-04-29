import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Row, Col, Card, ListGroup } from 'react-bootstrap'
import { getIdFromUrl } from '../helpers'
import Loading from '../components/Loading'
import StarWarsAPI from '../services/StarWarsAPI'

const PersonPage = () => {

    const [ person, setPerson ] = useState()
    const { id } = useParams()
    const [loading, setLoading] = useState(false)

    const getPerson = async (id) => {
        setLoading(true)
        const data = await StarWarsAPI.getPerson(id)
        setLoading(false)
        setPerson(data)
    }

    useEffect(() => {
        getPerson(id)
    }, [id])

    return (
        <>  

            {loading && (
                <Loading />
            )}

            {person && !loading && (
                <Row>
                    <Col md={8} className='mx-auto'>
                        <Card>
                            <Card.Header>{person.name}</Card.Header>
                            <Card.Body>
                                <Card.Title>Attributes</Card.Title>
                                <Card.Text>Birth year {person.birth_year}</Card.Text>
                                <Card.Text>Height {person.height}</Card.Text>
                                <Card.Text>Mass {person.mass}</Card.Text>
                                <Card.Text>Hair color {person.hair_color}</Card.Text>
                                <Card.Text>Skin color {person.skin_color}</Card.Text>
                                <Card.Text>Eye color {person.eye_color}</Card.Text>
                            </Card.Body>
                            <ListGroup className="movieList">
                                {person.films.map((film, index) => 
                                    <ListGroup.Item
                                        as={Link}
                                        to={`/films/${getIdFromUrl(film)}`}
                                        key={index}
                                        >
                                        Film { getIdFromUrl(film)}
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

export default PersonPage