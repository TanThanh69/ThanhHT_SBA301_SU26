import './App.css'
import MyProfile from './components/MyProfile'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  const students = [
    { name: 'ThanhHT', id: 'SBA301', image: '/images/DoMixi.png' },
    { name: 'Nguyen A', id: 'SBA302', image: '/images/DoMixi.png' },
    { name: 'Tran B', id: 'SBA303', image: '/images/DoMixi.png' },
    { name: 'Le C', id: 'SBA304', image: '/images/DoMixi.png' },
    { name: 'Pham D', id: 'SBA305', image: '/images/DoMixi.png' },
    { name: 'Hoang E', id: 'SBA306', image: '/images/DoMixi.png' },
    { name: 'Vu F', id: 'SBA307', image: '/images/DoMixi.png' },
    { name: 'Do G', id: 'SBA308', image: '/images/DoMixi.png' },
    { name: 'Bui H', id: 'SBA309', image: '/images/DoMixi.png' },
    { name: 'Ngo I', id: 'SBA310', image: '/images/DoMixi.png' }
  ]

  return (
    <Container className="py-4">
      <h1 className="mb-4">List of Profiles</h1>
      <Row xs={1} md={3} className="g-4">
        {students.map((student) => (
          <Col key={student.id}>
            <MyProfile person={student} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default App;
