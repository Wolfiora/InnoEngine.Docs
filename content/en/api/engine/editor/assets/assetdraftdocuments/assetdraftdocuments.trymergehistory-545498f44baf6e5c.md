---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.545498f44baf6e5c3c6d90f34aaa4413928cb48ac5dbf416a6ea047299486580
symbol: engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetDraftDocuments`1.TryMergeHistory(Inno.Editor.Interactions.EditorHistoryChange,Inno.Editor.Interactions.EditorHistoryChange,Inno.Editor.Interactions.EditorHistoryChange@)
title: AssetDraftDocuments<TAsset>.TryMergeHistory
kind: api
owners:
- Inno.Editor.Assets
apiSurface: source-clr
reviewed: 22c62894aaffc5c5da0f152a24e37c6e2c2f879e675c1019caf0ebe1cfdc3430
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `older`:** The preceding owned record.

**Parameter `newer`:** The subsequent owned record.

**Parameter `merged`:** Receives a new independent payload when the records form a contiguous edit.

## Returns

True when both records describe the same continuous value change.
