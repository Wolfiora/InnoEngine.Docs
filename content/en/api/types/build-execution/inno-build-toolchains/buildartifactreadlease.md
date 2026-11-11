---
title: "BuildArtifactReadLease"
description: "Reference for BuildArtifactReadLease in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.fb6ecbab14ea9de5
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `BuildArtifactReadLease`

This reference describes `BuildArtifactReadLease` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`AcquireAsync`](#api-c92d5f3fe2f7d4bd) | Method |
| [`Dispose`](#api-02e14ee76147a3e7) | Method |

## Type declaration

<a id="api-fb6ecbab14ea9de5"></a>
<!-- api: T:Inno.Build.Toolchains.BuildArtifactReadLease e2d99ab63a39214d1082214fb3e99b582f1e9a92612bb68bbd5582bd0cf4a812 -->

```csharp
public sealed class Inno.Build.Toolchains.BuildArtifactReadLease : System.IDisposable
```

Pins a verified immutable build artifact against cooperating repair and retirement operations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildArtifactReadLease.cs#L13).

## `AcquireAsync`

<a id="api-c92d5f3fe2f7d4bd"></a>
<!-- api: M:Inno.Build.Toolchains.BuildArtifactReadLease.AcquireAsync(System.String,System.String,System.String,System.Collections.Generic.IReadOnlyList{System.String},System.Threading.CancellationToken,Inno.Build.Toolchains.NativeBuildContext) 01fbf37652aa4230695c90182cf14883d329f61738651fe33cb7c97bd42ebdc9 -->

```csharp
public static System.Threading.Tasks.ValueTask<Inno.Build.Toolchains.BuildArtifactReadLease> Inno.Build.Toolchains.BuildArtifactReadLease.AcquireAsync(string directory, string ownerDirectory, string fingerprint, System.Collections.Generic.IReadOnlyList<string> outputDirectories, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken), Inno.Build.Toolchains.NativeBuildContext? statistics = null)
```

Acquires reading ownership and verifies the complete artifact before exposing it to a consumer.

**Parameter `ownerDirectory`:** The exact publisher root retaining the persistent owner.lock gate.

**Parameter `directory`:** The absolute artifact directory owned by its publisher; its persistent lease is stored alongside it.

**Parameter `fingerprint`:** The exact input identity required by the consumer.

**Parameter `outputDirectories`:** The complete relative output roots declared by the publisher.

**Parameter `cancellationToken`:** Cancels ownership acquisition without releasing another reader's protection.

**Parameter `statistics`:** Optional borrowed operation receiving output-integrity read statistics; its input cache is not used.

**Returns:** Reading ownership which the caller must retain until all artifact access completes.

**Throws `System.ArgumentException`:** The directory is not absolute or a required identity is blank.

**Throws `System.IO.InvalidDataException`:** The complete artifact does not match the requested identity and output inventory.

**Throws `System.TimeoutException`:** Repair or retirement retains exclusive ownership for more than thirty seconds.

**Throws `System.OperationCanceledException`:** Waiting was canceled before ownership could be returned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildArtifactReadLease.cs#L55).

## `Dispose`

<a id="api-02e14ee76147a3e7"></a>
<!-- api: M:Inno.Build.Toolchains.BuildArtifactReadLease.Dispose 3b88f93545438947261fd21e571c40e0cc8b2f1ecb55e24444dd9ee7552c0188 -->

```csharp
public void Inno.Build.Toolchains.BuildArtifactReadLease.Dispose()
```

Ends artifact access and allows repair or retirement; repeated disposal has no effect.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildArtifactReadLease.cs#L68).
