import Nav from './nav/nav';
import Msg from './msg/msg';
import Board from './board/board';

const Dash = () => {
    return (
        <div className="container">
            <div className="navbar-container">
                <Nav />
            </div>
            <div className="msg-container">
                <Msg />
            </div>
            <div className="board-container">
                <Board />
            </div>
        </div>
    )
}

export default Dash