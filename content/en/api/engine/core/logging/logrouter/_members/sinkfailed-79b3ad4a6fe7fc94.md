---
uid: api.79b3ad4a6fe7fc94bd0ef0d72a9fc7c76278ab6777fb4a71d287ae7cf5f4da61
symbol: "engine:Inno.Core.Logging:E:Inno.Core.Logging.LogRouter.sinkFailed"
source: xml
reviewed: 100b601107456a8c02c13ae834656516e67bfb97362ea2a017a7f8ef0bf2aacd
title: "sinkFailed"
kind: api
owners: [Inno.Core.Logging]
apiSurface: source-clr
---

Occurs after a failing sink has been quarantined from this router.

## Remarks

Quarantine removes the sink from delivery but does not dispose it. The host must retain responsibility for safely releasing a removed sink. Observers run within delivery and must not flush or dispose this router from their callback.
