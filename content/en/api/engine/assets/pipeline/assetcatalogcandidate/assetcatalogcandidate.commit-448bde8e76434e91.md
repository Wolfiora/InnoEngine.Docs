---
uid: api.448bde8e76434e91148a396abe4e4a95c3d72d8ff9da419a1d1403ff45788c49
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetCatalogCandidate.Commit"
source: xml
reviewed: fd2fe74ef887cefd4cd0735916d0fc133d094c72b3866db4c930c49efd770313
title: "AssetCatalogCandidate.Commit"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Publishes staged source metadata and atomically promotes the validated catalog, compensating metadata on failure.

**Exception `T:System.InvalidOperationException`:** Thrown when the candidate has already been committed or disposed.

**Exception `T:System.IO.IOException`:** Source metadata changed externally, a sidecar cannot be written, or the catalog cannot be promoted.

**Exception `T:System.UnauthorizedAccessException`:** The operating system rejects a source sidecar or catalog write, including a directory at a file destination.
