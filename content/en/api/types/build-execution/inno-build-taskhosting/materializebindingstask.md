---
title: "MaterializeBindingsTask"
description: "Reference for MaterializeBindingsTask in Inno.Build.TaskHosting."
uid: api.inno.build.taskhosting.26b0f1776c89752a
kind: api
owners:
  - Inno.Build.TaskHosting
apiSurface: source-clr
contracts:
  - project.inno-build-taskhosting
---
# `MaterializeBindingsTask`

This reference describes `MaterializeBindingsTask` in `Inno.Build.TaskHosting`. Read the [shared contract](../../../projects/inno-build-taskhosting.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Microsoft.Build.Utilities.Task`.

**Direct interfaces:** `Microsoft.Build.Framework.ICancelableTask`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9dbca49a28856b54) | Method |
| [`Cancel`](#api-e5767f9bdf685263) | Method |
| [`Execute`](#api-7610b75f0d746f23) | Method |
| [`ArtifactDirectory`](#api-6733745ec3335081) | Property |
| [`ArtifactOwnerDirectory`](#api-d1f660332f096078) | Property |
| [`ComponentProject`](#api-e3e8ffd0991fcd6e) | Property |
| [`Fingerprint`](#api-b60abceaf43401bc) | Property |
| [`IntermediateDirectory`](#api-fbff53108ad64cc2) | Property |
| [`MaterializedSource`](#api-c86cf064bcd8f170) | Property |
| [`Source`](#api-b087270b4dc07de0) | Property |

## Type declaration

<a id="api-26b0f1776c89752a"></a>
<!-- api: T:Inno.Build.TaskHosting.MaterializeBindingsTask c1763bdc37660ac222d8f855356137d2ede918c42e82b9dc19c99633ca538b2f -->

```csharp
public sealed class Inno.Build.TaskHosting.MaterializeBindingsTask : Microsoft.Build.Utilities.Task, Microsoft.Build.Framework.ICancelableTask
```

Copies one protected generated source into the consuming SDK build's own intermediate directory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/MaterializeBindingsTask.cs#L14).

## `#ctor`

<a id="api-9dbca49a28856b54"></a>
<!-- api: M:Inno.Build.TaskHosting.MaterializeBindingsTask.#ctor bbb14862a929e0e886d4779f47c6904e21424965512a65d93b65b823b0eb4318 -->

```csharp
public Inno.Build.TaskHosting.MaterializeBindingsTask.MaterializeBindingsTask()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/MaterializeBindingsTask.cs#L14).

## `Cancel`

<a id="api-e5767f9bdf685263"></a>
<!-- api: M:Inno.Build.TaskHosting.MaterializeBindingsTask.Cancel 65b5175e762346b5696c9e35e24147fb20af149e9cfaecefa1789cdfa6ea58c4 -->

```csharp
public void Inno.Build.TaskHosting.MaterializeBindingsTask.Cancel()
```

Cancels ownership acquisition without disturbing an active publisher.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/MaterializeBindingsTask.cs#L62).

## `Execute`

<a id="api-7610b75f0d746f23"></a>
<!-- api: M:Inno.Build.TaskHosting.MaterializeBindingsTask.Execute a92126735c9df25c8d84518cb4754b66e928866970ea4e93bbf8cba4981429ce -->

```csharp
public override bool Inno.Build.TaskHosting.MaterializeBindingsTask.Execute()
```

Validates and copies the source while holding its publication owner.

**Returns:** True for a complete private source; false after logging a failed or canceled copy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/MaterializeBindingsTask.cs#L75).

## `ArtifactDirectory`

<a id="api-6733745ec3335081"></a>
<!-- api: P:Inno.Build.TaskHosting.MaterializeBindingsTask.ArtifactDirectory 6ad5463fb3e6edb2a347079eacd3106de42db62aa127b1729582e12ec9842043 -->

```csharp
public string Inno.Build.TaskHosting.MaterializeBindingsTask.ArtifactDirectory { get; set; }
```

Gets or sets the immutable artifact root; empty denotes mutable host-source publication.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/MaterializeBindingsTask.cs#L41).

## `ArtifactOwnerDirectory`

<a id="api-d1f660332f096078"></a>
<!-- api: P:Inno.Build.TaskHosting.MaterializeBindingsTask.ArtifactOwnerDirectory 0d9e17760f6c9ac9aa00e4a11f85dc3562aa11a3d6bd1ef8a14c9da88e5a5085 -->

```csharp
public string Inno.Build.TaskHosting.MaterializeBindingsTask.ArtifactOwnerDirectory { get; set; }
```

Gets or sets the exact publisher root coordinating immutable binding readers and retirement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/MaterializeBindingsTask.cs#L46).

## `ComponentProject`

<a id="api-e3e8ffd0991fcd6e"></a>
<!-- api: P:Inno.Build.TaskHosting.MaterializeBindingsTask.ComponentProject f9ecfefe1761b1c9df0fce3d9e25547754525466ea939a7f974e083b7beb582e -->

```csharp
public string Inno.Build.TaskHosting.MaterializeBindingsTask.ComponentProject { get; set; }
```

Gets or sets the Native project owning mutable host-source publication.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/MaterializeBindingsTask.cs#L36).

## `Fingerprint`

<a id="api-b60abceaf43401bc"></a>
<!-- api: P:Inno.Build.TaskHosting.MaterializeBindingsTask.Fingerprint a9f7b5915c7b0f3fef1a92276bf6c27c451d31e26bddd5ed1a236f47b742148d -->

```csharp
public string Inno.Build.TaskHosting.MaterializeBindingsTask.Fingerprint { get; set; }
```

Gets or sets the exact generation identity required when consuming an immutable artifact.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/MaterializeBindingsTask.cs#L51).

## `IntermediateDirectory`

<a id="api-fbff53108ad64cc2"></a>
<!-- api: P:Inno.Build.TaskHosting.MaterializeBindingsTask.IntermediateDirectory 02291bd45806b57910d0a7ba474f25f0ebfbf212d9917233cbb37308f1761261 -->

```csharp
public string Inno.Build.TaskHosting.MaterializeBindingsTask.IntermediateDirectory { get; set; }
```

Gets or sets the absolute SDK-owned intermediate root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/MaterializeBindingsTask.cs#L30).

## `MaterializedSource`

<a id="api-c86cf064bcd8f170"></a>
<!-- api: P:Inno.Build.TaskHosting.MaterializeBindingsTask.MaterializedSource 3112bbdf70d491d1a65368ad080bd565d0c930e80d076431baedb4178f7454ec -->

```csharp
public string Inno.Build.TaskHosting.MaterializeBindingsTask.MaterializedSource { get; private set; }
```

Gets the only generated Compile source, owned by this SDK build after the task returns.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/MaterializeBindingsTask.cs#L57).

## `Source`

<a id="api-b087270b4dc07de0"></a>
<!-- api: P:Inno.Build.TaskHosting.MaterializeBindingsTask.Source 77cc73b1bc03bf902037a264f28334d313d4abe2645ceb36a0deaa741ee9c668 -->

```csharp
public string Inno.Build.TaskHosting.MaterializeBindingsTask.Source { get; set; }
```

Gets or sets the exact selected managed source, without selecting another generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/MaterializeBindingsTask.cs#L24).
