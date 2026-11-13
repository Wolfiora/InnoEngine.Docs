---
uid: api.3a328fa681752ae0926d695c7e614ec0a7491b9f3837e7f1d78203728a4ad8d3
symbol: "engine:Inno.Scene:M:Inno.Scene.ScenePropertySerialization.CaptureProperty(Inno.Scene.EngineObject,System.String,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver)"
source: xml
reviewed: dfe842b38f361e08b5693bade07d5339dc425a210b5461540afe3f3404db855c
title: "CaptureProperty"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Captures one persistent property without serializing the complete scene.

**Parameter `target`:** The live scene object containing the property.

**Parameter `propertyName`:** The exact serialized member key.

**Parameter `serialization`:** The serialization registry that owns the active converter generation.

**Parameter `assets`:** The resolver used to preserve canonical asset references in captured values.

**Returns:** Neutral bytes that can be restored into the same logical object identity.

**Exception `T:System.ArgumentNullException`:** Thrown when `target` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when `propertyName` is empty or unknown.

**Exception `T:System.InvalidOperationException`:** Thrown when the target is destroyed or not owned by a loaded scene.
