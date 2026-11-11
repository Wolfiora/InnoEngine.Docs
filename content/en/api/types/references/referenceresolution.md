---
title: "ReferenceResolution"
description: "Reference for ReferenceResolution in Inno.References."
uid: api.inno.references.3cc0741d247ebad8
kind: api
owners:
  - Inno.References
apiSurface: source-clr
contracts:
  - project.inno-references
---
# `ReferenceResolution`

This reference describes `ReferenceResolution` in `Inno.References`. Read the [shared contract](../../projects/inno-references.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a31e5af3c549de4d) | Method |
| [`descriptor`](#api-29e6307e435f8ea5) | Property |
| [`diagnostic`](#api-1f3f4be09a73b3ab) | Property |
| [`runtimeIdentity`](#api-6dc923eca7a50cbb) | Property |
| [`state`](#api-e42e67e875721358) | Property |

## Type declaration

<a id="api-3cc0741d247ebad8"></a>
<!-- api: T:Inno.References.ReferenceResolution e544086b328d16ea776e85f4502b397fe17d4ed66bb6c677afe12c8484a33176 -->

```csharp
public sealed class Inno.References.ReferenceResolution
```

Reports how one descriptor resolves in an immutable reference-catalog generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceResolution.cs#L9).

## `#ctor`

<a id="api-a31e5af3c549de4d"></a>
<!-- api: M:Inno.References.ReferenceResolution.#ctor(Inno.References.ReferenceDescriptor,Inno.References.ReferenceResolutionState,System.Nullable{Inno.Core.Identity.RuntimeIdentity},System.String) 6d75c93d22a8330c47c062925ccd488f3a8fe0e3e93416a8a657c0f5529d7db0 -->

```csharp
public Inno.References.ReferenceResolution.ReferenceResolution(Inno.References.ReferenceDescriptor descriptor, Inno.References.ReferenceResolutionState state, Inno.Core.Identity.RuntimeIdentity? runtimeIdentity = null, string? diagnostic = null)
```

Creates a reference-resolution result.

**Parameter `descriptor`:** The persistent descriptor that was resolved.

**Parameter `state`:** The resulting state.

**Parameter `runtimeIdentity`:** The domain-qualified live target identity when resolved.

**Parameter `diagnostic`:** Optional caller-facing detail for non-resolved states.

**Throws `System.ArgumentNullException`:** Thrown when `descriptor` is null.

**Throws `System.ArgumentException`:** Thrown when resolved state and runtime identity are inconsistent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceResolution.cs#L32).

## `descriptor`

<a id="api-29e6307e435f8ea5"></a>
<!-- api: P:Inno.References.ReferenceResolution.descriptor 69f6e51e06f07d40118470d78593a5a953bc220d5d20f060d0fbc510bc1f2909 -->

```csharp
public Inno.References.ReferenceDescriptor Inno.References.ReferenceResolution.descriptor { get; }
```

Gets the persistent descriptor that produced this result.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceResolution.cs#L50).

## `diagnostic`

<a id="api-1f3f4be09a73b3ab"></a>
<!-- api: P:Inno.References.ReferenceResolution.diagnostic d2bc7a379d7d3ee0fdcd9d9a867c6eb5ff7a011be10f57b3e5c701994ff7e56f -->

```csharp
public string? Inno.References.ReferenceResolution.diagnostic { get; }
```

Gets optional diagnostics describing why the reference is not resolved.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceResolution.cs#L65).

## `runtimeIdentity`

<a id="api-6dc923eca7a50cbb"></a>
<!-- api: P:Inno.References.ReferenceResolution.runtimeIdentity cf9b953b909cf7d6d25fd85ae891795e5140d49aac0b3810b58f64725284b8b7 -->

```csharp
public Inno.Core.Identity.RuntimeIdentity? Inno.References.ReferenceResolution.runtimeIdentity { get; }
```

Gets the live target identity when `Inno.References.ReferenceResolution.state` is `Inno.References.ReferenceResolutionState.Resolved`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceResolution.cs#L60).

## `state`

<a id="api-e42e67e875721358"></a>
<!-- api: P:Inno.References.ReferenceResolution.state 6ee04d4b7952854757c9255201a99504695628b8f40a4df017a129803e0fbe5f -->

```csharp
public Inno.References.ReferenceResolutionState Inno.References.ReferenceResolution.state { get; }
```

Gets the current resolution state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceResolution.cs#L55).
