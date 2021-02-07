import React from 'react';
import dog from '../images/dog.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


function HomePage(){
    return(
        <div className="home_bg">
            <Card className="bg-dark text-white">
                <Card.Img src={dog} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Love Dogs...</Card.Title>
                    <Card.Text><quote>"Such short little lives our pets have to spend with us, and they spend most of it waiting for us to come home each day."</quote></Card.Text>
                    <Card.Text><span>Photo by <a href="https://unsplash.com/@jamie452?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jamie Street</a> on <a href="https://unsplash.com/s/photos/dog?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></Card.Text>
                    <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">To know more about breeds</Tooltip>}>
                        {({ ref, ...triggerHandler }) => (
                        <Button
                        ref={ref}
                        variant="primary"
                        {...triggerHandler}
                        className="d-inline-flex align-items-center"
                        >
                        <span className="ml-1"><a className="button-breeds" href={'/breeds'}> Varieties of breeds</a></span>
                        </Button>
                        )}
                    </OverlayTrigger>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default HomePage;