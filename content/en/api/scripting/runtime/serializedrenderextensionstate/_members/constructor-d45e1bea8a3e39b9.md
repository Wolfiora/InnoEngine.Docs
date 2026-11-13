---
uid: api.d45e1bea8a3e39b91b18ed4ac6e8523086ebcd87540eb70e910adda75434ae45
symbol: "scripting:Inno.Rendering.Assets:M:InnoEngine.Rendering.SerializedRenderExtensionState.#ctor(System.Guid,System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: 5093765149dd77becbcdbbc02ac88e7f129dd7b00e829953bbe16995c79e4983
title: "Constructor"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: editor-script
apiScope: Runtime
---

Creates immutable extension state from stable identity and property bytes.

**Parameter `stableTypeId`:** Stable type identity, or empty when the extension has no typed settings.

**Parameter `propertyData`:** Neutral native property bytes produced by asset serialization. Use the snapshot constructor when settings reference assets.
