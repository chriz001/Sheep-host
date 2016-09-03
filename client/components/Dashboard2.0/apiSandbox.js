import React from 'react';
import axios from 'axios';

const ApiSandbox = React.createClass({

	render(){
		return(
			<div className="jumbotron">
				<h2>Your API Sandbox</h2>
				<div>Make CRUD requests to this collection to test out your data</div>
				<br></br>
				<form>
				<div className="form-group">	
					<div className="input-group input-group-md">
						<label for="dbName">POST</label><br></br>
							<small id="postHelp" className="form-text text-muted">Add a document to this collection</small>
								<input 
									className="form-control"
									onChange={this.props.onPostChange}
									placeholder="Enter {<key>: <value>} of new document"
									type="text"
									name="post">
								</input>
								<button
						className="btn btn-primary btn-lg"
						onClick={this.props.onPostClick}>
							POST
					</button>
					</div>
				</div>
				</form>
				<form>
				<div className="form-group">	
					<div className="input-group input-group-md">
						<label for="dbName">PUT</label><br></br>
							<small id="putHelp" className="form-text text-muted">Update a document in this collection</small>
								<input 
									className="form-control"
									onChange={this.props.onPutChange}
									placeholder="Copy and paste _id of desired document"
									type="text"
									name="putID">
								</input>
								<input 
									className="form-control"
									onChange={this.props.onPutChange}
									placeholder="Enter {<key>: <value>} to change"
									type="text"
									name="put">
								</input>
								<button
						className="btn btn-primary btn-lg"
						onClick={this.props.onputClick}>
							PUT
					</button>
					</div>
				</div>
				</form><form>
				<div className="form-group">	
					<div className="input-group input-group-md">
						<label for="dbName">DELETE</label><br></br>
							<small id="deleteHelp" className="form-text text-muted">Delete a record from this collection</small>
								<input 
									className="form-control"
									onChange={this.props.onDELETEChange}
									placeholder="Copy and paste _id of desired document"
									type="text"
									name="DELETE">
								</input>
								<button
						className="btn btn-primary btn-lg"
						onClick={this.props.onDELETEClick}>
							DELETE
					</button>
					</div>
				</div>
				</form>
			</div>
		)
	}
})

export default ApiSandbox;