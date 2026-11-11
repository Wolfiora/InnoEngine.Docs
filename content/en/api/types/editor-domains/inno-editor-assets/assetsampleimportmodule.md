---
title: "AssetSampleImportModule"
description: "Reference for AssetSampleImportModule in Inno.Editor.Assets."
uid: api.inno.editor.assets.99453873fb49824b
kind: api
owners:
  - Inno.Editor.Assets
apiSurface: source-clr
contracts:
  - project.inno-editor-assets
---
# `AssetSampleImportModule`

This reference describes `AssetSampleImportModule` in `Inno.Editor.Assets`. Read the [shared contract](../../../projects/inno-editor-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Core.EditorModule`.

## Members

| Member | Kind |
| --- | --- |
| [`Cancel`](#api-5f7d4a7c5f5d4ed8) | Method |
| [`OnDispose`](#api-f1dcf004ca586efa) | Method |
| [`OnStop`](#api-1ef6f419b4bad7a5) | Method |
| [`OnUpdate`](#api-e8cc5cda1811a95d) | Method |
| [`Request`](#api-147bc5a76063959a) | Method |
| [`blocksFollowingUpdates`](#api-52cad00ef5033eae) | Property |
| [`canImport`](#api-d4573738296864b6) | Property |
| [`isBusy`](#api-a0aaf56c08809a1f) | Property |
| [`progress`](#api-7011dbf2a3639c7a) | Property |

## Type declaration

<a id="api-99453873fb49824b"></a>
<!-- api: T:Inno.Editor.Assets.AssetSampleImportModule fd8dc42ca02790935591bd2ceed7820d15b88781f0dd0ecec4ac4ff2f5611934 -->

```csharp
public sealed class Inno.Editor.Assets.AssetSampleImportModule : Inno.Editor.Core.EditorModule
```

Owns sample import validation, publication and rollback independently of its progress window.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Samples/AssetSampleImportModule.cs#L20).

## `Cancel`

<a id="api-5f7d4a7c5f5d4ed8"></a>
<!-- api: M:Inno.Editor.Assets.AssetSampleImportModule.Cancel(System.Int64) 6a638d20061a0fb2e62258e782f2e1aae1b194904f623a18ec35ba09c087b4dc -->

```csharp
public void Inno.Editor.Assets.AssetSampleImportModule.Cancel(long operationId)
```

Cancels only the import observed by the presentation.

**Parameter `operationId`:** The current import identity captured by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Samples/AssetSampleImportModule.cs#L114).

## `OnDispose`

<a id="api-f1dcf004ca586efa"></a>
<!-- api: M:Inno.Editor.Assets.AssetSampleImportModule.OnDispose d437bf4bd249329cf35bf5cdc8026b7d3e9bc6cb6065f684be89e7aa7fd77b92 -->

```csharp
protected override void Inno.Editor.Assets.AssetSampleImportModule.OnDispose()
```

Retries retirement without releasing dependencies still used by background work.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Samples/AssetSampleImportModule.cs#L211).

## `OnStop`

<a id="api-1ef6f419b4bad7a5"></a>
<!-- api: M:Inno.Editor.Assets.AssetSampleImportModule.OnStop(Inno.Editor.Core.EditorContext) 0f70f1968886b798830f5244613ff355aea9015942f646c5308cbb0febb7157b -->

```csharp
protected override void Inno.Editor.Assets.AssetSampleImportModule.OnStop(Inno.Editor.Core.EditorContext context)
```

Cancels and retires pending work before the scripting and asset dependencies stop.

**Parameter `context`:** The stopping Editor's interaction services.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Samples/AssetSampleImportModule.cs#L202).

## `OnUpdate`

<a id="api-e8cc5cda1811a95d"></a>
<!-- api: M:Inno.Editor.Assets.AssetSampleImportModule.OnUpdate(Inno.Editor.Core.EditorContext) 29531e22022bbb1580f80111b2188e3f3fbb787b72370f3e2eb377b180f4ba3c -->

```csharp
protected override void Inno.Editor.Assets.AssetSampleImportModule.OnUpdate(Inno.Editor.Core.EditorContext context)
```

Advances completed background phases and publishes the validated import at a frame safe point.

**Parameter `context`:** The current Editor frame and interaction services.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Samples/AssetSampleImportModule.cs#L126).

## `Request`

<a id="api-147bc5a76063959a"></a>
<!-- api: M:Inno.Editor.Assets.AssetSampleImportModule.Request(Inno.Assets.AssetPath) 9a50252ac8b6b64f87d98a425b5ce66ec49d21f1044854958b3ed53e54e75631 -->

```csharp
public void Inno.Editor.Assets.AssetSampleImportModule.Request(Inno.Assets.AssetPath source)
```

Begins validating an installed sample before its source copy can be committed.

**Parameter `source`:** The installed sample root to validate and import.

**Throws `System.InvalidOperationException`:** The authoring generation is busy or faulted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Samples/AssetSampleImportModule.cs#L82).

## `blocksFollowingUpdates`

<a id="api-52cad00ef5033eae"></a>
<!-- api: P:Inno.Editor.Assets.AssetSampleImportModule.blocksFollowingUpdates a873ceee5d5dd8bd4d3b84f2c57faa273fb1c1f0010d8c3cf7ef9f1178beb8f1 -->

```csharp
public override bool Inno.Editor.Assets.AssetSampleImportModule.blocksFollowingUpdates { get; }
```

Defers later modules while the import pins their generation or requires a Host restart.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Samples/AssetSampleImportModule.cs#L51).

## `canImport`

<a id="api-d4573738296864b6"></a>
<!-- api: P:Inno.Editor.Assets.AssetSampleImportModule.canImport b9962f321addca50a2e6160515d0ea2f1eed961b50c932ac5a03693a5b67c6cf -->

```csharp
public bool Inno.Editor.Assets.AssetSampleImportModule.canImport { get; }
```

Gets whether the current authoring generation admits a new sample import.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Samples/AssetSampleImportModule.cs#L59).

## `isBusy`

<a id="api-a0aaf56c08809a1f"></a>
<!-- api: P:Inno.Editor.Assets.AssetSampleImportModule.isBusy 74f7aa46907d0f9454a3195a738459d488d4c0d12df93c7adac37175fcf9870a -->

```csharp
public bool Inno.Editor.Assets.AssetSampleImportModule.isBusy { get; }
```

Gets whether an import still owns validation or publication work.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Samples/AssetSampleImportModule.cs#L55).

## `progress`

<a id="api-7011dbf2a3639c7a"></a>
<!-- api: P:Inno.Editor.Assets.AssetSampleImportModule.progress 4152c23887ba1850113ba4d4464801b0b1c2fa1db5e9acc31f589fd87aa91188 -->

```csharp
public Inno.Editor.Assets.AssetSampleImportProgress Inno.Editor.Assets.AssetSampleImportModule.progress { get; }
```

Gets a complete immutable progress snapshot under the existing owner lock.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Samples/AssetSampleImportModule.cs#L64).
