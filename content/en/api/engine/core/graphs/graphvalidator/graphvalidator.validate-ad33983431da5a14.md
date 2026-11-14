---
uid: api.ad33983431da5a14676e5477ab7fe8f79e7314ab5f48065865360d6046f1c7d4
symbol: "engine:Inno.Core.Graphs:M:Inno.Core.Graphs.GraphValidator.Validate(Inno.Core.Graphs.GraphDocument,Inno.Core.Graphs.IGraphNodeDefinitionResolver,Inno.Core.Graphs.IGraphTypeConversion,System.Boolean)"
source: xml
reviewed: 11f4c80538ea9ec3e6be64a6b2113d8efb27f5155bb03d6e75baa3145f3f6ca6
title: "GraphValidator.Validate"
kind: api
owners: [Inno.Core.Graphs]
apiSurface: source-clr
---

Validates node availability, ports, edge types, capacity, required inputs and cycles.

## Parameters

**Parameter `document`:** Graph document to validate without modifying it.

**Parameter `resolver`:** Active node definition resolver.

**Parameter `conversion`:** Optional directed type conversion policy.

**Parameter `allowCycles`:** Whether directed cycles are permitted.

## Returns

A deterministic validation result. Missing definitions remain warnings so documents stay editable.
