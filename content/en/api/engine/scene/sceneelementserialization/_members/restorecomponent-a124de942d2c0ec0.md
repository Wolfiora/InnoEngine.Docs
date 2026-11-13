---
uid: api.a124de942d2c0ec09989a058ea7e1bac4a988b584a7efc5f6ecd1884b57dc222
symbol: "engine:Inno.Scene:M:Inno.Scene.SceneElementSerialization.RestoreComponent(Inno.Scene.GameObject,Inno.Extensibility.Types.TypeRef,System.Guid,System.Int32,System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver)"
source: xml
reviewed: 67a6818665bba78fbde89cbb75a69c97b32f9b80acbebc8e054d1e27db66957f
title: "RestoreComponent"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Recreates one component without invoking Reset and restores its persistent properties.

**Parameter `owner`:** The live GameObject that will own the component.

**Parameter `type`:** The reload-safe identity of the current component implementation.

**Parameter `persistentId`:** The component instance identity to preserve.

**Parameter `componentIndex`:** The requested attachment index.

**Parameter `stateData`:** Complete neutral element bytes produced by CaptureState, including missing-state metadata.

**Parameter `serialization`:** The serialization registry that owns the active converter generation.

**Parameter `assets`:** The resolver used to materialize canonical asset references in restored properties.

**Returns:** The recreated component, or a preserved missing placeholder when its logical type is unavailable.

**Exception `T:System.ArgumentNullException`:** Thrown when `owner` is `null`.

**Exception `T:System.IO.InvalidDataException`:** Thrown when the payload is invalid or the stable type resolves to an incompatible component.

**Exception `T:System.InvalidOperationException`:** Thrown when the identity or component multiplicity conflicts, property restoration is incomplete, or a failed restoration cannot remove its partially created component.
