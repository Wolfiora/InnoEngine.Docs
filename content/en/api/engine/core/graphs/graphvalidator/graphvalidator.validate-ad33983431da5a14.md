---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.ad33983431da5a14676e5477ab7fe8f79e7314ab5f48065865360d6046f1c7d4
symbol: engine:Inno.Core.Graphs:M:Inno.Core.Graphs.GraphValidator.Validate(Inno.Core.Graphs.GraphDocument,Inno.Core.Graphs.IGraphNodeDefinitionResolver,Inno.Core.Graphs.IGraphTypeConversion,System.Boolean)
title: GraphValidator.Validate
kind: api
owners:
- Inno.Core.Graphs
apiSurface: source-clr
reviewed: 86eefaba2cbc8036cb32dd022d4a071871924365a961e3d66d274eca1b35972a
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
