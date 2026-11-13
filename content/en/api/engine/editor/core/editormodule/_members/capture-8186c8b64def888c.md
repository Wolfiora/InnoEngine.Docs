---
uid: api.8186c8b64def888c17ee84c56eafb5066ca2d45ce2054c78d29a12342b42e5e2
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorModule.Capture(Inno.Editor.Core.EditorState)"
source: xml
reviewed: b69780671ae88b24cdaf4da81473a08c5ffd4d4336b1287186d636e2c63ff78a
title: "Capture"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Captures readable project state owned by this module.

## Remarks

Overriding this method opts the module into project-state IO. Modules that keep the base implementation are never registered with the persistence coordinator and therefore perform no state reads or writes.

**Parameter `state`:** The writable parameter that receives the complete readable state for this module.
