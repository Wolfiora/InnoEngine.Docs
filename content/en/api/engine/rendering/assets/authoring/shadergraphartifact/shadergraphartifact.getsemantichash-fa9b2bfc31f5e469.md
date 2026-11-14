---
uid: api.fa9b2bfc31f5e469f7b3ff746fac9d0c26a3439cb1f5631f011485f4ff01750b
symbol: "engine:Inno.Rendering.Assets.Authoring:M:Inno.Rendering.Assets.Authoring.ShaderGraphArtifact.GetSemanticHash(System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationRegistry)"
source: xml
reviewed: 2bebe78dad38e7ac8be2dd4d78d87669cd56cf84b3e4534fa8f2d91cdf18b966
title: "ShaderGraphArtifact.GetSemanticHash"
kind: api
owners: [Inno.Rendering.Assets.Authoring]
apiSurface: source-clr
---

Fingerprints semantic graph records and every frozen source dependency, excluding node positions and reserved Editor metadata.

## Parameters

**Parameter `bytes`:** Committed graph authoring artifact.

**Parameter `serialization`:** Owner native converter registry.

## Returns

A stable semantic identity; target, variant and extension generation remain separate compiler cache inputs.
