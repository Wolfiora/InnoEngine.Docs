---
uid: api.fa024f67d97faf1c4b451bafe96107667258023ecb23d6c5f1ab386e390911bc
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.ExportRuntimeArtifacts(System.String)"
source: xml
reviewed: c3b0e898dcd311599a666794b20f4dc23d6d5f155839aeca9473af16536f0863
title: "ExportRuntimeArtifacts"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Exports the current source-free runtime catalog and its exact artifact closure.

**Parameter `destinationContentRoot`:** Empty destination for the deployed asset database.

**Returns:** Counts and source identities for the deployed runtime snapshot.

**Exception `T:System.InvalidOperationException`:** Thrown when runtime artifacts are incomplete, a deployed reference is authoring-only, or a transitive authoring input has failed or changed since import. Last-good inputs do not certify an export.

**Exception `T:System.IO.IOException`:** Thrown when the destination is not empty or cannot be written.
