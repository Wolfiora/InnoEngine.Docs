---
uid: api.46db8218cf407ac64ec4e8af5eefd775ba37a645a91cc2f8dbd1ce57c6fce63c
symbol: "engine:Inno.Tooling.Documentation:M:Inno.Tooling.Documentation.DocumentationSnapshot.ReadReferenceAsync(System.String,System.Threading.CancellationToken)"
source: xml
reviewed: 1f6a50cb03a28905e18583c48ba309d6fa3d1f924020c571c7d3dc382aaf6125
title: "ReadReferenceAsync"
kind: api
owners: [Inno.Tooling.Documentation]
apiSurface: source-clr
---

Reads one complete, hash-verified project or API reference from this protected generation. The original checkout is not consulted, and no SDK evaluation or network operation occurs.

**Parameter `path`:** Exact reference path reported by `M:Inno.Tooling.Documentation.DocumentationSnapshot.ExportCatalogAsync(System.Threading.CancellationToken)`.

**Parameter `cancellationToken`:** Cancels the selected payload read without changing publication.

**Returns:** Caller-owned bytes of the recorded payload, without semantic certification.

**Exception `T:System.ArgumentException`:** The path is not a reference in this snapshot.

**Exception `T:System.IO.IOException`:** The payload is absent or outside its owned boundary.

**Exception `T:System.IO.InvalidDataException`:** The payload's bytes do not match the recorded content identity.

**Exception `T:System.InvalidOperationException`:** The snapshot does not match the caller's expected engine source tree.

**Exception `T:System.ObjectDisposedException`:** The snapshot has released its reading protection.

**Exception `T:System.OperationCanceledException`:** The caller cancels the read.
