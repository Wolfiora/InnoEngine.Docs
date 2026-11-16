---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.2d27545ca9447c6d46720b6037f5a3d2baf52cc869003feae3447882c20aae89
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteraction.Present(System.String,System.Object)
title: EditorInteraction.Present
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
reviewed: 767997abec1eeeb3c0d75c3db2fe00784aa3675ec71ea2daa870454a38ba446d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `action`:** The stable action name.

**Parameter `argument`:** Optional presentation data supplied by the current view.

## Returns

`true` when the action presented content; otherwise, `false`.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `action` is empty.
