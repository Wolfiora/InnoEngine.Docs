---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.8186c8b64def888c17ee84c56eafb5066ca2d45ce2054c78d29a12342b42e5e2
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorModule.Capture(Inno.Editor.Core.EditorState)
title: EditorModule.Capture
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
sourceFingerprint: b3753ddaaf712818e04ba7a2e31f7e57701b847593b36206133d2030c4d70c95
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `state`:** The writable parameter that receives the complete readable state for this module.

## Remarks

Overriding this method opts the module into project-state IO. Modules that keep the base implementation are never registered with the persistence coordinator and therefore perform no state reads or writes.
