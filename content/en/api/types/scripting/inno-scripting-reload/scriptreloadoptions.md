---
title: "ScriptReloadOptions"
description: "Reference for ScriptReloadOptions in Inno.Scripting.Reload."
uid: api.inno.scripting.reload.5e58b031a84cc1de
kind: api
owners:
  - Inno.Scripting.Reload
apiSurface: source-clr
contracts:
  - project.inno-scripting-reload
---
# `ScriptReloadOptions`

This reference describes `ScriptReloadOptions` in `Inno.Scripting.Reload`. Read the [shared contract](../../../projects/inno-scripting-reload.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2995c03f0fc9c532) | Method |
| [`autoCompile`](#api-c979a8724228d153) | Property |
| [`compilationWarningTimeout`](#api-c38c4f6cbdedce43) | Property |
| [`debounceMilliseconds`](#api-ee6fba86871ed254) | Property |
| [`unloadCollectionInterval`](#api-f208b10bb0a775e5) | Property |
| [`unloadRetentionTimeout`](#api-88f5e587d7b44a7e) | Property |

## Type declaration

<a id="api-5e58b031a84cc1de"></a>
<!-- api: T:Inno.Scripting.Reload.ScriptReloadOptions 9e53f24253de0cdc4333a50a3d1bfa01ffbb07437a815a961a4c7f2a58426921 -->

```csharp
public sealed class Inno.Scripting.Reload.ScriptReloadOptions
```

Configures automatic compilation requests and retired-generation verification.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadOptions.cs#L7).

## `#ctor`

<a id="api-2995c03f0fc9c532"></a>
<!-- api: M:Inno.Scripting.Reload.ScriptReloadOptions.#ctor 841f2d85d2e5a4d1f033caa3ae8dffb5d38cd3dd47c5d39d0b03dbfc4d44e0f9 -->

```csharp
public Inno.Scripting.Reload.ScriptReloadOptions.ScriptReloadOptions()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadOptions.cs#L7).

## `autoCompile`

<a id="api-c979a8724228d153"></a>
<!-- api: P:Inno.Scripting.Reload.ScriptReloadOptions.autoCompile 48a7db07c8dc6ef3264e5e28f1332e1a266874e0ed1117a76e6546ff846e4fc2 -->

```csharp
public bool Inno.Scripting.Reload.ScriptReloadOptions.autoCompile { get; init; }
```

Gets whether startup and subsequent source changes request automatic compilation.

**Constraints:** The initial request starts immediately. Later change requests are consumed only at a focused
Editor safe point after the configured debounce duration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadOptions.cs#L16).

## `compilationWarningTimeout`

<a id="api-c38c4f6cbdedce43"></a>
<!-- api: P:Inno.Scripting.Reload.ScriptReloadOptions.compilationWarningTimeout f138ef44d4957d80715ff3ec77778989047eaa6e42f43cd51a8974ed27aa9085 -->

```csharp
public System.TimeSpan Inno.Scripting.Reload.ScriptReloadOptions.compilationWarningTimeout { get; init; }
```

Gets the elapsed duration after which an active compilation is reported as long-running.

**Constraints:** Use `System.Threading.Timeout.InfiniteTimeSpan` to disable the warning. The warning
never cancels compilation automatically.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadOptions.cs#L30).

## `debounceMilliseconds`

<a id="api-ee6fba86871ed254"></a>
<!-- api: P:Inno.Scripting.Reload.ScriptReloadOptions.debounceMilliseconds 1438359436a12a01de3cea85a80dfec0788bc9902a1b246aceadc95d8b7409f1 -->

```csharp
public int Inno.Scripting.Reload.ScriptReloadOptions.debounceMilliseconds { get; init; }
```

Gets the quiet period applied to source changes before a compilation starts, in milliseconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadOptions.cs#L21).

## `unloadCollectionInterval`

<a id="api-f208b10bb0a775e5"></a>
<!-- api: P:Inno.Scripting.Reload.ScriptReloadOptions.unloadCollectionInterval 91b60cbebcdf4b79390202f64bc76b6eb93d2a7f724e0d72252ffad4b6bc5a85 -->

```csharp
public System.TimeSpan Inno.Scripting.Reload.ScriptReloadOptions.unloadCollectionInterval { get; init; }
```

Gets the minimum interval between full garbage-collection attempts for retired assembly generations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadOptions.cs#L35).

## `unloadRetentionTimeout`

<a id="api-88f5e587d7b44a7e"></a>
<!-- api: P:Inno.Scripting.Reload.ScriptReloadOptions.unloadRetentionTimeout d196ab90dd556553ae139b5b02fbdf98cca55f26c98c16c8c1c1fa473a2697c3 -->

```csharp
public System.TimeSpan Inno.Scripting.Reload.ScriptReloadOptions.unloadRetentionTimeout { get; init; }
```

Gets the duration after which a retained collectible generation permanently faults this reload host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadOptions.cs#L40).
