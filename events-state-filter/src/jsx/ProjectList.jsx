export default function ProjectList(props) {
    const { projects } = props;
    return (
        <ul>
            {projects.map((project, i) => (
                <li 
                    key={i}
                    className={project.category}
                >
                    <img src={project.img} alt={project.category}></img>
                </li>
            ))}
        </ul>
    );
}