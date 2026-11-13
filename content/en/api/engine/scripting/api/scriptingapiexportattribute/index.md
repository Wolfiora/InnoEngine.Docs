---
uid: api.inno.scripting.api.c08321ce7d4a65d3
symbol: "engine:Inno.Scripting.Api:T:Inno.Scripting.Api.ScriptingApiExportAttribute"
source: xml
reviewed: 443e6addfa51ba356775f356b1e9af79f8094d583af74d29e3cf0f84b7998138
title: "ScriptingApiExportAttribute"
kind: api
owners: [Inno.Scripting.Api]
apiSurface: source-clr
contracts:
- project.inno-scripting-api
aliases: []
---

Exports one public runtime type to a script compilation profile.

## Remarks

The declaration assembly does not need to own the exported type. Feature projects may expose selected types from lower-level dependencies while the generated runtime reference preserves the exported type's original assembly identity.
