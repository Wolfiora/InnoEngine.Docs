---
title: "IEditorReloadGuard"
description: "Reference for IEditorReloadGuard in Inno.Editor.Core."
uid: api.inno.editor.core.3d38aa490696e4d1
kind: api
owners:
  - Inno.Editor.Core
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
---
# `IEditorReloadGuard`

This reference describes `IEditorReloadGuard` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`blockingReason`](#api-ded9947897137ec0) | Property |
| [`canActivateReload`](#api-0d08a994c9622f81) | Property |
| [`canRequestReload`](#api-85ce04d867147f5b) | Property |

## Type declaration

<a id="api-3d38aa490696e4d1"></a>
<!-- api: T:Inno.Editor.Core.IEditorReloadGuard 310d65a8606c9fbc7accaa687fe3e7869851f3d1606c64f66aaebc004dd7daea -->

```csharp
public interface Inno.Editor.Core.IEditorReloadGuard
```

Describes whether an editor owner has released the state required for a generation change.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Reloading/IEditorReloadGuard.cs#L6).

## `blockingReason`

<a id="api-ded9947897137ec0"></a>
<!-- api: P:Inno.Editor.Core.IEditorReloadGuard.blockingReason d4fab878dfada29e608e17b2bc438a939db7fbbc986250d33bc1bc6bdf9f3b87 -->

```csharp
string? Inno.Editor.Core.IEditorReloadGuard.blockingReason { get; }
```

Gets the reason admission is blocked, or null when the owner is ready for reload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Reloading/IEditorReloadGuard.cs#L21).

## `canActivateReload`

<a id="api-0d08a994c9622f81"></a>
<!-- api: P:Inno.Editor.Core.IEditorReloadGuard.canActivateReload 121a93ed31a2e27c78e19066780d9d58f7a4de00125a84245c657c158760fca4 -->

```csharp
bool Inno.Editor.Core.IEditorReloadGuard.canActivateReload { get; }
```

Gets whether compilation and activation may proceed without a live isolated runtime session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Reloading/IEditorReloadGuard.cs#L16).

## `canRequestReload`

<a id="api-85ce04d867147f5b"></a>
<!-- api: P:Inno.Editor.Core.IEditorReloadGuard.canRequestReload eb49e5580de5f28ee3268e8f74343a542125a14884f9fdd43d92449eb84ef6cb -->

```csharp
bool Inno.Editor.Core.IEditorReloadGuard.canRequestReload { get; }
```

Gets whether an explicit user reload request may be accepted in the current owner state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Reloading/IEditorReloadGuard.cs#L11).
