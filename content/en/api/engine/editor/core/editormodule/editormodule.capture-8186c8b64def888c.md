---
uid: api.8186c8b64def888c17ee84c56eafb5066ca2d45ce2054c78d29a12342b42e5e2
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorModule.Capture(Inno.Editor.Core.EditorState)"
source: xml
reviewed: 94c27a76bd5a0c74a116d816aa587ecfd2850e743dac405aaa201ba685e34211
title: "EditorModule.Capture"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Captures readable project state owned by this module.

## Remarks

Overriding this method opts the module into project-state IO. Modules that keep the base implementation are never registered with the persistence coordinator and therefore perform no state reads or writes.

## Parameters

**Parameter `state`:** The writable parameter that receives the complete readable state for this module.
