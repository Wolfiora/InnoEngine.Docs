---
title: "AnimationTarget"
description: "Reference for AnimationTarget in Inno.Animation."
uid: api.inno.animation.runtime-script.81b8f90f8d029dad
kind: api
owners:
  - Inno.Animation
apiSurface: runtime-script
contracts:
  - project.inno-animation#target-and-service-contract
  - manual.scripting.use-script-api
---
# `AnimationTarget`

This reference describes `AnimationTarget` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Animation.AnimationTarget>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7dca251bfb29625f) | Method |
| [`Equals`](#api-20e0973f2f0cf4b6) | Method |
| [`Equals`](#api-52c612351217df1f) | Method |
| [`GetHashCode`](#api-bd8b2bc28f86b2cd) | Method |
| [```Resolve``1```](#api-34fcfb2d52e17ad8) | Method |
| [`isSamplingOnly`](#api-f55c54e406c6ce27) | Property |
| [`isValid`](#api-4152cfa4622faa2d) | Property |
| [`persistentId`](#api-a1653e413a5bed7d) | Property |
| [`samplingOnly`](#api-6fe5e6ebab95d478) | Property |

## Type declaration

<a id="api-81b8f90f8d029dad"></a>
<!-- api: T:InnoEngine.Animation.AnimationTarget 5c960222c15e3722e727e25c10614eed9bac5a0f31939fb1be059f30ff91beb2 -->

```csharp
public readonly struct InnoEngine.Animation.AnimationTarget : System.IEquatable<InnoEngine.Animation.AnimationTarget>
```

Identifies a transient animation destination without retaining the destination object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTarget.cs#L9).

## `#ctor`

<a id="api-7dca251bfb29625f"></a>
<!-- api: M:InnoEngine.Animation.AnimationTarget.#ctor(InnoEngine.Core.Identity) 9ecf5d119d3b27fd3b489e133c43214b5cc5670e292784226c1855683e664432 -->

```csharp
public InnoEngine.Animation.AnimationTarget.AnimationTarget(InnoEngine.Core.Identity identity)
```

Captures one currently registered destination in its original identity domain.

**Parameter `identity`:** The destination's live identity, not a detached persistent identifier.

**Throws `System.ArgumentException`:** The identity is not registered.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTarget.cs#L24).

## `Equals`

<a id="api-20e0973f2f0cf4b6"></a>
<!-- api: M:InnoEngine.Animation.AnimationTarget.Equals(InnoEngine.Animation.AnimationTarget) 2ea32931ed09cf8240d0d3da9c763088d00571844133347858a04dba81d516c3 -->

```csharp
public bool InnoEngine.Animation.AnimationTarget.Equals(InnoEngine.Animation.AnimationTarget other)
```

Compares runtime destinations, including their identity domain.

**Parameter `other`:** The destination to compare.

**Returns:** True when both values denote the same runtime destination or sampling policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTarget.cs#L79).

## `Equals`

<a id="api-52c612351217df1f"></a>
<!-- api: M:InnoEngine.Animation.AnimationTarget.Equals(System.Object) 49fa639edeb7a5a939cae9c2e81c69443492ecadb06ec19b6c8d8808962857dc -->

```csharp
public override bool InnoEngine.Animation.AnimationTarget.Equals(object? obj)
```

Compares a boxed destination with this value.

**Parameter `obj`:** The value to compare.

**Returns:** True for an equal animation destination.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTarget.cs#L91).

## `GetHashCode`

<a id="api-bd8b2bc28f86b2cd"></a>
<!-- api: M:InnoEngine.Animation.AnimationTarget.GetHashCode 5a379fad2b7778786d970e7992f11947441020abf4c955024467a8a5f0cc54ec -->

```csharp
public override int InnoEngine.Animation.AnimationTarget.GetHashCode()
```

Hashes the domain-qualified runtime destination.

**Returns:** A hash consistent with destination equality.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTarget.cs#L99).

## ```Resolve``1```

<a id="api-34fcfb2d52e17ad8"></a>
<!-- api: M:InnoEngine.Animation.AnimationTarget.Resolve``1 3d496fb0d14cce32ca14318390880670027fb0b35a0f8a04d32d0e6c400000d2 -->

```csharp
public TObject? InnoEngine.Animation.AnimationTarget.Resolve<TObject>() where TObject : InnoEngine.Core.IdentityObject
```

Resolves the original runtime slot without binding to a replacement generation.

**Type parameter `TObject`:** The expected destination contract.

**Returns:** The live destination, or null for a missing, retired, or incompatible target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTarget.cs#L68).

## `isSamplingOnly`

<a id="api-f55c54e406c6ce27"></a>
<!-- api: P:InnoEngine.Animation.AnimationTarget.isSamplingOnly 973f31ea1bf869916323bd6ca1444f9021ffba8c08ec97e54535e923160f63b0 -->

```csharp
public bool InnoEngine.Animation.AnimationTarget.isSamplingOnly { get; }
```

Gets whether this target deliberately omits object binding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTarget.cs#L47).

## `isValid`

<a id="api-4152cfa4622faa2d"></a>
<!-- api: P:InnoEngine.Animation.AnimationTarget.isValid 86d38c5d57866192657b2125cedf9eb74dad4d6763267e7770cbf93530c416ad -->

```csharp
public bool InnoEngine.Animation.AnimationTarget.isValid { get; }
```

Gets whether this value was initialized with a destination or sampling policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTarget.cs#L52).

## `persistentId`

<a id="api-a1653e413a5bed7d"></a>
<!-- api: P:InnoEngine.Animation.AnimationTarget.persistentId 3b08617c6eb187cce8b1c489b15f038c4d4f661457f17c750a14c024496001d2 -->

```csharp
public System.Guid InnoEngine.Animation.AnimationTarget.persistentId { get; }
```

Gets the persistent destination identifier, or empty for sampling-only playback.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTarget.cs#L57).

## `samplingOnly`

<a id="api-6fe5e6ebab95d478"></a>
<!-- api: P:InnoEngine.Animation.AnimationTarget.samplingOnly 12fea8887f65a539f5602a35ee87ee82897437d7aa8b43efa32727eea00f4ab5 -->

```csharp
public static InnoEngine.Animation.AnimationTarget InnoEngine.Animation.AnimationTarget.samplingOnly { get; }
```

Gets an explicit destination for sampling and markers without object binding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTarget.cs#L42).
