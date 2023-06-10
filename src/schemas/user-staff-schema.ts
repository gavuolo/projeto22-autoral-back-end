import { UserStaff } from '@prisma/client';
import Joi from 'joi';
import validator from 'cpf-cnpj-validator';

const cpf = require('joi').extend(validator)

export const createUserStaffSchema = Joi.object<UserStaff>({
    name: Joi.string().required(),
    socialName: Joi.string(),
    cpf: cpf.document().cpf().required(),
    phone: Joi.number().required(),
    birthday: Joi.number().integer().required(),
    profession: Joi.string().required(),
    council: Joi.string().required(),
    councilRegistration: Joi.string().required(),
    councilState: Joi.string().required(),
    specialityId: Joi.number().required(),
})