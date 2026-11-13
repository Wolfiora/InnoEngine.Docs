---
uid: api.00b19d19dce07864103ec895711d0328eec982b5eaa03ab3118684ed7d84d506
symbol: "scripting:Inno.Audio:M:InnoEngine.Audio.AudioContentProvider.Dispose"
source: xml
reviewed: 0352f10bc509c98936928f3625d9c58db8201dea5d9e1c7aefbf7ed12f2b3851
title: "Dispose"
kind: api
owners: [Inno.Audio]
apiSurface: editor-script
apiScope: Runtime
---

Releases generation-scoped provider state.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Owned work is still draining. The generation owner must retain this provider and retry disposal.
