---
uid: api.ae1b923575215954a1eaa564ceeb1c36bdb14bfac4afb174631339d7ef67ef8e
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.ExportRuntimeArtifacts(System.String,System.Threading.CancellationToken)"
source: xml
reviewed: 6cb160968c49345dda4300425cb716e0d868e6ec6b68226ef6a0f2a826868617
title: "ExportRuntimeArtifacts"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Exports the validated runtime artifact closure while observing cooperative cancellation between files.

**Parameter `destinationLibraryRoot`:** The empty directory that receives the runtime-only asset database.

**Parameter `cancellationToken`:** The token checked before every artifact file is copied.

**Returns:** Counts and source identities represented by the exported snapshot.

**Exception `T:System.InvalidOperationException`:** Thrown when artifacts are incomplete or transitive source inputs no longer certify the imported snapshot.

**Exception `T:System.OperationCanceledException`:** Thrown when cancellation is requested before the snapshot finishes.
