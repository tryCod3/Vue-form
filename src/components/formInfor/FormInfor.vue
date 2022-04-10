<template>
	<b-container class="container_form">
		<div class="col-sm-2 col-md-4 col-xl-3"></div>
		<div class="form__wrapper col-sm-8 col-md-4 col-xl-6">
			<b-col class="text-center form_wrapper_user">
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
							v-model="user.username"
							@keyup="handleForm($event, checkText($event))"
						></b-form-input>
					</b-col>
					<ul class="error error-username"></ul>
				</b-form-group>
				<b-form-group class="form_group">
					<b-col style="text-align: left" cols="3">
						<label for="age">age: </label>
					</b-col>
					<b-col>
						<b-form-input
							id="age"
							v-model="user.age"
							@keyup="handleForm($event, checkNumber($event))"
						></b-form-input>
					</b-col>
					<ul class="error error-age"></ul>
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
							@keyup="handleForm($event, checkText($event))"
						></b-form-input>
					</b-col>
					<ul class="error error-adress"></ul>
				</b-form-group>
				<b-form-group class="form_group">
					<b-col style="text-align: left" cols="3">
						<label for="color">color: </label>
					</b-col>
					<b-col>
						<select
							id="color"
							v-model="user.color"
							@change="handleTogle"
						>
							<option value="">Please select an option</option>
							<option value="red">đỏ</option>
							<option value="yellow">vàng</option>
						</select>
					</b-col>
					<ul class="error error-color"></ul>
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
									v-model="user.sex"
									@change="handleTogle"
								/>
								<label for="sex">Nam</label>
							</b-col>
							<b-col>
								<input
									type="radio"
									id="sex"
									name="sex"
									value="girl"
									v-model="user.sex"
									@change="handleTogle"
								/>
								<label for="sex">Nữ</label>
							</b-col>
						</b-row>
					</b-col>
					<ul class="error error-sex"></ul>
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
									id="likes"
									name="ball"
									value="ball"
									@click="handlePushLike"
								/>
								<label for="ball"> bóng đá </label>
							</b-col>
							<b-col>
								<input
									type="checkbox"
									id="likes"
									name="swing"
									value="swing"
									@click="handlePushLike"
								/>
								<label for="swing"> bơi lội </label><br />
							</b-col>
							<b-col>
								<input
									type="checkbox"
									id="likes"
									name="ball"
									value="book"
									@click="handlePushLike"
								/>
								<label for="book"> đọc sách </label>
							</b-col>
						</b-row>
					</b-col>
					<ul class="error error-likes"></ul>
				</b-form-group>

				<b-form-group class="form_group">
					<b-col>
						<input
							id="avatar"
							type="file"
							placeholder="Choose avatar file..."
							@change="getFile"
						/>
					</b-col>
					<ul class="error error-avatar"></ul>
				</b-form-group>
				<b-row class="justify-content-between">
					<b-col cols="6">
						<b-button
							@click="handleSubmit"
							variant="success"
							style="margin: auto"
							>submit</b-button
						>
					</b-col>
					<b-col cols="6">
						<b-button variant="warning">reset form</b-button>
					</b-col>
				</b-row>
			</b-col>

			<!-- commit gia dien -->
		</div>
		<div class="col-sm-2 col-md-4 col-xl-3"></div>
	</b-container>
</template>

<script>
import {
	isEmpty,
	isOver,
	isType,
	isSmall,
	isFileImg,
} from "../../Util/ValidateForm.js";
export default {
	methods: {
		checkArray(e) {
			const type = e.target?.id || e;
			const checkE = isEmpty(this.user[type]);
			return [checkE];
		},
		checkBox(e) {
			const type = e.target?.id || e;
			const target = this.user[type];
			const checkE = isEmpty(type === "avatar" ? target.name : target);
			if (type === "avatar") {
				const q = this.user.avatar.name.split(".");
				if (q.length === 2) {
					const checkI = isFileImg(q[1]);
					if (!checkI.status) return [checkE, checkI];
				}
			}
			return [checkE];
		},
		checkText(e) {
			const type = e.target?.id || e;
			const checkE = isEmpty(this.user[type]);
			const checkO = isOver(this.user[type], this.over.length[type]);
			return [checkE, checkO];
		},
		checkNumber(e) {
			const type = e.target?.id || e;
			const checkE = isEmpty(this.user[type]);
			const checkO = isOver(this.user[type], 100, "number");
			const checkT = isType(+this.user[type], "number");
			if (checkT.status) {
				const checkS = isSmall(this.user[type], 10);
				return [checkE, checkO, checkS, checkT];
			}
			return [checkE, checkO, checkT];
		},
		handleForm(e, arrcheck) {
			const type = e.target?.id || e;
			const elements = document.getElementsByClassName(
				`error-${type}`
			)[0];
			console.log(type, elements);
			elements.innerHTML = "";
			const element = document.createElement("li");
			for (let i = 0; i < arrcheck.length; i++) {
				if (!arrcheck[i].status) {
					element.innerHTML += `<li>${arrcheck[i].message}</li>`;
				}
			}
			if (element.innerHTML !== "") elements.appendChild(element);
		},
		handleSubmit() {
			this.handleForm("username", this.checkText("username"));
			this.handleForm("age", this.checkNumber("age"));
			this.handleForm("adress", this.checkText("adress"));
			this.handleForm("color", this.checkBox("color"));
			this.handleForm("sex", this.checkBox("sex"));
			this.handleForm("likes", this.checkArray("likes"));
			this.handleForm("avatar", this.checkBox("avatar"));
		},
		handlePushLike(e) {
			const type = e.target.name || e;
			const index = this.user.likes.findIndex(item => item === type);
			if (index === -1) this.user.likes.push(type);
			else this.user.likes.splice(index, 1);
			this.handleForm(e, this.checkArray(e));
		},
		handleTogle(e) {
			this.handleForm(e, this.checkBox(e));
		},
		getFile(e) {
			const file = e.target.files[0];

			this.user.avatar = {
				name: file?.name || "",
			};

			this.handleForm(e, this.checkBox(e));
		},
	},
	data: () => {
		return {
			title: "Form User",
			user: {
				username: "",
				age: 10,
				adress: "",
				color: "",
				sex: "",
				likes: [],
				avatar: {
					name: "",
				},
			},
			over: {
				length: {
					username: 10,
					adress: 30,
				},
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
	display: flex;
	flex-direction: row;
}
.form_wrapper_user {
	background-color: bisque;
	border-radius: 8px;
	padding: 2%;
}
.error {
	color: red !important;
}
</style>
