---
uid: api.ad33983431da5a14676e5477ab7fe8f79e7314ab5f48065865360d6046f1c7d4
symbol: "engine:Inno.Core.Graphs:M:Inno.Core.Graphs.GraphValidator.Validate(Inno.Core.Graphs.GraphDocument,Inno.Core.Graphs.IGraphNodeDefinitionResolver,Inno.Core.Graphs.IGraphTypeConversion,System.Boolean)"
source: xml
reviewed: b1ea42ed71a8e1a80ffe58351fcef67022fa8ff159490c8d11bb84cb0effbfe3
title: "Validate"
kind: api
owners: [Inno.Core.Graphs]
apiSurface: source-clr
---

Validates node availability, ports, edge types, capacity, required inputs and cycles.

**Parameter `document`:** Graph document to validate without modifying it.

**Parameter `resolver`:** Active node definition resolver.

**Parameter `conversion`:** Optional directed type conversion policy.

**Parameter `allowCycles`:** Whether directed cycles are permitted.

**Returns:** A deterministic validation result. Missing definitions remain warnings so documents stay editable.
