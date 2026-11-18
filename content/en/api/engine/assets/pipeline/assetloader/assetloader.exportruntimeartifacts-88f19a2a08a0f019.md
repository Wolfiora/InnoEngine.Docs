---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.88f19a2a08a0f0196360500f016c0fa715f0df9708eb0baeb01387df58fd222f
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.ExportRuntimeArtifacts(System.String)
title: AssetLoader.ExportRuntimeArtifacts
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: 34c4ca23ed778ac50836ccb9494693672db17318c529ad80ed26ec72b2388665
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
