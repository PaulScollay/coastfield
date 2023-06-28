import { Row, Col, Media, Image } from 'react-bootstrap';

const AuthorIntro = () =>
    <Row>
        <Col md="8">
        {/* AUTHOR INTRO STARTS */}
        <Media className="mb-4 admin-intro">
            <Image
            roundedCircle
            width={64}
            height={64}
            className="mr-3"
            src="https://avatars1.githubusercontent.com/u/9482724?s=460&u=69a6acab13fd5547a4e316e496b573271077147f&v=4"
            alt="Generic placeholder"
            />
            <Media.Body>
            <p className="welcome-text">
            We’ve got a great range of static caravans and holiday homes for sale across our ten parks. Whether you’re looking to upgrade or become a holiday home owner for the first time, we’ve got something to suit you. We’ve got holiday homes from all leading manufacturers including Willerby, ABI, Swift and many more. Take a look at our latest stock below…
            </p>
            </Media.Body>
        </Media>
        {/* AUTHOR INTRO ENDS */}
        </Col>
    </Row>

export default AuthorIntro;

