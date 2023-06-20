import { UserRecepcionist } from '@prisma/client';
import Joi from 'joi';
import validator from 'cpf-cnpj-validator';

const cpf = require('joi').extend(validator)
const date = require('joi').extend(require('@joi/date'));

export const createUserRecepcionistSchema = Joi.object<UserRecepcionist>({
    name: Joi.string().required(),
    socialName: Joi.string(),
    cpf: cpf.document().cpf().required(),
    phone: Joi.string().min(11).max(11).required(),
    gender: Joi.string().required(),
    birthday: date.date().format("DD/MM/YYYY"),
    userId: Joi.number()
})

export const updateUserRecepcionistSchema = Joi.object<UserRecepcionist>({
    name: Joi.string(),
    socialName: Joi.string(),
    phone: Joi.string().min(11).max(11),
    gender: Joi.string(),
    birthday: date.date().format("DD/MM/YYYY"),
    userId: Joi.number()
})