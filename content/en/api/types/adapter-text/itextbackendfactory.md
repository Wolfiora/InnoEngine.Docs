---
title: "ITextBackendFactory"
description: "Reference for ITextBackendFactory in Inno.Adapter.Text."
uid: api.inno.adapter.text.c7b234b16fdc54e7
kind: api
owners:
  - Inno.Adapter.Text
apiSurface: source-clr
contracts:
  - project.inno-adapter-text#provider-and-ownership-contract
---
# `ITextBackendFactory`

This reference describes `ITextBackendFactory` in `Inno.Adapter.Text`. Read the [shared contract](../../projects/inno-adapter-text.md#provider-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`CreateBackend`](#api-8cd78b94d402fb4f) | Method |
| [`supportedBackends`](#api-8739f77f77b4b957) | Property |

## Type declaration

<a id="api-c7b234b16fdc54e7"></a>
<!-- api: T:Inno.Adapter.Text.ITextBackendFactory d42ee39d70ced51afa026bcfaa3fa6a558c0dfe66f20ff09b68135dbb3536f28 -->

```csharp
public interface Inno.Adapter.Text.ITextBackendFactory
```

Creates isolated text backends without exposing implementation assemblies to composition code.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/adapters/text/Inno.Adapter.Text/ITextBackendFactory.cs#L9).

## `CreateBackend`

<a id="api-8cd78b94d402fb4f"></a>
<!-- api: M:Inno.Adapter.Text.ITextBackendFactory.CreateBackend(Inno.Adapter.Text.TextBackendId) 631e689271a22b1047cb23c270be8b06afc263a420a7388ba59030bf751bfa78 -->

```csharp
Inno.Text.ITextBackend Inno.Adapter.Text.ITextBackendFactory.CreateBackend(Inno.Adapter.Text.TextBackendId backend)
```

Creates one caller-owned text backend.

**Parameter `backend`:** The selected backend implementation.

**Returns:** A newly allocated text backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/adapters/text/Inno.Adapter.Text/ITextBackendFactory.cs#L25).

## `supportedBackends`

<a id="api-8739f77f77b4b957"></a>
<!-- api: P:Inno.Adapter.Text.ITextBackendFactory.supportedBackends 6bec23079fe48b18ee40ea9b5af2eff7e1f389ac3bcb07b14f3a57c64b320cf9 -->

```csharp
System.Collections.Generic.IReadOnlyList<Inno.Adapter.Text.TextBackendId> Inno.Adapter.Text.ITextBackendFactory.supportedBackends { get; }
```

Gets the exact registrations available in this composition snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/adapters/text/Inno.Adapter.Text/ITextBackendFactory.cs#L14).
