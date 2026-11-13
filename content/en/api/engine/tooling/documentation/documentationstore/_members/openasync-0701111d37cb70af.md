---
uid: api.0701111d37cb70af54bc04bf00850b1822045c4137c83f9821327bbbea7e1fee
symbol: "engine:Inno.Tooling.Documentation:M:Inno.Tooling.Documentation.DocumentationStore.OpenAsync(System.String,System.String,System.String,System.Threading.CancellationToken,Inno.Tooling.Documentation.DocumentationEvidence)"
source: xml
reviewed: 53ba01cfbf215e176c7bfa55db53ccf23b199e30562d4a723c36762b9c24e0cf
title: "OpenAsync"
kind: api
owners: [Inno.Tooling.Documentation]
apiSurface: source-clr
---

Opens one immutable generation without scanning authored content or acquiring an update lock.

**Parameter `cacheRoot`:** Absolute prepared cache root. This method does not prepare or download missing content.

**Parameter `snapshot`:** Exact generation identity, or null to resolve the currently published pointer once.

**Parameter `expectedSourceTree`:** Expected engine input tree, or null when the caller only needs the explicitly bound documentation snapshot.

**Parameter `cancellationToken`:** Cancels reading lease acquisition and manifest loading.

**Parameter `sourceEvidence`:** Explicit certificate authenticated during preparation, or null for an unverified session. A certificate must cover the exact source tree and every protected API reference.

**Returns:** A caller-owned query session. Dispose it after the final query to release its generation reading lease.

**Exception `T:System.IO.IOException`:** The snapshot is missing, corrupt, outside its boundary or produced by an incompatible parser schema.

**Exception `T:System.OperationCanceledException`:** Reading acquisition is canceled.
