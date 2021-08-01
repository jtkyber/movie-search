import './ToggleViewIcon.css';
import { useStoreState, useStoreActions } from 'easy-peasy';

const ToggleViewIcon = () => {
    const cardView = useStoreState(state => state.cardView);
    const toggleCardView = useStoreActions(actions => actions.toggleCardView)

    return (
        cardView === false
        ?
        <div onClick={toggleCardView} className='toggleViewIcon cardViewIcon'>
            <div className='block'></div>
            <div className='block'></div>
            <div className='block'></div>
            <div className='block'></div>
            <div className='block'></div>
            <div className='block'></div>
            <div className='block'></div>
            <div className='block'></div>
            <div className='block'></div>
        </div>
        :
        <div onClick={toggleCardView} className='toggleViewIcon listViewIcon'>
            <div className='dot'></div>
            <div className='line'></div>
            <div className='dot'></div>
            <div className='line'></div>
            <div className='dot'></div>
            <div className='line'></div>
        </div>
    )
}

export default ToggleViewIcon;
