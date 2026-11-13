---
uid: api.88f19a2a08a0f0196360500f016c0fa715f0df9708eb0baeb01387df58fd222f
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.ExportRuntimeArtifacts(System.String)"
source: xml
reviewed: 905a2014e00e89066026ec0bb0ac5716dfd70851177a8f8e2ce04ce0b4ee84b5
title: "ExportRuntimeArtifacts"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Writes a source-free runtime catalog and its exact immutable artifact closure.

**Parameter `destinationLibraryRoot`:** Empty destination that becomes the deployed content root.

**Returns:** Counts and source identities for the exported runtime snapshot.

**Exception `T:System.InvalidOperationException`:** Thrown when runtime artifacts are incomplete, a deployed reference is authoring-only, or a transitive authoring input has failed or become stale.

**Exception `T:System.IO.IOException`:** Thrown when the destination is not empty or content cannot be copied.
