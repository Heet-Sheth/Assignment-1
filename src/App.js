import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<form>
					<input
						type="email"
						class="form-content"
						id="email"
						placeholder="Ex. someone@xyz.com"
						required
					/>
					<input
						type="password"
						class="form-content"
						id="password"
						placeholder="Password"
						required
					/>
					<input
						type="button"
						class="form-content"
						value="submit"
						onclick="display()"
					/>
				</form>
			</header>
		</div>
	);
}
export default App;
