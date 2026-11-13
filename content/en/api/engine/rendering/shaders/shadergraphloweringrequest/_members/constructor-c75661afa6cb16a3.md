---
uid: api.c75661afa6cb16a372b0c1fc0cab0755fdd2f49cbcf8ef5984e232907f677f7c
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphLoweringRequest.#ctor(Inno.Core.Graphs.GraphDocument,System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Core.Graphs.GraphEndpoint},System.String,System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Graphs.GraphNodeId,Inno.Rendering.Shaders.ShaderSourceModuleAnalysis},System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Graphs.GraphNodeId,Inno.Rendering.Shaders.ShaderIrStageInput})"
source: xml
reviewed: cfc082de08154ac237aa2ee741fc80176e82c30d8738f52537f74d19ca844801
title: "Constructor"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Captures a region without retaining an asset object, source resolver, node provider or UI selection.

**Parameter `graph`:** Nodes and edges in this stage region; canvas positions are not compilation inputs.

**Parameter `outputs`:** Named region results mapped to stable output endpoints.

**Parameter `implementationId`:** Exact source implementation key selected by the target.

**Parameter `sourceModules`:** Already analyzed source modules keyed by their source node identity.

**Parameter `stageInputs`:** Target-assigned stage inputs keyed by their input node identity.
