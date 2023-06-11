const FormPermohonan = require("../model/formPermohonan");
const LogClient = require("../model/log_client");
const MeetingClient = require("../model/meetingClient");
const MeetingKantor = require("../model/meetingKantor");
const Pegawai = require("../model/pegawai");
const Persidangan = require("../model/persidangan");
const SuperUser = require("../model/superUser");
const User = require("../model/user");

const handlerPostFormPermohonan = async(req,res,next)=>{
    try {
        const {nama, alamat_email, file, namaKasus} = req.body;
        const currForm = await FormPermohonan.create({nama,alamat_email, file});
        await LogClient.create({FormPermohonanId: currForm.id, status: "PROSES", namaClient: nama, namaKasus});
        res.json({message: "Upload Form Success"})
    } catch (error) {
        next(error);
    }
}

const handlerPostPegawai = async(req,res,next)=>{
    try {
        const {nama, posisi, alamat, no_hp} = req.body;
        await Pegawai.create({nama,posisi,alamat,no_hp});
        res.json({message: "Create Pegawai Success"});
    } catch (error) {
        next(error);
    }
}

const handlerLoginSuperUser = async(req,res,next)=>{
    try {
        const {username, password} = req.body;
        const loggedUser = await SuperUser.findOne({where: {username}});
        if(loggedUser!==null){
            if(loggedUser.password==password){
                res.json({message: "Login Success"})
            }else{
                throw new Error("Wrong Username or Password!!!"); 
            }
        }
        else{
            throw new Error("Wrong Username or Password!!!");
        }
    } catch (error) {
        next(error);
    }
}

const handlerDeleteLogClient = async(req,res,next)=>{
    try {
        const {idLogClient} = req.body;
        const currLogClient = await LogClient.findOne({where:{id:idLogClient}});
        await currLogClient.destroy();
        res.json({message: "Delete Success"})
    } catch (error) {
        next(error);
    }
}

const handlerPutStatusDitolakLogClient = async(req,res,next)=>{
    try {
        const {statusDeskripsi} = req.body;
        const {idLogClient} = req.params
        const currLogClient = await LogClient.findOne({where:{id:idLogClient}});
        currLogClient.statusDeskripsi = statusDeskripsi;
        currLogClient.status = "DITOLAK";
        await currLogClient.save();
        res.json({message: "update status success"});
    } catch (error) {
        next(error);
    }
}

const handlerPutStatusDiterimaLogClient = async(req,res,next)=>{
    try {
        const {namaPegawai} = req.body;
        const {idLogClient} = req.params
        const currLogClient = await LogClient.findOne({where:{id:idLogClient}});
        currLogClient.namaPegawai = namaPegawai;
        currLogClient.status = "DITERIMA";
        await currLogClient.save();
        res.json({message: "update status success"});
    } catch (error) {
        next(error);
    }
}

const handlerGetLogClient = async(req,res,next)=>{
    try {
        const allLogClient = await LogClient.findAll();
        const dataClient = [];
        for(let logClient of allLogClient){
            const permohonan = await FormPermohonan.findOne({where: {id: logClient.FormPermohonanId}})
            logClient.file = permohonan.file;
            dataClient.push({logClient, file: permohonan.file});
        }
        res.json({dataClient});
    } catch (error) {
        next(error);
    }
}

const handlerGetCurrLogClient = async(req,res,next)=>{
    try {
        const {idLogClient} = req.params;
        const currLogClient = await LogClient.findOne({where:{id:idLogClient}});
        res.json({currLogClient});
    } catch (error) {
        next(error)
    }
}

const handlerGetPermohonan = async(req,res,next)=>{
    try {
        const permohonan = await FormPermohonan.findAll();
        res.json({permohonan});
    } catch (error) {
        next(error);
    }
}

const handlerPostMeetingKantor = async(req,res,next)=>{
    try {
        const {tanggal} = req.body;
        await MeetingKantor.create({tanggal});
        res.json({message:"succesfull"});
    } catch (error) {
        next(error)
    }
}

const handlerPostMeetingClient = async(req,res,next)=>{
    try {
        const {tanggal, nama_client} = req.body;
        await MeetingClient.create({tanggal,nama_client});
        res.json({message:"succesfull"});
    } catch (error) {
        next(error)
    }
}

const handlerPostPersidangan = async(req,res,next)=>{
    try {
        const {tanggal, nama_client} = req.body;
        await Persidangan.create({tanggal,nama_client});
        res.json({message:"succesfull"});        
    } catch (error) {
        next(error)
    }
}

const handlerGetMeeting = async(req,res,next)=>{
    try {
        const meetingKantor = await MeetingKantor.findAll();
        const persidangan = await Persidangan.findAll();
        const meetingClient = await MeetingClient.findAll();
        res.json({meetingClient, persidangan, meetingKantor});
    } catch (error) {
        next(error)
    }
}

const handlerDeleteMeetingClient = async(req,res,next)=>{
    try {
        const {idMeetingClient} = req.params;
        const currMeeting = await MeetingClient.findOne({where: {id:idMeetingClient}});
        await currMeeting.destroy();
        res.json({message: "Success"});
    } catch (error) {
        next(error);
    }
}

const handlerDeleteMeetingKantor = async(req,res,next)=>{
    try {
        const {idMeetingKantor} = req.params;
        const currMeeting = await MeetingKantor.findOne({where: {id:idMeetingKantor}});
        await currMeeting.destroy();
        res.json({message: "Success"});
    } catch (error) {
        next(error);
    }
}

const handlerDeletePersidangan = async(req,res,next)=>{
    try {
        const {idPersidangan} = req.params;
        const currMeeting = await Persidangan.findOne({where: {id:idPersidangan}});
        await currMeeting.destroy();
        res.json({message: "Success"});
    } catch (error) {
        next(error);
    }
}

const handlerGetAllPegawai = async(req,res,next)=>{
    try {
        const pegawai = await Pegawai.findAll();
        res.json({pegawai});
    } catch (error) {
        next(error);
    }
}

const handlerLoginUser = async(req,res,next)=>{
    try {
        const {username, password} = req.body;
        const loggedUser = await User.findOne({where: {username}});
        if(loggedUser!==null){
            if(loggedUser.password==password){
                res.json({message: "Login Success"});
            }
            else{
                throw new Error("Wrong Username or Password!");
            }
        }
        else{
            throw new Error("Wrong Username or Password!");
        }
    } catch (error) {
        next(error);
    }
}

const handlerDeletePegawai = async(req,res,next)=>{
    try {
        const {idPegawai} = req.params;
        const currPegawai = await Pegawai.findOne({where:{id:idPegawai}});
        await currPegawai.destroy();
        res.json("delete success")
    } catch (error) {
        next(error)
    }
}

module.exports = {
    handlerPostFormPermohonan, handlerPostPegawai, handlerLoginSuperUser
    ,handlerPutStatusDitolakLogClient, handlerPutStatusDiterimaLogClient, handlerGetLogClient
    ,handlerPostMeetingClient, handlerPostMeetingKantor, handlerPostPersidangan,
    handlerGetMeeting, handlerGetPermohonan, handlerGetCurrLogClient, handlerDeleteLogClient,
    handlerDeleteMeetingClient, handlerDeleteMeetingKantor, handlerDeletePersidangan
    ,handlerGetAllPegawai, handlerLoginUser, handlerDeletePegawai
}