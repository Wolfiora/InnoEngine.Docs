---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a5c9cb03dd242bee4badaff506466aff17572ba7679494822629c7b3d45fabaa
symbol: scripting:Inno.Core.Graphs:M:InnoEngine.Graphs.GraphValidator.Validate(InnoEngine.Graphs.GraphDocument,InnoEngine.Graphs.IGraphNodeDefinitionResolver,InnoEngine.Graphs.IGraphTypeConversion,System.Boolean)
title: GraphValidator.Validate
kind: api
owners:
- Inno.Core.Graphs
apiSurface: editor-script
sourceFingerprint: 8b897f3c932ff8515faacfda81f15fd9acd546405855ff3e8dd6c54f7b863f6e
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
