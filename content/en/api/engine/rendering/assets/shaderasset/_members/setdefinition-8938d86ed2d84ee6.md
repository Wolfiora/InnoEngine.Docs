---
uid: api.8938d86ed2d84ee68b90eb748fb9db8aefd4f1eb79ccccae814ecbc2eae82396
symbol: "engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.ShaderAsset.SetDefinition(Inno.Rendering.Assets.ShaderDefinition,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: 265815e56183c65702843fce2595d45a0f0c66e096f48b09404b062a0bac68ab
title: "SetDefinition"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: source-clr
---

Commits a validated definition through the native serialization channel.

**Parameter `value`:** Complete definition visible to materials and target compilation.

**Parameter `serialization`:** The serialization registry that owns the active shader converter generation.

**Parameter `context`:** The complete owner reference context used for material texture defaults.

**Exception `T:System.ArgumentException`:** A declaration collection is null. The previous committed definition remains unchanged.

**Exception `T:System.InvalidOperationException`:** Serialization cannot encode the candidate. No part of the candidate is published.
