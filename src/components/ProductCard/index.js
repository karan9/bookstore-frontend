import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

export default function({ book, ...props }) {
  const history = useHistory();

  return (
    <div>
      <Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
          />
          <Card.Header>{book.name}</Card.Header>
          <Card.Meta>{book.author}</Card.Meta>
          <Card.Meta>{book.category}</Card.Meta>
          <Card.Description>{book.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button
              onClick={() => history.push(`/edit/${book._id}`)}
              basic
              color="green"
            >
              Edit
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
}
