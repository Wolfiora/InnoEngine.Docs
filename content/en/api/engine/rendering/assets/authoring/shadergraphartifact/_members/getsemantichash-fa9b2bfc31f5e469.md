---
uid: api.fa9b2bfc31f5e469f7b3ff746fac9d0c26a3439cb1f5631f011485f4ff01750b
symbol: "engine:Inno.Rendering.Assets.Authoring:M:Inno.Rendering.Assets.Authoring.ShaderGraphArtifact.GetSemanticHash(System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationRegistry)"
source: xml
reviewed: 44ce630565197880908b77b5925ce4f9cca21b96f39131ef869064a3d049c24f
title: "GetSemanticHash"
kind: api
owners: [Inno.Rendering.Assets.Authoring]
apiSurface: source-clr
---

Fingerprints semantic graph records and every frozen source dependency, excluding node positions and reserved Editor metadata.

**Parameter `bytes`:** Committed graph authoring artifact.

**Parameter `serialization`:** Owner native converter registry.

**Returns:** A stable semantic identity; target, variant and extension generation remain separate compiler cache inputs.
