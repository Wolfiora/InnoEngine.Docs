---
uid: api.f666c6e2e6ed8d6e817c5de44700b218a4a8a2bc36730fc776c691376d6ce756
symbol: "engine:Inno.Build:M:Inno.Build.PlayerSupportPackCatalog.SelectAsync(Inno.Build.BuildTargetId,System.String,Inno.Build.IPlayerSupportPackValidator,System.Func{System.Threading.CancellationToken,System.Threading.Tasks.ValueTask},System.Threading.CancellationToken)"
source: xml
reviewed: eeae5d4c006bb5f8d98a93a17117abcb2e968ac7f38465d79e42cfa158d44937
title: "SelectAsync"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Validates one immutable content identity and atomically selects it for subsequent readers.

**Parameter `target`:** The explicit target whose prepared Pack is requested.

**Parameter `fingerprint`:** The exact lowercase SHA-256 content identity recorded by the publisher.

**Parameter `validator`:** The borrowed platform closure validator.

**Parameter `verifyInputs`:** The final awaited source-input gate after output validation and before selection.

**Parameter `cancellationToken`:** Cancels validation or selection before replacing the current index.

**Returns:** Reading ownership of the complete requested Pack; dispose it after every consumer finishes.

**Exception `T:System.ArgumentException`:** The content identity is invalid or the target path escapes the catalog.

**Exception `T:System.IO.InvalidDataException`:** The requested directory or its complete file set and hashes are invalid.

**Exception `T:System.OperationCanceledException`:** Validation or selection was canceled.
