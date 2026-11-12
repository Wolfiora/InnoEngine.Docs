---
title: "ContentReadScope"
description: "Reference for ContentReadScope in Inno.References."
uid: api.inno.references.runtime-script.f46372927f2108f7
kind: api
owners:
  - Inno.References
apiSurface: runtime-script
contracts:
  - project.inno-references
  - manual.scripting.use-script-api
---
# `ContentReadScope`

This reference describes `ContentReadScope` in `Inno.References`. Read the [shared contract](../../projects/inno-references.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8ae1f62660e8ecd0) | Method |
| [`Dispose`](#api-58384d9fe45e5461) | Method |
| [```GetValues``1```](#api-cd19465ce3b10298) | Method |
| [```TryGetValue``1```](#api-2113f33c863f92f9) | Method |
| [`activeContent`](#api-36ef5bca22c07323) | Property |
| [`contents`](#api-8bb7844b1963dd20) | Property |
| [`empty`](#api-81c493e43750d486) | Property |

## Type declaration

<a id="api-f46372927f2108f7"></a>
<!-- api: T:InnoEngine.References.ContentReadScope e09de35683593ea69c62872a7911fc5151521af61fb62077dc142650c606d16a -->

```csharp
public sealed class InnoEngine.References.ContentReadScope : System.IDisposable
```

Exposes ordered content roots through weak, generation-checked identity snapshots for one control-thread operation.

**Constraints:** Disposing the scope revokes lookup. Copy values into domain snapshots; never retain resolved objects across frames or reloads.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/references/Inno.References/ContentReadScope.cs#L14).

## `#ctor`

<a id="api-8ae1f62660e8ecd0"></a>
<!-- api: M:InnoEngine.References.ContentReadScope.#ctor(System.Collections.Generic.IEnumerable{InnoEngine.Core.Identity},System.Nullable{System.Guid}) 5dc71ab05beaa8989462294878a3d7a836f226351315cf013a23f46852d769bc -->

```csharp
public InnoEngine.References.ContentReadScope.ContentReadScope(System.Collections.Generic.IEnumerable<InnoEngine.Core.Identity> contents, System.Guid? activeContent = null)
```

Captures immutable root identities without retaining their live objects or registry.

**Parameter `contents`:** Registered identities in deterministic root order.

**Parameter `activeContent`:** The optional persistent identity of the primary root.

**Throws `System.ArgumentException`:** A root is detached, duplicated, or the active root is not present.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/references/Inno.References/ContentReadScope.cs#L32).

## `Dispose`

<a id="api-58384d9fe45e5461"></a>
<!-- api: M:InnoEngine.References.ContentReadScope.Dispose 44b68d9768cee97fd772d075aa430eaedc683351d50027e474911cbbc1549fb2 -->

```csharp
public void InnoEngine.References.ContentReadScope.Dispose()
```

Revokes all future root resolution without affecting the owner objects.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/references/Inno.References/ContentReadScope.cs#L126).

## ```GetValues``1```

<a id="api-cd19465ce3b10298"></a>
<!-- api: M:InnoEngine.References.ContentReadScope.GetValues``1 bd56ba2989eafa5c5e0f405346a867dc1623a94999659a867f589d6723a30714 -->

```csharp
public System.Collections.Generic.IReadOnlyList<TValue> InnoEngine.References.ContentReadScope.GetValues<TValue>() where TValue : InnoEngine.Core.IdentityObject
```

Resolves all live roots matching the requested content contract.

**Type parameter `TValue`:** The identity-backed content type understood by the consumer.

**Returns:** A read-only operation snapshot; stale or incompatible roots are omitted.

**Throws `System.ObjectDisposedException`:** The operation scope has ended.

**Throws `System.InvalidOperationException`:** Lookup occurs off the owning control thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/references/Inno.References/ContentReadScope.cs#L78).

## ```TryGetValue``1```

<a id="api-2113f33c863f92f9"></a>
<!-- api: M:InnoEngine.References.ContentReadScope.TryGetValue``1(System.Guid,``0@) 428922f1a0580eec89e46d292c0a0b0a6d3ed3eee6bbd2ac7cb11cd6d707543b -->

```csharp
public bool InnoEngine.References.ContentReadScope.TryGetValue<TValue>(System.Guid id, out TValue? value) where TValue : InnoEngine.Core.IdentityObject
```

Resolves a selected root without rebinding a stale snapshot to a replacement generation.

**Type parameter `TValue`:** The required identity-backed root type.

**Parameter `id`:** The persistent identity selecting a root already captured by this scope.

**Parameter `value`:** The live compatible object, or null when unavailable.

**Returns:** True only when the captured runtime identity is still live and compatible.

**Throws `System.ObjectDisposedException`:** The operation scope has ended.

**Throws `System.InvalidOperationException`:** Lookup occurs off the owning control thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/references/Inno.References/ContentReadScope.cs#L106).

## `activeContent`

<a id="api-36ef5bca22c07323"></a>
<!-- api: P:InnoEngine.References.ContentReadScope.activeContent eeb6ab8ecf542c58e6762b91d00993287356ad385cf67ae0f3fa9859f7a408b5 -->

```csharp
public System.Guid? InnoEngine.References.ContentReadScope.activeContent { get; }
```

Gets the optional persistent identity selected as primary content.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/references/Inno.References/ContentReadScope.cs#L61).

## `contents`

<a id="api-8bb7844b1963dd20"></a>
<!-- api: P:InnoEngine.References.ContentReadScope.contents 312f09c7df6ab802229e9ab51ca28b4242bfba6d086faa25ccf64875d50abb80 -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Core.Identity> InnoEngine.References.ContentReadScope.contents { get; }
```

Gets the ordered weak identity snapshots; no live root object is retained.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/references/Inno.References/ContentReadScope.cs#L56).

## `empty`

<a id="api-81c493e43750d486"></a>
<!-- api: P:InnoEngine.References.ContentReadScope.empty 1bf8e937d0b4768f443e6cbd98859bbd28be49c40dab367440f1cc57a752a2b0 -->

```csharp
public static InnoEngine.References.ContentReadScope InnoEngine.References.ContentReadScope.empty { get; }
```

Gets a new empty operation scope owned by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/references/Inno.References/ContentReadScope.cs#L51).
