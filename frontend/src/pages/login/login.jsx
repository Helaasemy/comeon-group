import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react';

const Login = ({ credentials }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const logUser = () => {
		credentials({ email, password });
	};
	return (
		<Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
			<Grid.Column style={{ maxWidth: 450 }}>
				<Image src={logo} />
				<Header as="h2" color="teal" textAlign="center">
					Log-in to your account
				</Header>
				<Form size="large" onSubmit={logUser}>
					<Segment stacked>
						<Form.Input
							fluid
							icon="user"
							iconPosition="left"
							placeholder="E-mail address"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Form.Input
							fluid
							icon="lock"
							iconPosition="left"
							placeholder="Password"
							type="password"
							name="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>

						<Button color="teal" fluid size="large" type="submit">
							Login
						</Button>
					</Segment>
				</Form>
			</Grid.Column>
		</Grid>
	);
};
export default Login;
