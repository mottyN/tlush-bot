import './information.css';
function Information (props){
    return (
        <div className="div">
            <p className='titel'>{props.titel}</p>
            <p>{props.information}</p>
        </div>
    )
}
export default Information