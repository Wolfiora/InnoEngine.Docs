---
title: "TextBackendProvider"
description: "Reference for TextBackendProvider in Inno.Adapter.Text."
uid: api.inno.adapter.text.12af744bfa08f922
kind: api
owners:
  - Inno.Adapter.Text
apiSurface: source-clr
contracts:
  - project.inno-adapter-text#provider-and-ownership-contract
---
# `TextBackendProvider`

This reference describes `TextBackendProvider` in `Inno.Adapter.Text`. Read the [shared contract](../../projects/inno-adapter-text.md#provider-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-44ba61f6876a0689) | Method |
| [`CreateBackend`](#api-fc85ade3d61e04c1) | Method |
| [`id`](#api-3c0f825e380dbe03) | Property |

## Type declaration

<a id="api-12af744bfa08f922"></a>
<!-- api: T:Inno.Adapter.Text.TextBackendProvider 207d11feb79253075f0b53829e9ad35f7b9ad8cae4c2094c67c18d6c0dbfe273 -->

```csharp
public abstract class Inno.Adapter.Text.TextBackendProvider
```

Describes one explicitly composed text implementation and its creation boundary.

**Constraints:** The composition owns this provider and its immutable registration identity.
Products are owned by their callers. This registration does not perform type discovery.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/adapters/text/Inno.Adapter.Text/TextBackendProvider.cs#L13).

## `#ctor`

<a id="api-44ba61f6876a0689"></a>
<!-- api: M:Inno.Adapter.Text.TextBackendProvider.#ctor(Inno.Adapter.Text.TextBackendId) 2a7c4795c11833525d5af6d121159d0e919e56ec27a509ba41de6ac9bbe635fc -->

```csharp
protected Inno.Adapter.Text.TextBackendProvider.TextBackendProvider(Inno.Adapter.Text.TextBackendId id)
```

Captures the identity assigned by the composition owner.

**Parameter `id`:** The assigned implementation identity.

**Throws `System.ArgumentException`:** The identity is unassigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/adapters/text/Inno.Adapter.Text/TextBackendProvider.cs#L24).

## `CreateBackend`

<a id="api-fc85ade3d61e04c1"></a>
<!-- api: M:Inno.Adapter.Text.TextBackendProvider.CreateBackend 45903d23b7ae31e6ca761f112ea2de2916c83658d590d0c784cf174550d60205 -->

```csharp
public abstract Inno.Text.ITextBackend Inno.Adapter.Text.TextBackendProvider.CreateBackend()
```

Creates a caller-owned text service using this implementation.

**Returns:** A new service owned by the caller; providers must not return null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/adapters/text/Inno.Adapter.Text/TextBackendProvider.cs#L42).

## `id`

<a id="api-3c0f825e380dbe03"></a>
<!-- api: P:Inno.Adapter.Text.TextBackendProvider.id 4c2a2e2e3d19f4b5cbc23a3217b50ef85e5fbd5391d5b629ca2db595a61989e8 -->

```csharp
public Inno.Adapter.Text.TextBackendId Inno.Adapter.Text.TextBackendProvider.id { get; }
```

Gets this registration's immutable implementation identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/adapters/text/Inno.Adapter.Text/TextBackendProvider.cs#L34).
