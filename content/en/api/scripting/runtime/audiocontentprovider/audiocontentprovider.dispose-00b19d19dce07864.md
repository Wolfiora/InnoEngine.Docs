---
uid: api.00b19d19dce07864103ec895711d0328eec982b5eaa03ab3118684ed7d84d506
symbol: "scripting:Inno.Audio:M:InnoEngine.Audio.AudioContentProvider.Dispose"
source: xml
reviewed: ab58a83e100b1b01176f04356edf38c79253efaea2d27809da31eda2c5aae7d3
title: "AudioContentProvider.Dispose"
kind: api
owners: [Inno.Audio]
apiSurface: editor-script
apiScope: Runtime
---

Releases generation-scoped provider state.

## Exceptions

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Owned work is still draining. The generation owner must retain this provider and retry disposal.
