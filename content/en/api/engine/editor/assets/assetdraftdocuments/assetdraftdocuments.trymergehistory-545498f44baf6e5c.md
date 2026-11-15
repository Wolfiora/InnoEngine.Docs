---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.545498f44baf6e5c3c6d90f34aaa4413928cb48ac5dbf416a6ea047299486580
symbol: engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetDraftDocuments`1.TryMergeHistory(Inno.Editor.Interactions.EditorHistoryChange,Inno.Editor.Interactions.EditorHistoryChange,Inno.Editor.Interactions.EditorHistoryChange@)
title: AssetDraftDocuments<TAsset>.TryMergeHistory
kind: api
owners:
- Inno.Editor.Assets
apiSurface: source-clr
reviewed: efcdf3b9687c2c47e3cbe61522eb06165e23813a141cd17db1ce91ec21fa7a10

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Combines adjacent samples of the same document and gesture without retaining live assets.

## Parameters

**Parameter `older`:** The preceding owned record.

**Parameter `newer`:** The subsequent owned record.

**Parameter `merged`:** Receives a new independent payload when the records form a contiguous edit.

## Returns

True when both records describe the same continuous value change.
