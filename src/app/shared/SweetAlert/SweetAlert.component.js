import React from 'react'
import IconSuccess from '../../../assets/icons/success.svg'
import IconInfo from '../../../assets/icons/info.svg'
import IconDelete from '../../../assets/icons/redAlert.svg'
import './SweetAlert.css'
import { useSelector } from 'react-redux'

const SweetAlert = (props) => {

    const stateAlert = useSelector(store => store.myList.showAlertAdd)
    // const alertExist = useSelector(store => store.myList.showAlertExist)
    const typeAlert = useSelector(store => store.myList.typeAlert)

    React.useEffect(() => {
        
        console.log(typeAlert)

    }, [typeAlert])
    
    return (
        <div 
            className={typeAlert === 'add' ? "o-sweet-alert-add d-flex" : typeAlert === 'delete' ? "o-sweet-alert-delete d-flex" : "o-sweet-alert-exist d-flex"} 
            style={stateAlert ? {marginRight: '0rem'} : {marginRight: '-45rem'}}
        >
            <img className="o-iconAlert" src={typeAlert === 'add' ? IconSuccess : typeAlert === 'delete' ? IconDelete : IconInfo } alt="" />
            <div className="o-text-alert-add o-font-medium">
                {typeAlert === 'add' ? "Agregado exitosamente" : typeAlert === "delete" ? "Eliminado exitosamente" : "Ya se encuentra en tu lista" }
            </div>
        </div>
    )
}

export default SweetAlert
