---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.ad33983431da5a14676e5477ab7fe8f79e7314ab5f48065865360d6046f1c7d4
symbol: engine:Inno.Core.Graphs:M:Inno.Core.Graphs.GraphValidator.Validate(Inno.Core.Graphs.GraphDocument,Inno.Core.Graphs.IGraphNodeDefinitionResolver,Inno.Core.Graphs.IGraphTypeConversion,System.Boolean)
title: GraphValidator.Validate
kind: api
owners:
- Inno.Core.Graphs
apiSurface: source-clr
sourceFingerprint: 15725099aebc55611966fd86a02f88e843a1efc8a2ff117f400d5e8b3e9ca49a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `document`:** Graph document to validate without modifying it.

**Parameter `resolver`:** Active node definition resolver.

**Parameter `conversion`:** Optional directed type conversion policy.

**Parameter `allowCycles`:** Whether directed cycles are permitted.

## Returns

A deterministic validation result. Missing definitions remain warnings so documents stay editable.
