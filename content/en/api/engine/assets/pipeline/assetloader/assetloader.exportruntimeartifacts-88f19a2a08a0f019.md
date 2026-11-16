---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.88f19a2a08a0f0196360500f016c0fa715f0df9708eb0baeb01387df58fd222f
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.ExportRuntimeArtifacts(System.String)
title: AssetLoader.ExportRuntimeArtifacts
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: 5b723eff4751b8417a172843737f813616e64f03421d61856e6a8cc09a07a186
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `destinationLibraryRoot`:** Empty destination that becomes the deployed content root.

## Returns

Counts and source identities for the exported runtime snapshot.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when runtime artifacts are incomplete, a deployed reference is authoring-only, or a transitive authoring input has failed or become stale.

**Exception `T:System.IO.IOException`:** Thrown when the destination is not empty or content cannot be copied.
