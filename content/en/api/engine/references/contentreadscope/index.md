---
uid: api.inno.references.327be83e57ee1253
symbol: "engine:Inno.References:T:Inno.References.ContentReadScope"
source: xml
reviewed: 0b857e0d2645fdded3d9a7865a3ee1b8fb6f9a92e1b466b8a30373ff440635ec
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
