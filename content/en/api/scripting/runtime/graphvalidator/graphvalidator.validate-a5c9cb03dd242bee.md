---
uid: api.a5c9cb03dd242bee4badaff506466aff17572ba7679494822629c7b3d45fabaa
symbol: "scripting:Inno.Core.Graphs:M:InnoEngine.Graphs.GraphValidator.Validate(InnoEngine.Graphs.GraphDocument,InnoEngine.Graphs.IGraphNodeDefinitionResolver,InnoEngine.Graphs.IGraphTypeConversion,System.Boolean)"
source: xml
reviewed: 2641faaf2b1dcfca2d320f3f80baafc1e5d05fee56607226da629f1577c47471
title: "GraphValidator.Validate"
kind: api
owners: [Inno.Core.Graphs]
apiSurface: editor-script
apiScope: Runtime
---

Validates node availability, ports, edge types, capacity, required inputs and cycles.

**Parameter `document`:** Graph document to validate without modifying it.

**Parameter `resolver`:** Active node definition resolver.

**Parameter `conversion`:** Optional directed type conversion policy.

**Parameter `allowCycles`:** Whether directed cycles are permitted.

**Returns:** A deterministic validation result. Missing definitions remain warnings so documents stay editable.
