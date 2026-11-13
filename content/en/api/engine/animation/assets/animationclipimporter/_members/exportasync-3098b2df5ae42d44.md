---
uid: api.3098b2df5ae42d4485428a347c82a24fc9347705d7602ef30e28c430910f428e
symbol: "engine:Inno.Animation.Assets:M:Inno.Animation.Assets.AnimationClipImporter.ExportAsync(Inno.Assets.Pipeline.AssetExportContext,Inno.Animation.AnimationClipAsset,System.Threading.CancellationToken)"
source: xml
reviewed: 7bbe58d38b8aff7e0bcfb76f76918a94e287bf2cb984afc284a51c663f017714
title: "ExportAsync"
kind: api
owners: [Inno.Animation.Assets]
apiSurface: source-clr
---

Serializes one validated animation clip back to its writable source mount.

**Parameter `context`:** Generation-bound source serialization services.

**Parameter `asset`:** Animation clip to export.

**Parameter `cancellationToken`:** Cancellation token observed before source bytes are returned.

**Returns:** The complete current structured source bytes.
