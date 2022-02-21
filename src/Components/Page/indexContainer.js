import React from "react";
import { Component } from "react/cjs/react.development";
import "./index.css";
import list1 from "./../Resources/index.json";

class IndexContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: true,
		};
	}
	deleteItems = (a) => {
		let index = list1.indexOf(a);
		list1.splice(index, 1);
		this.setState({ show: false });
		this.setState({ show: true });
	};
	editItems = (a) => {
		let index = list1.indexOf(a);
		list1[index]["Status"] = "Prog";
		this.setState({ show: false });
		this.setState({ show: true });
	};
	editItems1 = (a) => {
		let index = list1.indexOf(a);
		list1[index]["Status"] = "Done";
		this.setState({ show: false });
		this.setState({ show: true });
	};
	render() {
		const { show } = this.state;
		return (
			<div>
				{show ? (
					<div className="index-container">
						<div className="Todo">
							<div className="todo-head">Todo</div>
							<hr />
							<div className="todo-item">
								{list1
									.filter((items) => items.Status === "Todo")
									.map((filteredThinngs) => (
										<div className="items-render-container">
											<div className="individual-items">
												{filteredThinngs.id}
											</div>
											<div
												className="individual-items"
												title={filteredThinngs.Desc}
											>
												{filteredThinngs.Name}
											</div>
											<div
												className="individual-items"
												onClick={() => this.editItems(filteredThinngs)}
											>
												&gt;
											</div>
										</div>
									))}
							</div>
						</div>
						<div className="Progress">
							<div className="progress-head">In Progress</div>
							<hr />
							<div className="progress-item">
								{list1
									.filter((items) => items.Status === "Prog")
									.map((filteredThinngs) => (
										<div className="items-render-container">
											<div className="individual-items">
												{filteredThinngs.id}
											</div>
											<div
												className="individual-items"
												title={filteredThinngs.Desc}
											>
												{filteredThinngs.Name}
											</div>
											<div
												className="individual-items"
												onClick={() => this.editItems1(filteredThinngs)}
											>
												&gt;
											</div>
										</div>
									))}
							</div>
						</div>
						<div className="Done">
							<div className="done-head">Done</div>
							<hr />
							<div className="done-item">
								{list1
									.filter((items) => items.Status === "Done")
									.map((filteredThinngs) => (
										<div className="items-render-container">
											<div className="individual-items">
												{filteredThinngs.id}
											</div>
											<div
												className="individual-items"
												title={filteredThinngs.Desc}
											>
												{filteredThinngs.Name}
											</div>
											<div
												className="individual-items"
												onClick={() => this.deleteItems(filteredThinngs)}
											>
												x
											</div>
										</div>
									))}
							</div>
						</div>
					</div>
				) : null}
			</div>
		);
	}
}

export default IndexContainer;
