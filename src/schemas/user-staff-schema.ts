import { UserStaff } from '@prisma/client';
import Joi from 'joi';
import validator from 'cpf-cnpj-validator';

const cpf = require('joi').extend(validator)
const date = require('joi').extend(require('@joi/date'));

export const createUserStaffSchema = Joi.object<UserStaff>({
    name: Joi.string().required(),
    socialName: Joi.string(),
    cpf: cpf.document().cpf().required(),
    phone: Joi.number().required(),
    gender: Joi.string().required(),
    birthday: date.date().format("DD/MM/YYYY"),
    profession: Joi.string().required(),
    council: Joi.string().required(),
    councilRegistration: Joi.number().required(),
    councilState: Joi.string().required(),
    specialityId: Joi.number(),
    userId: Joi.number()
})

export const createSpecialitySchema = Joi.object({
    name: Joi.string(),
})