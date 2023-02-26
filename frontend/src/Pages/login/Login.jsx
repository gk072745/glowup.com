import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Checkbox,
	Stack,
	Link,
	Button,
	Heading,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSignIn, useSignOut } from "react-auth-kit";
import { useIsAuthenticated } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

const divStyles = {
	boxShadow: "1px 2px 9px #F4AAB9",
	margin: "20px",
	padding: "20px",
};
export default function Login() {
	// axios.defaults.withCredentials = true;
	const [email, setMail] = useState("");
	const [password, setPassword] = useState("");
	const URL = "https://periwinkle-sheep-hem.cyclic.app";
	// const URL = "http://localhost:8080";

	const navigate = useNavigate();

	const signIn = useSignIn();
	const isAuthenticated = useIsAuthenticated();
	const signOut = useSignOut();
	const toast = useToast();
	const handleSubmit = async () => {
		try {
			let req = await axios.post(`${URL}/user/login`, {
				email: email,
				password: password,
			});
			signIn({
				token: req.data.token,
				expiresIn: 3600,
				authState: { email, admin: req.data.details.isAdmin },
			});
			toast({
				title: "Login success",
				description: "You will be redirected to homepage shortly.",
				status: "success",
				duration: 2000,
				isClosable: true,
			});
			// setTimeout(() => navigate("/"), 2000);
			console.log(req);
		} catch (err) {
			toast({
				title: "Something went wrong",
				description: "Please check your details and try again.",
				status: "error",
				duration: 2000,
				isClosable: true,
			});
		}
		// Cookies.set("jwt_token", req.data.token);
		// loginUser(dispatch, { email: email, password: password });
	};

	// ! experminetal => not reuired to keep
	const getstuff = async () => {
		let req = await axios.get(`${URL}/user/getdetails`, {
			withCredentials: true,
		});
		// fetch(`${URL}/user/getdetails`)
		// 	.then((res) => res.json())
		// 	.then((res) => console.log(res))
		// 	.catch((err) => console.log(err));
		console.log(req);
	};

	const singout = async () => {
		signOut();
	};
	// ^ end of getstuff

	return (
		<Flex
			minH={"100vh"}
			align={"center"}
			justify={"center"}
			bg={useColorModeValue("gray.50", "gray.800")}
		>
			{/* for testing purposes */}
			<button onClick={getstuff}>button</button>
			<br />
			<button onClick={singout}>sign out</button>
			{isAuthenticated() ? "Yes" : "No"}
			{/* end of test */}
			<div style={divStyles}>
				<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
					<Stack align={"center"}>
						<Heading fontSize={"4xl"}>Please Login </Heading>
						<Text fontSize={"lg"} color={"gray.600"}>
							Well come to <Link color={"blue"}>Glow UP</Link>
						</Text>
					</Stack>
					<Box
						rounded={"lg"}
						bg={useColorModeValue("white", "gray.700")}
						boxShadow={"lg"}
						p={8}
					>
						<Stack spacing={4}>
							<FormControl id="email">
								<FormLabel>Email address</FormLabel>
								<Input
									type="email"
									onChange={(e) => setMail(e.target.value)}
									value={email}
								/>
							</FormControl>
							<FormControl id="password">
								<FormLabel>Password</FormLabel>
								<Input
									type="password"
									onChange={(e) =>
										setPassword(e.target.value)
									}
									value={password}
								/>
							</FormControl>
							<Stack spacing={10}>
								<Stack
									direction={{ base: "column", sm: "row" }}
									align={"start"}
									justify={"space-between"}
								>
									<Checkbox>Remember me</Checkbox>
									<Link color={"blue"}>Forgot password?</Link>
								</Stack>
								<Button
									bg={"blue.400"}
									color={"white"}
									_hover={{
										bg: "blue",
									}}
									onClick={handleSubmit}
								>
									Sign in
								</Button>
							</Stack>
						</Stack>
					</Box>
				</Stack>
			</div>
		</Flex>
	);
}
