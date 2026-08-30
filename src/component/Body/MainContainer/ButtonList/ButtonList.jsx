import Button from './Button'

const ButtonList = () => {
    const list = ["ALL", "Trending", "Live", "Cricket", "Cooking", "Sports", "Soccer", "Songs", "Dance", "Trailer", "News", "Movies", "Tech", "Cars", "Stitch"]
    return (
        <div className='flex mx-2'>
            {list.map((name, index) => (<Button key={index} name={name} />))}
        </div>
    )
}

export default ButtonList
