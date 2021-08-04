import './Form.css'

const ShowFinished = (prop) => {

    function returnName() {
        if (prop.showDone === true) {
            return 'boxPressed'
        }
        else {
            return 'box'
        }
    }

    return (         
        <button className={returnName} onClick={prop.handleClick}>Show finshed</button>
    );
}

export default ShowFinished;