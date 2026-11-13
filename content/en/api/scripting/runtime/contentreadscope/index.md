---
uid: api.inno.references.runtime-script.f46372927f2108f7
symbol: "scripting:Inno.References:T:InnoEngine.References.ContentReadScope"
source: xml
reviewed: afaad25a4f55b890c57f305f3f795d54dc91220a9c0025545d08c9a92ba53783
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
