const FormPermohonan = require('../model/formPermohonan');
const LogClient = require('../model/log_client');
const MeetingClient = require('../model/meetingClient');
const MeetingKantor = require('../model/meetingKantor');
const Pegawai = require('../model/pegawai');
const Persidangan = require('../model/persidangan');
const SuperUser = require('../model/superUser');
const sequelize = require('./db');

FormPermohonan.hasOne(LogClient);
LogClient.belongsTo(FormPermohonan);

Pegawai.hasMany(LogClient);
LogClient.belongsTo(Pegawai);

FormPermohonan.hasMany(MeetingClient);
MeetingClient.belongsTo(FormPermohonan);

FormPermohonan.hasMany(Persidangan);
Persidangan.belongsTo(FormPermohonan);

Pegawai.hasMany(MeetingKantor);
MeetingKantor.belongsTo(Pegawai)

const association = async()=>{
    try {
    await sequelize.sync({});
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = association;