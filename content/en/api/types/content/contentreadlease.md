---
title: "ContentReadLease"
description: "Reference for ContentReadLease in Inno.Content."
uid: api.inno.content.378dd2aaf3742146
kind: api
owners:
  - Inno.Content
apiSurface: source-clr
contracts:
  - project.inno-content
---
# `ContentReadLease`

This reference describes `ContentReadLease` in `Inno.Content`. Read the [shared contract](../../projects/inno-content.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-eece6119e79cf0ea) | Method |
| [`Dispose`](#api-7895de49b77328f0) | Method |
| [`OpenRead`](#api-592bc595f7b2513a) | Method |
| [`entry`](#api-c15d15f149c5791a) | Property |

## Type declaration

<a id="api-378dd2aaf3742146"></a>
<!-- api: T:Inno.Content.ContentReadLease fe9e090b8afea57e765714afc643ee077f7aa5664afe6770a9ae4e521a4e960c -->

```csharp
public sealed class Inno.Content.ContentReadLease : System.IDisposable
```

Pins immutable entry bytes while independent streams obtain their own retirement protection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentReadLease.cs#L9).

## `#ctor`

<a id="api-eece6119e79cf0ea"></a>
<!-- api: M:Inno.Content.ContentReadLease.#ctor(Inno.Content.ContentEntry,System.Func{System.IO.Stream},System.Action) 8453d222b0c9c1b10608646f6533ec0ea9076aea9bdd02fd6d216fbd9ff84e2b -->

```csharp
public Inno.Content.ContentReadLease.ContentReadLease(Inno.Content.ContentEntry entry, System.Func<System.IO.Stream> openRead, System.Action release)
```

Transfers a provider pin and independent-stream factory into a caller-owned lease.

**Parameter `entry`:** Immutable metadata identifying the pinned bytes.

**Parameter `openRead`:** Opens a stream with its own provider pin; stream disposal must release that pin.

**Parameter `release`:** Releases this lease's provider pin exactly once, independently of any open stream.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentReadLease.cs#L27).

## `Dispose`

<a id="api-7895de49b77328f0"></a>
<!-- api: M:Inno.Content.ContentReadLease.Dispose edb1a97eb6efbaebdebba350c9e9d8056543df53581d19db9cbf4cfaec7a42fa -->

```csharp
public void Inno.Content.ContentReadLease.Dispose()
```

Releases this lease's pin once; existing streams retain their independent pins.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentReadLease.cs#L73).

## `OpenRead`

<a id="api-592bc595f7b2513a"></a>
<!-- api: M:Inno.Content.ContentReadLease.OpenRead 6a73493b485a55ddbb32ffb3a10f7b716fbfc936f05643950a9a64f6a9f64eab -->

```csharp
public System.IO.Stream Inno.Content.ContentReadLease.OpenRead()
```

Opens a new independently pinned stream without transferring this lease's ownership.

**Returns:** A caller-owned stream; disposing this lease or its store does not invalidate the stream.

**Throws `System.ObjectDisposedException`:** This lease has already released its pin.

**Throws `System.InvalidOperationException`:** The provider did not return a readable stream.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentReadLease.cs#L54).

## `entry`

<a id="api-c15d15f149c5791a"></a>
<!-- api: P:Inno.Content.ContentReadLease.entry ca6a07cda65fe92b381a60ad26018f2b4af68edf49e476f51730464fe7d9f750 -->

```csharp
public Inno.Content.ContentEntry Inno.Content.ContentReadLease.entry { get; }
```

Gets the immutable metadata, which does not retain a source or extension generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentReadLease.cs#L40).
