import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromFavouriteAction } from "../redux/actions";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourite.list);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col xs={10} className='mx-auto my-3'>
          <h1 className='text-center'>Favourites</h1>
        </Col>
        <Col xs={10} className='mx-auto my-3'>
          <ListGroup>
            {favourites.map((fav, i) => (
              <ListGroupItem className='bg-dark mb-2' key={i}>
                <StarFill
                  color='gold'
                  className='mr-2'
                  onClick={() => dispatch(removeFromFavouriteAction(fav))}
                />
                <Link to={"/" + fav}>{fav}</Link>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
