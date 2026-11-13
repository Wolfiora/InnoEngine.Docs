---
uid: api.6153c25f99df1a1db5e97cb02d101d4c58d014a8a7d2bd16a3a6fb984ca87bee
symbol: "engine:Inno.Audio:M:Inno.Audio.AudioContentProvider.Dispose"
source: xml
reviewed: aa7a7c141467934c6624565f71dc3f20e64b3b0d6058ec6670799ddfce5497a3
title: "Dispose"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Releases generation-scoped provider state.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Owned work is still draining. The generation owner must retain this provider and retry disposal.
