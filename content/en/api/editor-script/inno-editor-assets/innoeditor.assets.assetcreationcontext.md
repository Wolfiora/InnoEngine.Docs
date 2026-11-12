---
title: "AssetCreationContext"
description: "Reference for AssetCreationContext in Inno.Editor.Assets."
uid: api.inno.editor.assets.editor-script.2ab511220e2bb927
kind: api
owners:
  - Inno.Editor.Assets
apiSurface: editor-script
contracts:
  - project.inno-editor-assets
  - manual.scripting.use-script-api
---
# `AssetCreationContext`

This reference describes `AssetCreationContext` in `Inno.Editor.Assets`. Read the [shared contract](../../projects/inno-editor-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-dbac17a713030593) | Method |
| [`EncodeNative`](#api-0bfa33131e275b00) | Method |

## Type declaration

<a id="api-2ab511220e2bb927"></a>
<!-- api: T:InnoEditor.Assets.AssetCreationContext 484fe48b9a8d2e1db926036a33d18feada40371e2fed1885533f07216f5bc594 -->

```csharp
public sealed class InnoEditor.Assets.AssetCreationContext
```

Provides source encoding services to one detached Asset creation template invocation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L169).

## `#ctor`

<a id="api-dbac17a713030593"></a>
<!-- api: M:InnoEditor.Assets.AssetCreationContext.#ctor 23ad73559b908a8f9e5643909ac9bf2a894aa6e64411db1b20d2b969203a0cf6 -->

```csharp
public InnoEditor.Assets.AssetCreationContext.AssetCreationContext()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L169).

## `EncodeNative`

<a id="api-0bfa33131e275b00"></a>
<!-- api: M:InnoEditor.Assets.AssetCreationContext.EncodeNative(InnoEngine.Assets.AssetObject) 3f86864837f6b0b1d46fe91dede70dc2de2b5283a2abb5019bd2780da3d802d6 -->

```csharp
public byte[] InnoEditor.Assets.AssetCreationContext.EncodeNative(InnoEngine.Assets.AssetObject asset)
```

Encodes an Asset value through the current native structured source serializer.

**Parameter `asset`:** Detached Asset value to encode.

**Returns:** Complete native source bytes, including the concrete serialized type identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L191).
