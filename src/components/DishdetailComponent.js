import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class Dishdetail extends Component {

    comments(com) {
        if (com == null) {
            return (<div></div>)
        }
        const cmnts = com.map(comment => {
          return (
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>{comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long', day: '2-digit'}).format(new Date(comment.date))}</p>
            </li>
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
             <h3><b>Comments</b></h3>
                <ul className>
                {cmnts}
                </ul>
            </div>
        )
    }

    renderDish(dish){
        if(dish != null){
            return (
              <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
                </Card>
              </div>
             )
            }
         else {
            return (<div>

            </div>)
            }
        }


    render() {
        const dish = this.props.dish
        if (dish == null) {
        return (<div></div>)
        }

        const dishItem = this.renderDish(dish)
        const commentItem = this.comments(dish.comments)
        return (
            <div className='row'>
             {dishItem}
             {commentItem}
            </div>
       )
}
}

export default Dishdetail
