import './findChar.scss';

const FindChar = () => {

    return (
        <div className='find'>
        <p>Or find a character by name:</p>
        <form action="#" className="find__form">
            <input type="text" placeholder='Enter name' />
            <button className="button button__main">
                <div className="inner">FIND</div>
            </button>
        </form>
        </div>
    )
}

export default FindChar;