---
title: "UiRenderFrame"
description: "Reference for UiRenderFrame in Inno.UI."
uid: api.inno.ui.c04560e6d35bf7f6
kind: api
owners:
  - Inno.UI
apiSurface: source-clr
contracts:
  - project.inno-ui#document-and-frame-contract
---
# `UiRenderFrame`

This reference describes `UiRenderFrame` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`CreateRetirement`](#api-4741d9f94f7056fd) | Method |
| [`commands`](#api-a762df9fd3356d7d) | Property |
| [`empty`](#api-2d9545f40b39bebf) | Property |
| [`meshUpdates`](#api-b483c7cd06a74303) | Property |
| [`releasedMeshes`](#api-54c6768b2b3e5bbd) | Property |
| [`releasedTextures`](#api-dabf10668ec5a9d3) | Property |
| [`textureUpdates`](#api-9d5e0b8b7d15e249) | Property |

## Type declaration

<a id="api-c04560e6d35bf7f6"></a>
<!-- api: T:Inno.UI.UiRenderFrame b046744cf205329cbbad7f8b7400717b46a62cd73d1af1400a82051549a22241 -->

```csharp
public sealed class Inno.UI.UiRenderFrame
```

Contains incremental resource changes and ordered draw commands for one UI context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L161).

## `CreateRetirement`

<a id="api-4741d9f94f7056fd"></a>
<!-- api: M:Inno.UI.UiRenderFrame.CreateRetirement(Inno.UI.UiMeshHandle[],Inno.UI.UiTextureHandle[]) a71eda0505b5d9f6ba724cbc7235a74aee19a5fad80b670a1ee969efb7106379 -->

```csharp
public static Inno.UI.UiRenderFrame Inno.UI.UiRenderFrame.CreateRetirement(Inno.UI.UiMeshHandle[] meshes, Inno.UI.UiTextureHandle[] textures)
```

Creates a command-free frame that deterministically retires plugin-owned resources.

**Parameter `meshes`:** Assigned mesh handles to retire.

**Parameter `textures`:** Assigned texture handles to retire.

**Returns:** An immutable retirement frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L200).

## `commands`

<a id="api-a762df9fd3356d7d"></a>
<!-- api: P:Inno.UI.UiRenderFrame.commands ee00c512ca79b608101edff3944d03f31920521442d1e6bc25e669be04eafeed -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.UI.UiDrawCommand> Inno.UI.UiRenderFrame.commands { get; }
```

Gets ordered draws referencing published resources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L231).

## `empty`

<a id="api-2d9545f40b39bebf"></a>
<!-- api: P:Inno.UI.UiRenderFrame.empty 1368e526633cb437f48772be925dbb7c5229992c64ca07bbf8e031a4c085de1c -->

```csharp
public static Inno.UI.UiRenderFrame Inno.UI.UiRenderFrame.empty { get; }
```

Gets an empty resource-delta frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L186).

## `meshUpdates`

<a id="api-b483c7cd06a74303"></a>
<!-- api: P:Inno.UI.UiRenderFrame.meshUpdates 9a16b2e389602a8c1dd82e5adeaa5310447b5f5c931754f9e32baa4a6adcc2a1 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.UI.UiMeshUpdate> Inno.UI.UiRenderFrame.meshUpdates { get; }
```

Gets created or replaced mesh generations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L215).

## `releasedMeshes`

<a id="api-54c6768b2b3e5bbd"></a>
<!-- api: P:Inno.UI.UiRenderFrame.releasedMeshes 6bdabd9b1b2cfb469e58bf0b01f1ad849a189661a6e084390690aaddb8fea05a -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.UI.UiMeshHandle> Inno.UI.UiRenderFrame.releasedMeshes { get; }
```

Gets mesh generations that must be retired.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L219).

## `releasedTextures`

<a id="api-dabf10668ec5a9d3"></a>
<!-- api: P:Inno.UI.UiRenderFrame.releasedTextures bfb1655d236df639ab19004a4f9ad075710c01279814339d022a9b5fd5670a73 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.UI.UiTextureHandle> Inno.UI.UiRenderFrame.releasedTextures { get; }
```

Gets texture generations that must be retired.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L227).

## `textureUpdates`

<a id="api-9d5e0b8b7d15e249"></a>
<!-- api: P:Inno.UI.UiRenderFrame.textureUpdates b5ec382c5d6d536fcbfd5aa431804dada9b16d4b52968023fd1a43f294e64074 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.UI.UiTextureUpdate> Inno.UI.UiRenderFrame.textureUpdates { get; }
```

Gets created or replaced texture generations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L223).
