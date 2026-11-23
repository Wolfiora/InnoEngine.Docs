---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.fb2e637fbc2e6d34899bc2cecbfa457b067a9db1acbb7ab8c9bc00086dc945f7
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphLoweringRequest.#ctor(Inno.Core.Graphs.GraphDocument,System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Core.Graphs.GraphEndpoint},System.String,System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Graphs.GraphNodeID,Inno.Rendering.Shaders.ShaderSourceModuleAnalysis},System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Graphs.GraphNodeID,Inno.Rendering.Shaders.ShaderIrStageInput})
title: ShaderGraphLoweringRequest.Constructor
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
sourceFingerprint: f6c229218ea81664428f51a0b3cab7c736bd55cba41f128169ac3f43200af45e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `graph`:** Nodes and edges in this stage region; canvas positions are not compilation inputs.

**Parameter `outputs`:** Named region results mapped to stable output endpoints.

**Parameter `implementationID`:** Exact source implementation key selected by the target.

**Parameter `sourceModules`:** Already analyzed source modules keyed by their source node identity.

**Parameter `stageInputs`:** Target-assigned stage inputs keyed by their input node identity.
