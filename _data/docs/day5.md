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
`initialValues` içinde o form serisi içinde kullanacağımız field'ları yerleştiriyoruz bu alanda belirlediğimiz tanımlar ile inputlar içindeki name'lerin aynı olması gereklidir.

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

> **Aslında bu formik'i kullanmanın uzun yöntemiydi.**



































































































































































































---

# Kaynakça 

1. 
