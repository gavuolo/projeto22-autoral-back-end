-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "userType" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserRecepcionist" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "socialName" TEXT,
    "gender" TEXT NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "phone" VARCHAR(11) NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3),
    "userId" INTEGER NOT NULL,

    CONSTRAINT "UserRecepcionist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserStaff" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "socialName" TEXT,
    "gender" TEXT NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "phone" VARCHAR(11) NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "profession" TEXT NOT NULL,
    "council" TEXT NOT NULL,
    "councilRegistration" INTEGER NOT NULL,
    "councilState" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "specialityId" INTEGER NOT NULL,

    CONSTRAINT "UserStaff_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Speciality" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Speciality_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Patient" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "socialName" TEXT,
    "phone" VARCHAR(11) NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "rg" VARCHAR(8),
    "birthday" TIMESTAMP(3) NOT NULL,
    "maritalStatus" TEXT,
    "birthPlace" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "observation" TEXT NOT NULL,
    "schooling" TEXT NOT NULL,
    "occupation" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "responsibleId" INTEGER,
    "addressId" INTEGER NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Consultation" (
    "id" SERIAL NOT NULL,
    "prescriptions" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "staffId" INTEGER NOT NULL,
    "patientId" INTEGER NOT NULL,

    CONSTRAINT "Consultation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResponsiblePerson" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "socialName" TEXT,
    "relationship" TEXT NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "phone" VARCHAR(11) NOT NULL,
    "rg" VARCHAR(8),
    "birthday" TIMESTAMP(3) NOT NULL,
    "gender" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "observation" TEXT,
    "schooling" TEXT NOT NULL,
    "occupation" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "ResponsiblePerson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "cep" VARCHAR(8) NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "state" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "addressDetail" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserRecepcionist_id_key" ON "UserRecepcionist"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserRecepcionist_cpf_key" ON "UserRecepcionist"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "UserRecepcionist_phone_key" ON "UserRecepcionist"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "UserStaff_id_key" ON "UserStaff"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserStaff_cpf_key" ON "UserStaff"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "UserStaff_phone_key" ON "UserStaff"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "UserStaff_councilRegistration_key" ON "UserStaff"("councilRegistration");

-- CreateIndex
CREATE UNIQUE INDEX "Session_id_key" ON "Session"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Speciality_id_key" ON "Speciality"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_id_key" ON "Patient"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_phone_key" ON "Patient"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_cpf_key" ON "Patient"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_rg_key" ON "Patient"("rg");

-- CreateIndex
CREATE UNIQUE INDEX "Consultation_id_key" ON "Consultation"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ResponsiblePerson_id_key" ON "ResponsiblePerson"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ResponsiblePerson_cpf_key" ON "ResponsiblePerson"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "ResponsiblePerson_phone_key" ON "ResponsiblePerson"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "ResponsiblePerson_rg_key" ON "ResponsiblePerson"("rg");

-- CreateIndex
CREATE UNIQUE INDEX "Address_id_key" ON "Address"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Address_cep_key" ON "Address"("cep");

-- AddForeignKey
ALTER TABLE "UserRecepcionist" ADD CONSTRAINT "UserRecepcionist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserStaff" ADD CONSTRAINT "UserStaff_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserStaff" ADD CONSTRAINT "UserStaff_specialityId_fkey" FOREIGN KEY ("specialityId") REFERENCES "Speciality"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_responsibleId_fkey" FOREIGN KEY ("responsibleId") REFERENCES "ResponsiblePerson"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consultation" ADD CONSTRAINT "Consultation_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "UserStaff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consultation" ADD CONSTRAINT "Consultation_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
