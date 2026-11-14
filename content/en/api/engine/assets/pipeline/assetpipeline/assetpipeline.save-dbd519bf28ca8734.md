---
uid: api.dbd519bf28ca873452b45e775a74c920aec87bd6e508364c09c5da9bb38266cd
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.Save(Inno.Assets.AssetPath,Inno.Assets.AssetObject)"
source: xml
reviewed: 4c205f6bc9364fa6545d84f1cb335d6f251ecee654830bb3a1d743ca970ebe78
title: "AssetPipeline.Save"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Saves an asset to a writable isolated source path, preserving the destination source identity when it exists.

**Parameter `path`:** Writable isolated source path.

**Parameter `asset`:** Asset to save. A detached value replaces the destination content without replacing its persistent identity.

**Returns:** `true` when an importer exported the asset.
