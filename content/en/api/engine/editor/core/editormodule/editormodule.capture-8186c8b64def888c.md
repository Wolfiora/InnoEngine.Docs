---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.8186c8b64def888c17ee84c56eafb5066ca2d45ce2054c78d29a12342b42e5e2
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorModule.Capture(Inno.Editor.Core.EditorState)
title: EditorModule.Capture
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
reviewed: 8152b17630554c4d43f2bc7fa0226b67208c6818ae79c27f4a2b7ea43c061825
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Overriding this method opts the module into project-state IO. Modules that keep the base implementation are never registered with the persistence coordinator and therefore perform no state reads or writes.

## Parameters

**Parameter `state`:** The writable parameter that receives the complete readable state for this module.
