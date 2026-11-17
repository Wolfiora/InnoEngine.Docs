---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a5c9cb03dd242bee4badaff506466aff17572ba7679494822629c7b3d45fabaa
symbol: scripting:Inno.Core.Graphs:M:InnoEngine.Graphs.GraphValidator.Validate(InnoEngine.Graphs.GraphDocument,InnoEngine.Graphs.IGraphNodeDefinitionResolver,InnoEngine.Graphs.IGraphTypeConversion,System.Boolean)
title: GraphValidator.Validate
kind: api
owners:
- Inno.Core.Graphs
apiSurface: editor-script
reviewed: 5b957301d9c0a63b9c09c99be14d2e0daee7492dc67563dfc080b1c105658840
apiScope: Runtime
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
