import React from "react";

const User = ({avatar_url, name, location}) => {
	return(
		<div>
			<img src={avatar_url}`} alt="Avatar"/>
			<div>
				<p>{name}</p>
				<p>{location}</p>
			</div>
		</div>
	);
}

export default User;