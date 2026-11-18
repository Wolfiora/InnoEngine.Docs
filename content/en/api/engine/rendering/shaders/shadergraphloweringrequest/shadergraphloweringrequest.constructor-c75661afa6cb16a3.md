---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.c75661afa6cb16a372b0c1fc0cab0755fdd2f49cbcf8ef5984e232907f677f7c
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphLoweringRequest.#ctor(Inno.Core.Graphs.GraphDocument,System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Core.Graphs.GraphEndpoint},System.String,System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Graphs.GraphNodeId,Inno.Rendering.Shaders.ShaderSourceModuleAnalysis},System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Graphs.GraphNodeId,Inno.Rendering.Shaders.ShaderIrStageInput})
title: ShaderGraphLoweringRequest.Constructor
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
sourceFingerprint: 8d179e737259a05454c26277a2e89876f3f0be760bedb997141969d23b74a801
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `graph`:** Nodes and edges in this stage region; canvas positions are not compilation inputs.

**Parameter `outputs`:** Named region results mapped to stable output endpoints.

**Parameter `implementationId`:** Exact source implementation key selected by the target.

**Parameter `sourceModules`:** Already analyzed source modules keyed by their source node identity.

**Parameter `stageInputs`:** Target-assigned stage inputs keyed by their input node identity.
