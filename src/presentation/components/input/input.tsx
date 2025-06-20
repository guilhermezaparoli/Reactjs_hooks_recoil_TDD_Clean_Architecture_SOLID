import React, { useContext } from 'react'
import Styles from "./input.scss"
import Context from "@/presentation/contexts/form/form-context"


type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    name: string
}

const Input: React.FC<Props> = (props: Props) => {
const { state, setState } = useContext(Context)
const error = state[`${props.name}Error`]

const handleChange = (event: React.FocusEvent<HTMLInputElement>):void => {
    setState((prev)=> ({
        ...prev,
        [event.target.name]: event.target.value
    }))

}
const getStatus = (): string => {
    return '🔴'
}

const getTitle = (): string => {
    return error
} 
    return (
        <div className={Styles.inputWrap}>
            <input data-testid={props.name} {...props} onChange={handleChange} />
            <span data-testid={`${props.name}-status`} title={getTitle()} className={Styles.status}>{getStatus()}</span>
        </div>

    )
}

export default Input