import { useEffect, useState } from 'react'
import { Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import StarWarsAPI from '../services/StarWarsAPI'
import banner from '../assets/images/banner.png'

const MoviesPage = () => {

    const [films, setFilms] = useState()

    const getFilms = async () => {
        const data = await StarWarsAPI.getFilms()
        setFilms(data)
        console.log(data)
    }


    useEffect(() => {
        getFilms()
    }, [])

    console.log(films)

    return (
        <>  
            <Row>
                <h1>Movies</h1>
            
                {films && (
                    films.results.map((films) => 

                    <Col md={4}>

                        <Card>
                            <Card.Img variant="top" src={banner} />
                            <Card.Body>
                                <Card.Title>{films.title}</Card.Title>
                            </Card.Body>
                            <ListGroup>
                                <ListGroupItem>Episode {films.episode_id}</ListGroupItem>
                                <ListGroupItem>Released {films.release_date}</ListGroupItem>
                                <ListGroupItem>Characters {films.characters.length}</ListGroupItem>
                            </ListGroup>
                        </Card>

                    </Col>

                ))}
                
            </Row>
        </>
    )
}

export default MoviesPage