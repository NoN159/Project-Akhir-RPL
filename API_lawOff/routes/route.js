const express = require('express');
const { handlerPostFormPermohonan, handlerPostPegawai, handlerLoginSuperUser, handlerGetLogClient, handlerPostMeetingClient, handlerPostMeetingKantor, handlerPostPersidangan, handlerGetMeeting, handlerGetPermohonan, handlerPutStatusDiterimaLogClient, handlerPutStatusDitolakLogClient, handlerGetCurrLogClient, handlerDeleteLogClient, handlerDeletePersidangan, handlerDeleteMeetingClient, handlerDeleteMeetingKantor, handlerGetAllPegawai, handlerLoginUser, handlerDeletePegawai} = require('../controllers/controller');

const router = express.Router();

router.post("/form-permohonan", handlerPostFormPermohonan);

router.post("/super-user/upload-pegawai", handlerPostPegawai);

router.get("/super-user/pegawai", handlerGetAllPegawai);

router.post("/super-user/delete-pegawai/:idPegawai", handlerDeletePegawai);

router.post("/super-user/login", handlerLoginSuperUser);

router.put("/super-user/log-client/update-status-diterima/:idLogClient", handlerPutStatusDiterimaLogClient);

router.put("/super-user/log-client/update-status-ditolak/:idLogClient", handlerPutStatusDitolakLogClient);

router.post("/super-user/post-meeting-client", handlerPostMeetingClient);

router.post("/super-user/post-meeting-kantor", handlerPostMeetingKantor);

router.post("/super-user/post-persidangan", handlerPostPersidangan);

router.post("/super-user/delete-persidangan/:idPersidangan", handlerDeletePersidangan);

router.post("/super-user/delete-meeting-client/:idMeetingClient", handlerDeleteMeetingClient);

router.post("/super-user/delete-meeting-kantor/:idMeetingKantor", handlerDeleteMeetingKantor);

router.get("/super-user/meeting", handlerGetMeeting);

router.get("/super-user/persidangan")

router.get("/get-log-client-data", handlerGetLogClient);

router.get("/get-permohonan", handlerGetPermohonan)

router.get("/super-user/log-client/:idLogClient", handlerGetCurrLogClient)

router.post("/super-user/delete-log-client", handlerDeleteLogClient)

router.post("/user/login", handlerLoginUser);

module.exports = router;