---
uid: api.ef4fd68c5c81e2f5bce77386cc2fa3e94a45775823d0df481027644547410fc9
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditingModule.CanMoveSelection(System.Collections.Generic.IReadOnlyList{Inno.Assets.Pipeline.AssetFileEntry},System.String)"
source: xml
reviewed: b87b48f311c7564836b72c5d6b28b8ab7244dd6368e4ded9f211b5085ab08d6a
title: "AssetEditingModule.CanMoveSelection"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Validates every minimal selected source and rejects destination collisions before a batch move.

## Parameters

**Parameter `targets`:** Live source entries in selection order.

**Parameter `targetDirectory`:** The writable project destination.

## Returns

True when every source can move to a distinct destination.
