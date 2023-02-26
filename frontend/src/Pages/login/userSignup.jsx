import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	HStack,
	InputRightElement,
	Stack,
	Button,
	Heading,
	Text,
	useColorModeValue,
	Link,
	Alert,
	AlertIcon,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const divStyles = {
	boxShadow: "1px 2px 9px #F4AAB9",
	padding: "10px",
};

export default function SignupCard() {
	const [showPassword, setShowPassword] = useState(false);
	const [showPassword2, setShowPassword2] = useState(false);

	const [username, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [match, setMatch] = useState(false);
	const [check, setCheck] = useState("");
	// redux store
	const { login, isLoggedin, isAdmin, userdetails } = useSelector(
		(store) => store.userManager
	);
	const dispatch = useDispatch();
	// redux end
	// router navigate
	const navigate = useNavigate();
	// end router navigate
	const handleSubmit = async () => {
		const URL = "http://localhost:8080";
		console.log(username, email, password);
		axios.defaults.withCredentials = true;
		let res = await axios.post(`${URL}/user/register`, {
			name: username,
			email: email,
			password: password,
		});
		console.log(res);
	};
	useEffect(() => {
		if (isLoggedin) {
			navigate("/");
		}
	}, []);
	useEffect(() => {
		setMatch(check === password);
	}, [check, password]);

	return (
		<Flex
			minH={"100vh"}
			align={"center"}
			justify={"center"}
			bg={useColorModeValue("gray.50", "gray.800")}
		>
			<div style={divStyles}>
				<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
					<Stack align={"center"}>
						<Heading fontSize={"4xl"} textAlign={"center"}>
							SIGN UP
						</Heading>
						<Text fontSize={"lg"} color={"gray.600"}>
							WELL COME TO GLOW UP ✌️
						</Text>
					</Stack>
					<Box
						rounded={"lg"}
						bg={useColorModeValue("white", "gray.700")}
						boxShadow={"lg"}
						p={8}
					>
						<Stack spacing={4}>
							<Box>
								<FormControl id="firstName" isRequired>
									<FormLabel>First Name</FormLabel>
									<Input
										type="text"
										value={username}
										onChange={(e) =>
											setName(e.target.value)
										}
										autoComplete="off"
									/>
								</FormControl>
							</Box>
							<FormControl id="email" isRequired>
								<FormLabel>Email address</FormLabel>
								<Input
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									autoComplete="off"
								/>
							</FormControl>
							<FormControl id="password" isRequired>
								<FormLabel>Password</FormLabel>
								<InputGroup>
									<Input
										type={
											showPassword ? "text" : "password"
										}
										value={password}
										onChange={(e) =>
											setPassword(e.target.value)
										}
									/>
									<InputRightElement h={"full"}>
										<Button
											variant={"ghost"}
											onClick={() =>
												setShowPassword(
													(showPassword) =>
														!showPassword
												)
											}
										>
											{showPassword ? (
												<ViewIcon />
											) : (
												<ViewOffIcon />
											)}
										</Button>
									</InputRightElement>
								</InputGroup>
								<FormLabel my={3}>Confirm Password</FormLabel>
								<InputGroup>
									<Input
										type={
											showPassword2 ? "text" : "password"
										}
										value={check}
										onChange={(e) =>
											setCheck(e.target.value)
										}
									/>
									<InputRightElement h={"full"}>
										<Button
											variant={"ghost"}
											onClick={() =>
												setShowPassword2(
													(showPassword2) =>
														!showPassword2
												)
											}
										>
											{showPassword2 ? (
												<ViewIcon />
											) : (
												<ViewOffIcon />
											)}
										</Button>
									</InputRightElement>
								</InputGroup>
								{match ? (
									""
								) : (
									<Alert status="error" my={2}>
										<AlertIcon />
										Password doesn't match.
									</Alert>
								)}
							</FormControl>
							<Stack spacing={10} pt={2}>
								<Button
									loadingText="Submitting"
									size="lg"
									bg={"blue.400"}
									color={"white"}
									_hover={{
										bg: match ? "blue" : "grey",
									}}
									onClick={handleSubmit}
									disabled={match}
								>
									Sign up
								</Button>
							</Stack>
							<Stack pt={6}>
								<Text align={"center"}>
									Already a user?{" "}
									<Link
										color={"blue"}
										as={RouterLink}
										to="/login"
									>
										Login
									</Link>
								</Text>
							</Stack>
						</Stack>
					</Box>
				</Stack>
			</div>
		</Flex>
	);
}
