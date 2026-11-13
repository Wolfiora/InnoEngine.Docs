---
uid: api.inno.references.runtime-script.f46372927f2108f7
symbol: "scripting:Inno.References:T:InnoEngine.References.ContentReadScope"
source: xml
reviewed: c7a2839b23514c2e90f9ab47030528759bd3a131e494bd0c91ffe87e298586d4
title: "ContentReadScope"
kind: api
owners: [Inno.References]
apiSurface: editor-script
apiScope: Runtime
contracts:
- manual.scripting.use-script-api
- project.inno-references
aliases: []
---

Exposes ordered content roots through weak, generation-checked identity snapshots for one control-thread operation.

## Remarks

Disposing the scope revokes lookup. Copy values into domain snapshots; never retain resolved objects across frames or reloads.
