import React from 'react';


const SchemaForm = (props) => {
	return (
			<div class="form-control">
				<textarea 
					onChange={props.onChange}
					placeholder="Schema"
					type="text"
					name="schema">
				</textarea>
			<div>
			<button
			
				className="btn btn-primary">
				Create MongoDB
			</button>
			</div>
		</div>
		
	)
}

export default SchemaForm;