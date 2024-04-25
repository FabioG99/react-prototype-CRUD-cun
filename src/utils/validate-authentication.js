// Libraries
import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Correo electrónico no valido')
        .test('valid-domain', 'Correo electrónico no valido', function (value) {
            if (value) {
                const domain = value.split('@')[1];
                return domain && domain.match(/\.[a-zA-Z]{2,}$/) !== null;
            }
            return false;
        })
        .required('Requerido'),
    password: Yup.string()
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .required('Requerido'),
})