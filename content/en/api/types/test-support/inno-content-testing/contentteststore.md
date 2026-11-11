---
title: "ContentTestStore"
description: "Reference for ContentTestStore in Inno.Content.Testing."
uid: api.inno.content.testing.c1129b47a361f817
kind: api
owners:
  - Inno.Content.Testing
apiSurface: source-clr
contracts:
  - project.inno-content-testing
---
# `ContentTestStore`

This reference describes `ContentTestStore` in `Inno.Content.Testing`. Read the [shared contract](../../../../contributing/testing/support/inno-content-testing.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Content.IRuntimeContentStore`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ae9dc02967ee7169) | Method |
| [`Acquire`](#api-9f0806efab94dd4e) | Method |
| [`CorruptPayload`](#api-590d437b34b84609) | Method |
| [`Dispose`](#api-24aa865c849d1910) | Method |
| [`FromDirectory`](#api-2170424d64b844e3) | Method |
| [`descriptor`](#api-4545f10dd86590bd) | Property |
| [`index`](#api-9e82b74548c4f809) | Property |

## Type declaration

<a id="api-c1129b47a361f817"></a>
<!-- api: T:Inno.Content.Testing.ContentTestStore 7fac2dbd02b7a0da0a955fa296d0218ac8a2abbdbd7ad208da59ce8c0f7e116f -->

```csharp
public sealed class Inno.Content.Testing.ContentTestStore : Inno.Content.IRuntimeContentStore
```

Supplies controlled immutable content through the real public provider boundary for contract tests.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/content/fixtures/Inno.Content.Testing/ContentTestStore.cs#L13).

## `#ctor`

<a id="api-ae9dc02967ee7169"></a>
<!-- api: M:Inno.Content.Testing.ContentTestStore.#ctor(System.Collections.Generic.IEnumerable{System.Collections.Generic.KeyValuePair{Inno.Content.ContentKey,System.Byte[]}}) 750f42cb7bfcfc6fa9779605a4262afd83d2fe21dffe79ebebeac0803db23d76 -->

```csharp
public Inno.Content.Testing.ContentTestStore.ContentTestStore(System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<Inno.Content.ContentKey, byte[]>> payloads)
```

Copies payloads and freezes their metadata before any fault is injected.

**Parameter `payloads`:** The logical content inventory to capture independently of the test's source buffers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/content/fixtures/Inno.Content.Testing/ContentTestStore.cs#L24).

## `Acquire`

<a id="api-9f0806efab94dd4e"></a>
<!-- api: M:Inno.Content.Testing.ContentTestStore.Acquire(Inno.Content.ContentKey) 12bd4bc76af23bc20fc839bbfc17e7a3fee6fafc8cd936b8bf0651f2c7962daf -->

```csharp
public Inno.Content.ContentReadLease Inno.Content.Testing.ContentTestStore.Acquire(Inno.Content.ContentKey key)
```

Pins an entry against source retirement and supplies independent read streams.

**Parameter `key`:** The exact assigned logical key.

**Returns:** A caller-owned lease whose streams remain usable after this store closes.

**Throws `System.IO.FileNotFoundException`:** The exact content key is not present.

**Throws `System.ObjectDisposedException`:** The store has closed and cannot issue new leases.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/content/fixtures/Inno.Content.Testing/ContentTestStore.cs#L75).

## `CorruptPayload`

<a id="api-590d437b34b84609"></a>
<!-- api: M:Inno.Content.Testing.ContentTestStore.CorruptPayload(Inno.Content.ContentKey,System.ReadOnlySpan{System.Byte}) 4d0e67cc2a17c4cb8a012e205eea3469ee237d5ffbc8e63e70f101431cbfdb3d -->

```csharp
public void Inno.Content.Testing.ContentTestStore.CorruptPayload(Inno.Content.ContentKey key, System.ReadOnlySpan<byte> bytes)
```

Injects a provider corruption while preserving its previously declared inventory.

**Parameter `key`:** An existing content identity.

**Parameter `bytes`:** The replacement body; independent readers opened earlier remain pinned to their original bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/content/fixtures/Inno.Content.Testing/ContentTestStore.cs#L64).

## `Dispose`

<a id="api-24aa865c849d1910"></a>
<!-- api: M:Inno.Content.Testing.ContentTestStore.Dispose dd77bb3873d0d4546a2ed50432c0d8c77537e7f036aa0e70dfd27c1662d59d3e -->

```csharp
public void Inno.Content.Testing.ContentTestStore.Dispose()
```

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/content/fixtures/Inno.Content.Testing/ContentTestStore.cs#L85).

## `FromDirectory`

<a id="api-2170424d64b844e3"></a>
<!-- api: M:Inno.Content.Testing.ContentTestStore.FromDirectory(System.String) 5d5e0a0ba323ff3a978cd88d348a51a7651f201f984a16693e8756db9b66078b -->

```csharp
public static Inno.Content.Testing.ContentTestStore Inno.Content.Testing.ContentTestStore.FromDirectory(string directory)
```

Captures a test's exported directory as independently owned memory content.

**Parameter `directory`:** The fixture output directory; the returned store does not retain its location.

**Returns:** A caller-owned memory provider usable after the directory has been removed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/content/fixtures/Inno.Content.Testing/ContentTestStore.cs#L50).

## `descriptor`

<a id="api-4545f10dd86590bd"></a>
<!-- api: P:Inno.Content.Testing.ContentTestStore.descriptor 397256064169f0d551851facda4c3afbe904976bdd229fd3460b89e7906dfea8 -->

```csharp
public Inno.Content.ContentPackDescriptor Inno.Content.Testing.ContentTestStore.descriptor { get; }
```

Gets the immutable complete-pack identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/content/fixtures/Inno.Content.Testing/ContentTestStore.cs#L36).

## `index`

<a id="api-9e82b74548c4f809"></a>
<!-- api: P:Inno.Content.Testing.ContentTestStore.index 3dde2eed367d49cff36c70d37d43d8f6b698ceded2791f92610b9deec8539fd6 -->

```csharp
public Inno.Content.ContentPackIndex Inno.Content.Testing.ContentTestStore.index { get; }
```

Gets the immutable complete payload inventory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/content/fixtures/Inno.Content.Testing/ContentTestStore.cs#L39).
