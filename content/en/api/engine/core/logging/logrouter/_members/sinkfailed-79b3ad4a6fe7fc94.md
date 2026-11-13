---
uid: api.79b3ad4a6fe7fc94bd0ef0d72a9fc7c76278ab6777fb4a71d287ae7cf5f4da61
symbol: "engine:Inno.Core.Logging:E:Inno.Core.Logging.LogRouter.sinkFailed"
source: xml
reviewed: 8110d535371cc086abf02997c21bf5787651f95c89f4e68f14a5f1d211abea24
title: "sinkFailed"
kind: api
owners: [Inno.Core.Logging]
apiSurface: source-clr
---

Occurs after a failing sink has been quarantined from this router.

## Remarks

Quarantine removes the sink from delivery but does not dispose it. The host must retain responsibility for safely releasing a removed sink. Observers run within delivery and must not flush or dispose this router from their callback.
