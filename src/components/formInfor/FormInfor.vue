<template>
	<b-container class="container_form">
		<b-row class="form__wrapper justify-content-md-center">
			<b-col cols="1"> </b-col>
			<b-col cols="5" class="text-center form_wrapper_user">
				<h1 style="color: #a93131">{{ title }}</h1>
				<b-form-group class="form_group">
					<b-col style="text-align: left" cols="3">
						<label for="username">user name: </label>
					</b-col>
					<b-col>
						<b-form-input
							type="text"
							id="username"
							placeholder="user name..."
							v-model="user.name"
						></b-form-input>
					</b-col>
					<ul class="error"></ul>
				</b-form-group>
				<b-form-group class="form_group">
					<b-col style="text-align: left" cols="3">
						<label for="age">age: </label>
					</b-col>
					<b-col>
						<b-form-input
							type="number"
							id="age"
							v-model="user.age"
							min="10"
							max="100"
						></b-form-input>
					</b-col>
					<ul class="error"></ul>
				</b-form-group>
				<b-form-group class="form_group">
					<b-col style="text-align: left" cols="3">
						<label for="adress">adress: </label>
					</b-col>
					<b-col>
						<b-form-input
							type="text"
							id="adress"
							placeholder="adress..."
							v-model="user.adress"
						></b-form-input>
					</b-col>
					<ul class="error"></ul>
				</b-form-group>
				<b-form-group class="form_group">
					<b-col style="text-align: left" cols="3">
						<label for="color">color: </label>
					</b-col>
					<b-col>
						<b-form-select
							id="color"
							v-model="user.color"
							:options="optionColor"
						>
						</b-form-select>
					</b-col>
					<ul class="error"></ul>
				</b-form-group>
				<b-form-group class="form_group">
					<b-col style="text-align: left" cols="3">
						<label for="sex">Male: </label>
					</b-col>
					<b-col>
						<b-row class="justify-content-between">
							<b-col>
								<input
									type="radio"
									id="sex"
									name="sex"
									value="boy"
									v-model="user.male"
								/>
								<label for="sex">Nam</label>
							</b-col>
							<b-col>
								<input
									type="radio"
									id="sex"
									name="sex"
									value="girl"
									v-model="user.male"
								/>
								<label for="sex">Nữ</label>
							</b-col>
						</b-row>
					</b-col>
					<ul class="error"></ul>
				</b-form-group>
				<b-form-group class="form_group">
					<b-col style="text-align: left" cols="3">
						<label for="ball">Sở thích: </label>
					</b-col>
					<b-col>
						<b-row class="justify-content-between">
							<b-col>
								<input
									type="checkbox"
									id="ball"
									name="ball"
									value="ball"
								/>
								<label for="ball"> bóng đá </label>
							</b-col>
							<b-col>
								<input
									type="checkbox"
									id="swing"
									name="swing"
									value="swing"
								/>
								<label for="swing"> bơi lội </label><br />
							</b-col>
							<b-col>
								<input
									type="checkbox"
									id="book"
									name="ball"
									value="book"
								/>
								<label for="book"> đọc sách </label>
							</b-col>
						</b-row>
					</b-col>
					<ul class="error"></ul>
				</b-form-group>

				<b-form-group class="form_group">
					<b-col>
						<b-form-file
							id="img"
							v-model="user.avatar"
							:state="Boolean(avatar)"
							placeholder="Choose avatar file..."
							accept=".jpg, .png"
						></b-form-file>
					</b-col>
					<ul class="error"></ul>
				</b-form-group>
				<b-row class="justify-content-between">
					<b-col cols="6">
						<b-button variant="success" style="margin: auto"
							>submit</b-button
						>
					</b-col>
					<b-col cols="6">
						<b-button variant="warning">reset form</b-button>
					</b-col>
				</b-row>
			</b-col>
			<b-col cols="1"> </b-col>
			<!-- commit gia dien -->
		</b-row>
	</b-container>
</template>

<script>
export default {
	data: () => {
		return {
			title: "Form User",
			user: {
				name: "",
				age: 10,
				adress: "",
				color: "",
				male: "",
				like: [],
				avatar: "",
			},
			optionColor: [
				{
					value: "",
					text: "Please select an option",
				},
				{
					value: "red",
					text: "đỏ",
				},
				{
					value: "yellow",
					text: "vàng",
				},
			],
		};
	},
};
</script>

<style>
.container_form {
	margin-top: 5%;
}
.form_wrapper_user {
	background-color: bisque;
	border-radius: 8px;
	padding: 2%;
}
</style>
