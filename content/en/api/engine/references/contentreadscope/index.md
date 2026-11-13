---
uid: api.inno.references.327be83e57ee1253
symbol: "engine:Inno.References:T:Inno.References.ContentReadScope"
source: xml
reviewed: f4f6857eebdb65b3e07d4eb12c1118f5a8f445c4fa9a0daa5d663a19035a1361
title: "ContentReadScope"
kind: api
owners: [Inno.References]
apiSurface: source-clr
contracts:
- project.inno-references
aliases: []
---

Exposes ordered content roots through weak, generation-checked identity snapshots for one control-thread operation.

## Remarks

Disposing the scope revokes lookup. Copy values into domain snapshots; never retain resolved objects across frames or reloads.
