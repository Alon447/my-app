type cardProps = {
    imageURL: string
    text: string
}
function Card(props: cardProps) {
    return (
        <div className="relative max-w-xs overflow-hidden rounded shadow-lg">
            <img className="w-full" src={props.imageURL} alt="photo"></img>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100">
                <p className="text-lg font-semibold text-white">{props.text}</p>
            </div>
        </div>
    )
}
export default Card
