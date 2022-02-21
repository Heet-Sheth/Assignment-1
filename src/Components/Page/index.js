import React, { Component } from "react";
import CreateUpdateView from "../CreateView";
import "./index.css";
import IndexContainer from "./indexContainer";

class ListView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showCreateView: false,
		};
	}
	componentDidMount() {
		document.title = "ToDo List";
	}
	render() {
		const { showCreateView } = this.state;
		const hideShow = () => {
			this.setState({ showCreateView: !showCreateView });
		};
		return (
			<div className="index-body">
				<button className="new-button" onClick={hideShow}>
					new
				</button>
				{showCreateView ? (
					<CreateUpdateView callParentFunction={() => hideShow()} />
				) : (
					<IndexContainer />
				)}
			</div>
		);
	}
}

export default ListView;
