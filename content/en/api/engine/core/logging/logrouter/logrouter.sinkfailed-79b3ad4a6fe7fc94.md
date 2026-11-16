---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.79b3ad4a6fe7fc94bd0ef0d72a9fc7c76278ab6777fb4a71d287ae7cf5f4da61
symbol: engine:Inno.Core.Logging:E:Inno.Core.Logging.LogRouter.sinkFailed
title: LogRouter.sinkFailed
kind: api
owners:
- Inno.Core.Logging
apiSurface: source-clr
reviewed: 569a13352e200c5f6e078c0f1fe508e4231df559c79c1b286ec23c5e82525c90
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Quarantine removes the sink from delivery but does not dispose it. The host must retain responsibility for safely releasing a removed sink. Observers run within delivery and must not flush or dispose this router from their callback.
