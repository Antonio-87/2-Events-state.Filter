import React from "react";
import projects from "./projects";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";

export default class Portfolio extends React.Component {
  constructor(props) {
        super(props);
        this.state = {selected: "All"};
        this.filters = ["All", "Websites", "Flayers", "Business Cards"];
        this.projects = projects;
        this.filteredProjects = null;
    }
    


    onSelectedFilter = (item) => {
        this.setState((prev) => (prev.selected = item));
        const filteredList = this.projects.filter((project) => project.category === item);
        if (filteredList.length !== 0) {
            this.filteredProjects = filteredList;
        } else {
            this.filteredProjects = this.projects;
        }
    }

    render() {

        return (
            <main>
                <Toolbar
                    filters={this.filters}
                    selected={this.state.selected}
                    onSelectedFilter={this.onSelectedFilter} />
                <ProjectList projects={this.filteredProjects || this.projects} />
            </main>
        );
    }
}