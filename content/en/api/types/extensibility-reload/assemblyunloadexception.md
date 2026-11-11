---
title: "AssemblyUnloadException"
description: "Reference for AssemblyUnloadException in Inno.Extensibility.Reload."
uid: api.inno.extensibility.reload.b5baecaf4258325d
kind: api
owners:
  - Inno.Extensibility.Reload
apiSurface: source-clr
contracts:
  - project.inno-extensibility-reload#shared-admission-and-retirement-contract
---
# `AssemblyUnloadException`

This reference describes `AssemblyUnloadException` in `Inno.Extensibility.Reload`. Read the [shared contract](../../projects/inno-extensibility-reload.md#shared-admission-and-retirement-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.InvalidOperationException`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-861505e94d606d16) | Method |
| [`collectionAttempts`](#api-4edfe7769be9c55c) | Property |
| [`elapsed`](#api-fadaf0f33956c86a) | Property |
| [`retainedGenerations`](#api-56def0329cefd45d) | Property |

## Type declaration

<a id="api-b5baecaf4258325d"></a>
<!-- api: T:Inno.Extensibility.Reload.AssemblyUnloadException ef701db1d847c0a3d0c98fc6ff229a0900eb2f0155085a4f413e8fa02e7985d2 -->

```csharp
public sealed class Inno.Extensibility.Reload.AssemblyUnloadException : System.InvalidOperationException
```

Reports retired collectible generations that remained reachable after the unload barrier threshold.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/AssemblyUnloadException.cs#L10).

## `#ctor`

<a id="api-861505e94d606d16"></a>
<!-- api: M:Inno.Extensibility.Reload.AssemblyUnloadException.#ctor(System.Collections.Generic.IReadOnlyList{System.String},System.TimeSpan,System.Int32) 964abf72d13c9467a354dfffa6af841d77f3140595fe695f5f6b82905fb4952d -->

```csharp
public Inno.Extensibility.Reload.AssemblyUnloadException.AssemblyUnloadException(System.Collections.Generic.IReadOnlyList<string> retainedGenerations, System.TimeSpan elapsed, int collectionAttempts)
```

Creates a terminal unload failure with stable generation diagnostics.

**Parameter `retainedGenerations`:** Descriptions of every retired generation that remains reachable.

**Parameter `elapsed`:** The elapsed barrier duration.

**Parameter `collectionAttempts`:** The number of full collection cycles already performed.

**Throws `System.ArgumentNullException`:** Thrown when `retainedGenerations` is null.

**Throws `System.ArgumentException`:** Thrown when no retained generation is supplied.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/AssemblyUnloadException.cs#L30).

## `collectionAttempts`

<a id="api-4edfe7769be9c55c"></a>
<!-- api: P:Inno.Extensibility.Reload.AssemblyUnloadException.collectionAttempts 7187cad135e6fc470ecd34569483f05a71f4e9357a5d142bb79c288622702a19 -->

```csharp
public int Inno.Extensibility.Reload.AssemblyUnloadException.collectionAttempts { get; }
```

Gets the number of full collection cycles performed before failure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/AssemblyUnloadException.cs#L58).

## `elapsed`

<a id="api-fadaf0f33956c86a"></a>
<!-- api: P:Inno.Extensibility.Reload.AssemblyUnloadException.elapsed 9c1c0e9050ad01b364bae81fba8fb9f400b71be233d47d0bae7828f190068dad -->

```csharp
public System.TimeSpan Inno.Extensibility.Reload.AssemblyUnloadException.elapsed { get; }
```

Gets the elapsed duration before the barrier faulted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/AssemblyUnloadException.cs#L53).

## `retainedGenerations`

<a id="api-56def0329cefd45d"></a>
<!-- api: P:Inno.Extensibility.Reload.AssemblyUnloadException.retainedGenerations 1da4f8cebe24ea6e42028b5d38a5e19e33cac01449d4b412543ec562e3436251 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Extensibility.Reload.AssemblyUnloadException.retainedGenerations { get; }
```

Gets stable descriptions of every generation that prevented completion.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/AssemblyUnloadException.cs#L48).
