---
title: "ContentReadScope"
description: "Reference for ContentReadScope in Inno.References."
uid: api.inno.references.327be83e57ee1253
kind: api
owners:
  - Inno.References
apiSurface: source-clr
contracts:
  - project.inno-references
---
# `ContentReadScope`

This reference describes `ContentReadScope` in `Inno.References`. Read the [shared contract](../../projects/inno-references.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7c376803f7945d0d) | Method |
| [`Dispose`](#api-0c06c316950fb408) | Method |
| [```GetValues``1```](#api-7572085436d8520d) | Method |
| [```TryGetValue``1```](#api-55364057e9e17079) | Method |
| [`activeContent`](#api-e54722a004804472) | Property |
| [`contents`](#api-730b7982d5f1d557) | Property |
| [`empty`](#api-96b1986731361095) | Property |

## Type declaration

<a id="api-327be83e57ee1253"></a>
<!-- api: T:Inno.References.ContentReadScope c7e6c73fe43a9eb127b19640f7bead4563495f5afb89a9d93dd9b8e9fc6ea788 -->

```csharp
public sealed class Inno.References.ContentReadScope : System.IDisposable
```

Exposes ordered content roots through weak, generation-checked identity snapshots for one control-thread operation.

**Constraints:** Disposing the scope revokes lookup. Copy values into domain snapshots; never retain resolved objects across frames or reloads.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ContentReadScope.cs#L14).

## `#ctor`

<a id="api-7c376803f7945d0d"></a>
<!-- api: M:Inno.References.ContentReadScope.#ctor(System.Collections.Generic.IEnumerable{Inno.Core.Identity.Identity},System.Nullable{System.Guid}) 92d4e6e5eaab0e09c800687810d6657414f246b80f852487adb0e54bb7d2360c -->

```csharp
public Inno.References.ContentReadScope.ContentReadScope(System.Collections.Generic.IEnumerable<Inno.Core.Identity.Identity> contents, System.Guid? activeContent = null)
```

Captures immutable root identities without retaining their live objects or registry.

**Parameter `contents`:** Registered identities in deterministic root order.

**Parameter `activeContent`:** The optional persistent identity of the primary root.

**Throws `System.ArgumentException`:** A root is detached, duplicated, or the active root is not present.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ContentReadScope.cs#L32).

## `Dispose`

<a id="api-0c06c316950fb408"></a>
<!-- api: M:Inno.References.ContentReadScope.Dispose 8ec00f70d5abd375a8de5590309761b33b4d71dbca408608b2e87247074fbeff -->

```csharp
public void Inno.References.ContentReadScope.Dispose()
```

Revokes all future root resolution without affecting the owner objects.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ContentReadScope.cs#L126).

## ```GetValues``1```

<a id="api-7572085436d8520d"></a>
<!-- api: M:Inno.References.ContentReadScope.GetValues``1 ec4c067024fd9660e4a7de175f12d15960beaf5257bfc825fa451d88234cf42f -->

```csharp
public System.Collections.Generic.IReadOnlyList<TValue> Inno.References.ContentReadScope.GetValues<TValue>() where TValue : Inno.Core.Identity.IdentityObject
```

Resolves all live roots matching the requested content contract.

**Type parameter `TValue`:** The identity-backed content type understood by the consumer.

**Returns:** A read-only operation snapshot; stale or incompatible roots are omitted.

**Throws `System.ObjectDisposedException`:** The operation scope has ended.

**Throws `System.InvalidOperationException`:** Lookup occurs off the owning control thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ContentReadScope.cs#L78).

## ```TryGetValue``1```

<a id="api-55364057e9e17079"></a>
<!-- api: M:Inno.References.ContentReadScope.TryGetValue``1(System.Guid,``0@) 6695c0f65644d80503563e630004e8da2d2590e2346b3beabd99438d222ba7b6 -->

```csharp
public bool Inno.References.ContentReadScope.TryGetValue<TValue>(System.Guid id, out TValue? value) where TValue : Inno.Core.Identity.IdentityObject
```

Resolves a selected root without rebinding a stale snapshot to a replacement generation.

**Type parameter `TValue`:** The required identity-backed root type.

**Parameter `id`:** The persistent identity selecting a root already captured by this scope.

**Parameter `value`:** The live compatible object, or null when unavailable.

**Returns:** True only when the captured runtime identity is still live and compatible.

**Throws `System.ObjectDisposedException`:** The operation scope has ended.

**Throws `System.InvalidOperationException`:** Lookup occurs off the owning control thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ContentReadScope.cs#L106).

## `activeContent`

<a id="api-e54722a004804472"></a>
<!-- api: P:Inno.References.ContentReadScope.activeContent ae8de64479df1f81237aa7982c2db1bd6d76d6e8de8e8689d0ae34a0a4b3403b -->

```csharp
public System.Guid? Inno.References.ContentReadScope.activeContent { get; }
```

Gets the optional persistent identity selected as primary content.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ContentReadScope.cs#L61).

## `contents`

<a id="api-730b7982d5f1d557"></a>
<!-- api: P:Inno.References.ContentReadScope.contents 469143d9ad1d1a8edd5bcc0c0cb9d07d2aa142fe78d4fec49de54ef844698222 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Core.Identity.Identity> Inno.References.ContentReadScope.contents { get; }
```

Gets the ordered weak identity snapshots; no live root object is retained.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ContentReadScope.cs#L56).

## `empty`

<a id="api-96b1986731361095"></a>
<!-- api: P:Inno.References.ContentReadScope.empty 9c4deae0c882bd82d8ff243e48d0e4d4847ce2586f2793af98d2a161baf4b4de -->

```csharp
public static Inno.References.ContentReadScope Inno.References.ContentReadScope.empty { get; }
```

Gets a new empty operation scope owned by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ContentReadScope.cs#L51).
