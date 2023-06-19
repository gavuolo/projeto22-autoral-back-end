import Joi from 'joi';
import validator from 'cpf-cnpj-validator';
import { Address, Patient } from '@prisma/client';

const cpf = require('joi').extend(validator)
const date = require('joi').extend(require('@joi/date'));

export const createMedicalRecordSchema = Joi.object<Patient>({
    name: Joi.string().required(),
    socialName: Joi.string(),
    phone: Joi.string().required(),
    cpf: cpf.document().cpf().required(),
    rg: Joi.number().required(),
    gender: Joi.string().required(),
    birthday: date.date().format("DD/MM/YYYY").required(),
    maritalStatus: Joi.string(),
    birthPlace: Joi.string().required(),
    nationality: Joi.string().required(),
    email: Joi.string().email().required(),
    schooling: Joi.string().required(),
    occupation: Joi.string(),
    observation: Joi.string(),
    addressId: Joi.number().required()
})

export const createPatientAddressSchema = Joi.object<Address>({
    cep: Joi.number().required(),
    street: Joi.string().required(),
    city: Joi.string().required(),
    number: Joi.number().required(),
    state: Joi.string().required(),
    neighborhood: Joi.string(),
    addressDetail: Joi.string(),
})