---
uid: api.357ce9d0546a0706c2c20f144d63f35ae45bcf302823b6a75c9afe2b8a7d5489
symbol: "engine:Inno.Scene:M:Inno.Scene.ScenePropertySerialization.CaptureProperties(Inno.Scene.EngineObject,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver)"
source: xml
reviewed: 31425b92588ae1bd09fb53a3f546924dc416cbf010e55af28222ed76430a768d
title: "CaptureProperties"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Captures all persistent properties without serializing the complete scene.

**Parameter `target`:** The live scene object whose state should be captured.

**Parameter `serialization`:** The serialization registry that owns the active converter generation.

**Parameter `assets`:** The resolver used to preserve canonical asset references in captured values.

**Returns:** Neutral bytes containing independently encoded properties.

**Exception `T:System.ArgumentNullException`:** Thrown when `target` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the target is destroyed or not owned by a loaded scene.
