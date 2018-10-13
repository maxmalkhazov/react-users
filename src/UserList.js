import React from "react";
import User from "./User";

const UserList = ({ users }) => {
	return(
		<div>
			{
				users.map((user, i) => {
					return(
						<User
						    key={i}
						    avatar={users[i].avatar_url}
							name={users[i].name}
							location={users[i].location}
						/>
					);
				})
			}
		</div>
	);
}

export default UserList;