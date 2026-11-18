---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.545498f44baf6e5c3c6d90f34aaa4413928cb48ac5dbf416a6ea047299486580
symbol: engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetDraftDocuments`1.TryMergeHistory(Inno.Editor.Interactions.EditorHistoryChange,Inno.Editor.Interactions.EditorHistoryChange,Inno.Editor.Interactions.EditorHistoryChange@)
title: AssetDraftDocuments<TAsset>.TryMergeHistory
kind: api
owners:
- Inno.Editor.Assets
apiSurface: source-clr
sourceFingerprint: 82be4b4e32e64068493e2fde9a30b53644817709199cd93f6705bfb7907483c2
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
