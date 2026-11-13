---
uid: api.545498f44baf6e5c3c6d90f34aaa4413928cb48ac5dbf416a6ea047299486580
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetDraftDocuments\u00601.TryMergeHistory(Inno.Editor.Interactions.EditorHistoryChange,Inno.Editor.Interactions.EditorHistoryChange,Inno.Editor.Interactions.EditorHistoryChange@)"
source: xml
reviewed: a85c8dc43007dad76681862f961889c63c0b1b6ad3284ee082434a8d0191ef2c
title: "TryMergeHistory"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Combines adjacent samples of the same document and gesture without retaining live assets.

**Parameter `older`:** The preceding owned record.

**Parameter `newer`:** The subsequent owned record.

**Parameter `merged`:** Receives a new independent payload when the records form a contiguous edit.

**Returns:** True when both records describe the same continuous value change.
