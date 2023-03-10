import Link from 'next/link';
import classes from './CustomButton.module.css';

function Button(props) {

    if (props.link) return <Link href={props.link}>
        <a className={classes.btn}>
            {props.children}
        </a>
    </Link>

    return <button
        className={classes.button}
        onClick={props.onClick}>
        {props.children}
    </button>
}

export default Button;