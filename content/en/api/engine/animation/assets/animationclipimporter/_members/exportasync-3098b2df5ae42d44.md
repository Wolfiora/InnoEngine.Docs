---
uid: api.3098b2df5ae42d4485428a347c82a24fc9347705d7602ef30e28c430910f428e
symbol: "engine:Inno.Animation.Assets:M:Inno.Animation.Assets.AnimationClipImporter.ExportAsync(Inno.Assets.Pipeline.AssetExportContext,Inno.Animation.AnimationClipAsset,System.Threading.CancellationToken)"
source: xml
reviewed: 96e62be40f3411997db6bd91fb83a5682b1b8a2d8d26c172ae0fd2ab3fbfd019
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
