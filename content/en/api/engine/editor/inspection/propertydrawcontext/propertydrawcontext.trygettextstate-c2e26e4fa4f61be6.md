---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c2e26e4fa4f61be6dfdda75f585c175a6f00eb415cc9edf0220ec9ee39b82c3b
symbol: engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.PropertyDrawContext.TryGetTextState(System.String,System.String@)
title: PropertyDrawContext.TryGetTextState
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: source-clr
reviewed: c0bd7b9a431d133273753542a5007210a8f39f29420dc59a0b9025ffe8d7c998
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `key`:** Drawer-local state identity within the current property path.

**Parameter `value`:** Receives the stored text when the state exists.

## Returns

`true` when text state exists for the exact owner and property path.
