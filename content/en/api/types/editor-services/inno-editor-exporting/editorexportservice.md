---
title: "EditorExportService"
description: "Reference for EditorExportService in Inno.Editor.Exporting."
uid: api.inno.editor.exporting.76c78e31dbe32b8f
kind: api
owners:
  - Inno.Editor.Exporting
apiSurface: source-clr
contracts:
  - project.inno-editor-exporting
---
# `EditorExportService`

This reference describes `EditorExportService` in `Inno.Editor.Exporting`. Read the [shared contract](../../../projects/inno-editor-exporting.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Core.EditorModule`.

## Members

| Member | Kind |
| --- | --- |
| [`Cancel`](#api-3cadcedd1d5d2c52) | Method |
| [`GetGameTargetDisplayName`](#api-ce410a4cdbcb88d7) | Method |
| [`GetManagedDeployments`](#api-0909ee23b856b7f0) | Method |
| [`OnDispose`](#api-d84eed66653aa6af) | Method |
| [`OnStop`](#api-620c1ce2f9ed04fd) | Method |
| [`OnUpdate`](#api-3f1751ea30dfa4d2) | Method |
| [`StartGame`](#api-eaaffb6ea380ef07) | Method |
| [`StartPlugin`](#api-ebbda489ac34deb3) | Method |
| [`availableGameTargets`](#api-ac046242e2e0433f) | Property |
| [`isGameBusy`](#api-c353af4188d49c28) | Property |
| [`isPluginBusy`](#api-cee2fa9333a51b9d) | Property |
| [`progress`](#api-59fbbc452f4e5949) | Property |

## Type declaration

<a id="api-76c78e31dbe32b8f"></a>
<!-- api: T:Inno.Editor.Exporting.EditorExportService 995c4025904eeb6bc8f8f50e1b6ab431bb91fb26009a7e04f0661c48d9eddc5c -->

```csharp
public sealed class Inno.Editor.Exporting.EditorExportService : Inno.Editor.Core.EditorModule
```

Owns asynchronous export, progress, cancellation and retirement independently from presentation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Exporting/Runtime/EditorExportService.cs#L20).

## `Cancel`

<a id="api-3cadcedd1d5d2c52"></a>
<!-- api: M:Inno.Editor.Exporting.EditorExportService.Cancel(System.Int64) 93e16e2e98aede6e5574228633443ee8914e8d392b7b78f1e8a8e2adee753a07 -->

```csharp
public void Inno.Editor.Exporting.EditorExportService.Cancel(long operationId)
```

Cancels the observed export only while that operation still owns this service.

**Parameter `operationId`:** The operation observed by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Exporting/Runtime/EditorExportService.cs#L63).

## `GetGameTargetDisplayName`

<a id="api-ce410a4cdbcb88d7"></a>
<!-- api: M:Inno.Editor.Exporting.EditorExportService.GetGameTargetDisplayName(Inno.Build.BuildTargetId) 6a1a2d5419b5aef08b4af3fb37c09042955638ffe1722b920acb70716bcf6589 -->

```csharp
public string Inno.Editor.Exporting.EditorExportService.GetGameTargetDisplayName(Inno.Build.BuildTargetId target)
```

Gets a registered target label or a diagnostic for an unavailable target.

**Parameter `target`:** The target to describe.

**Returns:** A presentation label; never used as a routing identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Exporting/Runtime/EditorExportService.cs#L93).

## `GetManagedDeployments`

<a id="api-0909ee23b856b7f0"></a>
<!-- api: M:Inno.Editor.Exporting.EditorExportService.GetManagedDeployments(Inno.Build.BuildTargetId) 9913b861d9d5b3d9c40e4b435301ce68d28e238ec29770a54b56b581d7f7f600 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Build.Managed.ManagedDeploymentId> Inno.Editor.Exporting.EditorExportService.GetManagedDeployments(Inno.Build.BuildTargetId target)
```

Gets deployment implementations registered for a target.

**Parameter `target`:** The explicitly chosen build target.

**Returns:** The registered deployment choices; no host fallback is introduced.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Exporting/Runtime/EditorExportService.cs#L83).

## `OnDispose`

<a id="api-d84eed66653aa6af"></a>
<!-- api: M:Inno.Editor.Exporting.EditorExportService.OnDispose 7248a0baa9aee7cc40a31fcb54a3bfc0507cc8b9123dc632cb7235e09d986c79 -->

```csharp
protected override void Inno.Editor.Exporting.EditorExportService.OnDispose()
```

Drains export cleanup before releasing cancellation resources owned by this module.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Exporting/Runtime/EditorExportService.cs#L187).

## `OnStop`

<a id="api-620c1ce2f9ed04fd"></a>
<!-- api: M:Inno.Editor.Exporting.EditorExportService.OnStop(Inno.Editor.Core.EditorContext) 4eece8075a998fc217e07dc375997a413c3f6451ef8bfe4b2a42fa0c528bc317 -->

```csharp
protected override void Inno.Editor.Exporting.EditorExportService.OnStop(Inno.Editor.Core.EditorContext context)
```

Cancels and drains active export work before the Editor generation is stopped.

**Parameter `context`:** The active Editor context being stopped.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Exporting/Runtime/EditorExportService.cs#L179).

## `OnUpdate`

<a id="api-3f1751ea30dfa4d2"></a>
<!-- api: M:Inno.Editor.Exporting.EditorExportService.OnUpdate(Inno.Editor.Core.EditorContext) ba8a98ba76386aeea98f247eaddfe6f24acbfe92eedd2d4e2118d52f38e7efb4 -->

```csharp
protected override void Inno.Editor.Exporting.EditorExportService.OnUpdate(Inno.Editor.Core.EditorContext context)
```

Advances compilation tickets, build progress, and completed export tasks.

**Parameter `context`:** The active Editor context for the current frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Exporting/Runtime/EditorExportService.cs#L156).

## `StartGame`

<a id="api-eaaffb6ea380ef07"></a>
<!-- api: M:Inno.Editor.Exporting.EditorExportService.StartGame(Inno.Build.GameBuildRequest) 0232370852b1f315ca278efa7b9dc92d01aee677621c0b5fa8183ec7a2973083 -->

```csharp
public void Inno.Editor.Exporting.EditorExportService.StartGame(Inno.Build.GameBuildRequest request)
```

Prepares the selected Support Pack before capturing and building the game.

**Parameter `request`:** The complete game request; no form or window state is retained.

**Throws `System.InvalidOperationException`:** Another export still owns the service.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Exporting/Runtime/EditorExportService.cs#L125).

## `StartPlugin`

<a id="api-ebbda489ac34deb3"></a>
<!-- api: M:Inno.Editor.Exporting.EditorExportService.StartPlugin(Inno.Build.PluginBuildRequest) f571fbeaae48a62bd09420f8ac5b6d993e254f45c7990a6bceabaec81d18e7e0 -->

```csharp
public void Inno.Editor.Exporting.EditorExportService.StartPlugin(Inno.Build.PluginBuildRequest request)
```

Starts a source-package export using the existing Build pipeline.

**Parameter `request`:** The complete, explicitly selected package request.

**Throws `System.InvalidOperationException`:** Another export still owns the service.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Exporting/Runtime/EditorExportService.cs#L106).

## `availableGameTargets`

<a id="api-ac046242e2e0433f"></a>
<!-- api: P:Inno.Editor.Exporting.EditorExportService.availableGameTargets b8daf0ac539e01967606cd0bf67863da344a8168cbf43552f0fcbc7f671dc78d -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Build.BuildTargetId> Inno.Editor.Exporting.EditorExportService.availableGameTargets { get; }
```

Gets the targets registered by the active Build distribution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Exporting/Runtime/EditorExportService.cs#L72).

## `isGameBusy`

<a id="api-c353af4188d49c28"></a>
<!-- api: P:Inno.Editor.Exporting.EditorExportService.isGameBusy 1b2696e78d42b3c681568dc4f1f67c3a880791d37e29191e0fea167f3f2db73d -->

```csharp
public bool Inno.Editor.Exporting.EditorExportService.isGameBusy { get; }
```

Gets whether a game export or its Support Pack preparation is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Exporting/Runtime/EditorExportService.cs#L50).

## `isPluginBusy`

<a id="api-cee2fa9333a51b9d"></a>
<!-- api: P:Inno.Editor.Exporting.EditorExportService.isPluginBusy fe9db57d1a5c07126b2ec6c208f1dfbf96338d6ab0ea91f5b78a192a47016b25 -->

```csharp
public bool Inno.Editor.Exporting.EditorExportService.isPluginBusy { get; }
```

Gets whether a Plugin source export still owns build resources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Exporting/Runtime/EditorExportService.cs#L46).

## `progress`

<a id="api-59fbbc452f4e5949"></a>
<!-- api: P:Inno.Editor.Exporting.EditorExportService.progress bede52ba4a533c82927d13c10d08bc6a7ee58aa3e75b588bdba2f61bfe669dc0 -->

```csharp
public Inno.Editor.Exporting.EditorExportProgress Inno.Editor.Exporting.EditorExportService.progress { get; }
```

Gets one owner-thread snapshot for the current export, including cancellation and action identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Exporting/Runtime/EditorExportService.cs#L54).
