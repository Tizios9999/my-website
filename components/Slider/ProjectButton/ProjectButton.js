

const ProjectButton = ( props ) => {

    return (
        <>
        <a href={props.link}>
            <button>{props.msg}</button>
        </a>
        </>
    )
}

export default ProjectButton;