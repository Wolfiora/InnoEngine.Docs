---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.79b3ad4a6fe7fc94bd0ef0d72a9fc7c76278ab6777fb4a71d287ae7cf5f4da61
symbol: engine:Inno.Core.Logging:E:Inno.Core.Logging.LogRouter.sinkFailed
title: LogRouter.sinkFailed
kind: api
owners:
- Inno.Core.Logging
apiSurface: source-clr
sourceFingerprint: 53b0cf76d1f474c31de2d8347f3e908856f68ab5dc2edc043604f7107d47a6a4
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Quarantine removes the sink from delivery but does not dispose it. The host must retain responsibility for safely releasing a removed sink. Observers run within delivery and must not flush or dispose this router from their callback.
