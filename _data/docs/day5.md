### `Kodluyoruz Earlybird Front-End Talent Bootcamp`

## `GÜN 5 - 2021.01.09`
> desc

Bu bölümde;

- [title](#title)
- [Kaynakça](#kaynakça)

konularından bahsedeceğiz.

---

> Ödev 2 örneğinde kullanılan js kütüphanesi "https://mavo.io/docs/js"

# React Form Managment - Formik

Formk, form işlemlerini yaparken bize yardımcı olan bir araçtır. Form işlemlerini manual olarak da yapmak pekala mümkündür. Manual stateler ile her input için tanımlar oluşturp bunu sağlayabiliriz fakat bi yerden sonra bu idare edilmesi zor hale gelmektedir. Bu sebplerden ötürü Formik gibi bu iş için özel oluşturulmuş araçlardan faydalanırız.

Gelin şimdi formik hakkında konuşalım.

```js
// Example - RegisterForm
import React from "react";

import { Formik } from "formik";

function RegisterForm() {
	return (
		<div>
			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
				}}
				onSubmit={(values, bag) => {
					console.log(values);

          setTimeout{()=> {
            bag.setSubmitting(false )
          }, 1000}
				}}
			>
				{({ handleChange, handleBlur, handleSubmit, values, isSubmitting, dirty }) => (
					<form onSubmit={handleSubmit}>
            <div>isDirty: {dirty.toString()}</div>
            <div>isSubmitting: {isSubmitting.toString()}</div>
            <br/>
            <br/>
						<input
							id="firstName"
							name="firstName"
							placeholder="First Name"
							value={values.firstName}
							onChange={handleChange}
							onBlur={handleBlur}
							// disabled={isSubmitting}
						/>
						<button type="submit" disabled={isSubmitting}>
							{formik.isSubmitting ? "Loading..." : "Submit"}
						</button>
					</form>
				)}
			</Formik>
		</div>
	);
}

export default RegisterForm;
```

Burada örnek bir formik kullanımı görmektesiniz. 

```js
<Formik
  initialValues={{
    firstName: "",
    lastName: "",
  }}
```
`initialValues` içinde o form serisi içinde kullanacağımız field'ları yerleştiriyoruz bu alanda belirlediğimiz tanımlar ile inputlar içindeki `value`'lerIn aynı olması gereklidir.

```diff
<Formik
  initialValues={{
+		firstName: "",
    lastName: "",
  }}
  onSubmit={async (values) => {
    console.log(values);
  }}
>
  {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
    <form onSubmit={handleSubmit}>
      <input
        id="firstName"
+			  name="firstName"
        placeholder="First Name"
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
        // disabled={formik.isSubmitting}
      />
```

<p align="center">
  <img alt="img-name" src="../images/day-5/2021-03-05-04-10-51.png" width="800">
   <br>
	<em>initial</em>
</p>

<p align="center">
  <img alt="img-name" src="../images/day-5/2021-03-05-04-14-08.png" width="800">
  <br>
	<em>while submitting</em>
</p>

<p align="center">
  <img alt="img-name" src="../images/day-5/2021-03-05-04-14-39.png" width="800">
  <br>
	<em>after submitting</em>
</p>

**Nedir bu isDirty ve isSubmitting?**

`isDirty` input field'ın içi dolu mu boş mu bize onun değerini dönüyor. Bu sayede input field boşken submit button'u disabled edebiliriz. 

`isSubmitting` submit buton'a bastığımızda true oluyor gönderme işlemi bittikten sonra tekrar false oluyor. 

eğer input field içindeki `disabled` özelliğini isSubmitting'e göre ayarlarsanız gönderme işlemi esnasında input'u kitleyecektir.

```diff
	<input
    id="firstName"
    name="firstName"
    placeholder="First Name"
    value={values.firstName}
    onChange={handleChange}
    onBlur={handleBlur}
+   // disabled={isSubmitting}
  />
```

- bag içinde submitting esansında kullanabileceğimiz eşyalar var. "**Submitting çantası**"

<p align="center">
  <img alt="img-name" src="../images/day-5/2021-03-05-04-30-01.png" width="800">
  <br>
	<em>bag</em>
</p>


> ## **Aslında bu formik'i kullanmanın uzun yöntemiydi.**

Formik hook'undan faydalanıp daha temiz sonuçlar elde edebiliriz.

<p align="center">
  <img alt="img-name" src="../images/day-5/2021-03-05-04-26-11.png" width="800">
  <br>
	<em>
    <a href="https://formik.org/docs/api/useFormik">useFormik</a>
  </em>
</p>

```js
import React from "react";

import axios from "axios";

import styles from "./styles.module.css";
import { useFormik } from "formik";
import validations from "./validations";

function RegisterForm() {
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
		},
		onSubmit: (values, bag) => {
			console.log(values);

			setTimeout(() => {
				bag.setSubmitting(false);
			}, 1000);
		},
	});

	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<div>isDirty: {formik.dirty.toString()}</div>
				<div>isSubmitting: {formik.isSubmitting.toString()}</div>
				<br />
				<br />
				<div>
					<label>First Name</label>
					<input
						id="firstName"
						name="firstName"
						placeholder="First Name"
						value={formik.values.firstName}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						disabled={formik.isSubmitting}
					/>
					{formik.errors.firstName && formik.touched.firstName && (
						<div className={styles.error}>{formik.errors.firstName}</div>
					)}
				</div>

				<div>
					<label>Last Name</label>
					<input
						id="lastName"
						name="lastName"
						placeholder="Last Name"
						value={formik.values.lastName}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						disabled={formik.isSubmitting}
					/>
					{formik.errors.lastName && formik.touched.lastName && (
						<div className={styles.error}>{formik.errors.lastName}</div>
					)}
				</div>

				<button type="submit" disabled={formik.isSubmitting}>
					{formik.isSubmitting ? "Loading..." : "Submit"}
				</button>
			</form>
		</div>
	);
}

export default RegisterForm;

```

<p align="center">
  <img alt="img-name" src="../images/day-5/2021-03-05-05-41-03.png" width="800">
</p>


Bu gördüğümüz üzere daha temiz bir kullanım.


# Form Validation - Yupjs
> https://github.com/jquense/yup






















































































































































































---

# Kaynakça 

1. 
