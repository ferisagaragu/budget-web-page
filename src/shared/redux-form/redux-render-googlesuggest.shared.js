import React, { Component } from 'react';
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGooglePlacesSuggest from "react-google-places-suggest"
 
const MY_API_KEY = "AIzaSyCGfbafYQgjSAXzZ7ikqOwo7GBtmWZ0hjU";
 
class GoogleSuggest extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			search: "",
			value: ""
    }
	}
	
	handleInputChange = (e, input) => {
		this.setState({search: e.target.value, value: e.target.value});
		input.value = e.target.value;
		input.onChange(e.target.value);
	}

	handleSelectSuggest = (geocodedPrediction, originalPrediction, input) => {
		this.setState({search: "", value: geocodedPrediction.formatted_address});
		input.value = geocodedPrediction.formatted_address;
		input.onChange(geocodedPrediction.formatted_address);
	}
    
	handleNoResult = () => { }

	handleStatusUpdate = (status) => { }
 
	render() {
		const {search, value} = this.state;

		const {
      input,
			label,
			type,
			className,
			onKeyUp,
			textNoResults,
			meta: {
				error,
				warning,
				touched
			},
			disabled
    } = this.props;
		
		const errorClass = touched && error ? 'error' : '';

		return (
			<ReactGoogleMapLoader
				params={
					{
						key: MY_API_KEY,
						libraries: "places,geocode",
					}
				}
				render={ googleMaps =>
					googleMaps && (
						<ReactGooglePlacesSuggest
							googleMaps={googleMaps}
							autocompletionRequest={
								{
									input: search
								}
							}
							onNoResult={ this.handleNoResult }
							onSelectSuggest={ (geocodedPrediction, originalPrediction) => this.handleSelectSuggest(geocodedPrediction, originalPrediction, input) }
							onStatusUpdate={ this.handleStatusUpdate }
							textNoResults={ textNoResults }
							customRender={ 
								prediction => (
									<div className="customWrapper">
										{
											prediction ? 
												prediction.description
											: 
												textNoResults
										}
									</div>
								)
							}
						>
							<div className="mb-3">
								<label>
									<b>
										{ label }
									</b>
								</label>
								<div>
									<input
										className={ `${className} ${errorClass}` }
										{ ...input }
										placeholder={ label }
										type={ type }
										onKeyUp={ onKeyUp }
										value={ value }
										disabled={ disabled }
										onChange={ (evt) => this.handleInputChange(evt, input) }
									/>
									{
										touched &&
											((error && <div className="text-danger">{ error }</div>) ||
											(warning && <div>{ warning }</div>))
									}
								</div>
							</div>
						</ReactGooglePlacesSuggest>
					)
				}
			/>
		);
	}
}

export default GoogleSuggest;