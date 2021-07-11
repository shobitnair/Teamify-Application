import { Button, Grid, Hidden } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import chat from "../../resources/images/chat.svg";
import join4 from "../../resources/images/join4.svg";
import login3 from "../../resources/images/login3.svg";

// google sign in method powered by firebase auth system
const Login = () => {
	const signin = () => {
		auth.signInWithPopup(provider).catch((error) => alert(error.message));
	};

	const Images = () => {
		return (
			<>
				<Hidden smDown>
					<img src={chat} id="img1"></img>
					<img src={join4} id="img2"></img>
				</Hidden>
				<Hidden mdUp>
					<img src={login3} id="img_mobile"></img>
				</Hidden>
			</>
		);
	};

	const Title = () => {
		return (
			<>
				<Grid item xs={1} md={4}></Grid>
				<Grid item xs={10} md={4} id="title_container">
					<div id="title">Login</div>
				</Grid>
				<Grid item xs={1} md={4}></Grid>
			</>
		);
	};

	let history = useHistory();

	const Buttons = () => {
		return (
			<Grid item xs={12}>
				<Grid container xs={12} direction="row">
					<Grid item xs={1} md={4}></Grid>
					<Grid
						item
						xs={10}
						md={4}
						id="content"
						style={{ borderRadius: "0px 0px 5px 5px" }}
					>
						<Grid
							container
							xs={12}
							direction="column"
							alignItems="center"
							justify="center"
						>
							<div id="button_container">
								<Grid item xs={12}>
									<Button onClick={signin} id="bt1">
										Sign In
									</Button>
								</Grid>
								<Grid item xs={12}>
									<Button
										id="bt2"
										onClick={() => history.push("/")}
									>
										cancel
									</Button>
								</Grid>
							</div>
						</Grid>
					</Grid>
					<Grid item xs={1} md={4}></Grid>
				</Grid>
			</Grid>
		);
	};
	return (
		<div>
			<div id="join-room-page">
				<Images />
				<Grid container>
					<Title />
					<Buttons />
				</Grid>
			</div>
		</div>
	);
};

export default Login;
