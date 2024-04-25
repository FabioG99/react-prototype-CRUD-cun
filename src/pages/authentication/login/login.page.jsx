// Libraries
import { Input } from 'antd';
import { useFormik } from "formik";

// Assets
import { Assets } from "../../../assets";

// styles
import "./login.page.scss";

// utils
import { loginSchema } from '../../../utils/validate-authentication';

export const LoginPage = () => {

  const { handleChange, setFieldTouched, values, errors, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    initialErrors: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
  });

  const validateUser = () => {
    console.log(values)
  }

  return (
    <div className="login-page__container">
      <div className="login-page__form__container">
        <div className="login-page__form">
          <img
            alt="icon_cun"
            src={Assets.SharedIcons.icon_cun}
            className="login-page__form__icon"
          />
          <div className='login-page__form__container-title'>
            <span className="login-page__form__title">
              Bienvenido de nuevo
            </span>
            <span className="login-page__form__subtitle">
              Ingresa tus credenciales de acceso
            </span>
          </div>
          <div className='login-page__form__inputs-container'>
            <div className='login-page__form__input__content'>
              <Input
                value={values.email}
                placeholder='Correo electronico'
                onBlur={() => setFieldTouched("email")}
                className='login-page__form__input__email'
                onChange={(email) => handleChange("email")(email)}
                status={(touched.email && errors.email) ? "error" : ""}
              />
              <span className='login-page__form__error'>
                {(touched.email && errors.email) ? errors.email : null}
              </span>
            </div>
            <div className='login-page__form__input__content'>
              <Input.Password
                value={values.password}
                placeholder='Contraseña'
                onBlur={() => setFieldTouched("password")}
                className='login-page__form__input__password'
                onChange={(password) => handleChange("password")(password)}
                status={(touched.password && errors.password) ? "error" : ""}
              />
              <span className='login-page__form__error'>
                {(touched.password && errors.password) ? errors.password : null}
              </span>
            </div>
          </div>
          <button
            onClick={() => validateUser()}
            className='login-page__form__button'
            disabled={Object.keys(errors).length !== 0}
          >
            Iniciar sesión
          </button>
        </div>
      </div>
      <div className="login-page__students__container">
        <img
          alt="icon_students"
          src={Assets.SharedIcons.icon_students}
          className="login-page__students__icon"
        />
      </div>
    </div>
  )
};