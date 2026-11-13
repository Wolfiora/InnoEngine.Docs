---
uid: api.1b7016bc87875390fe46fc6c351b3de45b454aa60712f9680def5df39b41ff42
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSampleImportTransaction.Rollback"
source: xml
reviewed: b415d8b64bc96025771a1eb07652774c696fdbdf44f66b56a1c39a0ba5393216
title: "AssetSampleImportTransaction.Rollback"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Cancels work and removes an uncommitted copy after all background consumers have drained.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Background work is still draining; retain the transaction and retry on its owner thread.
