---
uid: api.42fef6c972e79c2d723c749cf0be5b6d71cabe00ad1ec8813da2c02ec2602d1e
symbol: "engine:Inno.Animation.Assets:M:Inno.Animation.Assets.AnimationClipImporter.ImportAsync(Inno.Assets.Pipeline.AssetImportContext,Inno.Assets.Pipeline.AssetImportWriter{Inno.Animation.AnimationClipAsset},System.Threading.CancellationToken)"
source: xml
reviewed: 27d0f3ee6d210f13def693729a2b76dd6d8fbe21965d4294b8a53d94529a01f4
title: "ImportAsync"
kind: api
owners: [Inno.Animation.Assets]
apiSurface: source-clr
---

Imports one validated structured animation clip.

**Parameter `context`:** Candidate source bytes and serialization generation.

**Parameter `output`:** Writer that receives the clip and immutable runtime artifact.

**Parameter `cancellationToken`:** Token that cancels artifact staging.

**Returns:** An operation that completes after the runtime artifact is staged.
