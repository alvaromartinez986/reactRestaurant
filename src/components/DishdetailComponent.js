import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle
} from 'reactstrap';

export default class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderComments(comments) {
    if (comments != null) {
      return (
        <div>
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {comments.map((comment) => {
              const date = new Date(comment.date);
              return (
                <div key={comment.id} className="mt-3">
                  <li className="mt-3">{comment.comment}</li>
                  <li className="mt-3">
                    -- {comment.author},{' '}
                    {new Intl.DateTimeFormat('en', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric'
                    }).format(date)}
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  rederDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    const dish = this.props.dish;

    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">{this.rederDish(dish)}</div>
        <div className="col-12 col-md-5 m-1">
          {this.renderComments(dish.comments)}
        </div>
      </div>
    );
  }
}
