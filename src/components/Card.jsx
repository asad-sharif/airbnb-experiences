import star from '../assets/star.png'

export default function Card(props) {
    return (
        <div className='card'>
            <div >
                <img src={props.coverImg} className='card-img'/>
            </div>
            <div className='card-content'>
                <div className='card-stats gray'>
                    <img src={star} />
                    <span>({props.reviewCount}) - </span>
                    <span> {props.location}</span>
                </div>
                <p className='card-title'>{props.title}</p>
                <p className='card-price'><span className='bold'>From ${props.price}</span> / person</p>
            </div>
        </div>

    )
}