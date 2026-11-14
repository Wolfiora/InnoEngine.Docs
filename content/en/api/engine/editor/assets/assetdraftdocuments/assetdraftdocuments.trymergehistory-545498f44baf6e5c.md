---
uid: api.545498f44baf6e5c3c6d90f34aaa4413928cb48ac5dbf416a6ea047299486580
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetDraftDocuments\u00601.TryMergeHistory(Inno.Editor.Interactions.EditorHistoryChange,Inno.Editor.Interactions.EditorHistoryChange,Inno.Editor.Interactions.EditorHistoryChange@)"
source: xml
reviewed: efcdf3b9687c2c47e3cbe61522eb06165e23813a141cd17db1ce91ec21fa7a10
title: "AssetDraftDocuments\u003CTAsset\u003E.TryMergeHistory"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Combines adjacent samples of the same document and gesture without retaining live assets.

## Parameters

**Parameter `older`:** The preceding owned record.

**Parameter `newer`:** The subsequent owned record.

**Parameter `merged`:** Receives a new independent payload when the records form a contiguous edit.

## Returns

True when both records describe the same continuous value change.
