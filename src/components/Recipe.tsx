import { useContext, useState } from 'react'
import { ModalContext } from '../context/ModalContext'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

const getModalStyle = () => {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Recipe = (props: { recipe: any }) => {

    const [modalStyle] = useState(getModalStyle)
    const [open, setOpen] = useState(false)
    const classes = useStyles()
    const { selectedRecipe, saveRecipe, getRecipe } = useContext(ModalContext)
    const { idDrink, strDrink, strDrinkThumb } = props.recipe
    
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <div className='col-md-4 mt-5'>
            <div className='card'>
                <img className='card-img-top' src={strDrinkThumb} alt={strDrink} />
                <h2 className='card-header'>{strDrink}</h2>
                <div className='card-body'>
                    <button
                        className='btn btn-block btn-primary'
                        type='button'
                        onClick={() => {
                            saveRecipe(idDrink)
                            handleOpen()
                        }}
                    >See recipe</button>
                    <Modal
                        open={open}
                        onClose={() => {
                            saveRecipe(null)
                            getRecipe({})
                            handleClose()
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{selectedRecipe.strDrink}</h2>
                            <h3 className='mt-4'>Instructions</h3>
                            <p>{selectedRecipe.strInstructions}</p>
                            <img style={{ width: '100px' }} src={selectedRecipe.strDrinkThumb} alt={selectedRecipe.strDrink} />
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Recipe
