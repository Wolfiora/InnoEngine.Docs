---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.af94d58ac2ccf54175f5e1bbefa430ee4d3f378f14d8dbeb7149f9e13c4a276d
symbol: engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditingModule.CreateDirectory(Inno.Assets.AssetPath)
title: AssetEditingModule.CreateDirectory
kind: api
owners:
- Inno.Editor.Assets
apiSurface: source-clr
reviewed: d3d4885cdf18c8527fcd8f5b939f9bccb67d91d485592f9ba73add63830093c4
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `parent`:** An existing writable source directory.

## Returns

The indexed identity of the newly created directory.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The source is read-only, unavailable, or cannot retain the History entry.
