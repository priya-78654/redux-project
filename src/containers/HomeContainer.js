import { connect } from 'react-redux'
import Home from '../components/Home'
import { addToCart } from '../Services/Actions/Actions'

const mapStateToProps = state => ({
  carddata: state.data
})
const mapDispatchToProps = dispatch => ({
  addToCartHandler: data => dispatch(addToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

//export default Home
