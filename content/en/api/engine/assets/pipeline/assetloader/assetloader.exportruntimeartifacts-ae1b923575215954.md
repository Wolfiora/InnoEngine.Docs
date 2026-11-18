---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.ae1b923575215954a1eaa564ceeb1c36bdb14bfac4afb174631339d7ef67ef8e
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.ExportRuntimeArtifacts(System.String,System.Threading.CancellationToken)
title: AssetLoader.ExportRuntimeArtifacts
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: 1ae3cbc636f556190af0b487e891bf5814e3e754967b7689d5b42556da4ff098
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `destinationLibraryRoot`:** The empty directory that receives the runtime-only asset database.

**Parameter `cancellationToken`:** The token checked before every artifact file is copied.

## Returns

Counts and source identities represented by the exported snapshot.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when artifacts are incomplete or transitive source inputs no longer certify the imported snapshot.

**Exception `T:System.OperationCanceledException`:** Thrown when cancellation is requested before the snapshot finishes.
