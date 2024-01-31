import { useParams } from "react-router-dom";

const User = () => {
	const { userid } = useParams();

	return <div className=" text-black text-3xl dark:text-gray-700 font-bold text-center py-5 h-screen">User: {userid}</div>;
};

export default User;
