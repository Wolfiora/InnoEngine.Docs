---
title: "BuildArtifactWriteLease"
description: "Reference for BuildArtifactWriteLease in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.84d2b867d0a2533c
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `BuildArtifactWriteLease`

This reference describes `BuildArtifactWriteLease` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`AcquireAsync`](#api-293b8586aeca3d1b) | Method |
| [`Dispose`](#api-1a1f663e41eec70b) | Method |

## Type declaration

<a id="api-84d2b867d0a2533c"></a>
<!-- api: T:Inno.Build.Toolchains.BuildArtifactWriteLease 38382740f8f79544c2da61d57698029a993ea59cb7d58464fc3a82ca202b7b43 -->

```csharp
public sealed class Inno.Build.Toolchains.BuildArtifactWriteLease : System.IDisposable
```

Coordinates artifact replacement or retirement with every cooperating reader and writer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildArtifactWriteLease.cs#L12).

## `AcquireAsync`

<a id="api-293b8586aeca3d1b"></a>
<!-- api: M:Inno.Build.Toolchains.BuildArtifactWriteLease.AcquireAsync(System.String,System.String,System.Threading.CancellationToken) 50ffe8be4b7c3090e4c3981aef963353c0b79cf70ad8d6799867429325edf99d -->

```csharp
public static System.Threading.Tasks.ValueTask<Inno.Build.Toolchains.BuildArtifactWriteLease> Inno.Build.Toolchains.BuildArtifactWriteLease.AcquireAsync(string directory, string ownerDirectory, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Waits for all readers before allowing mutation of one immutable artifact directory.

**Parameter `ownerDirectory`:** The exact publisher root retaining the persistent owner.lock gate.

**Parameter `directory`:** The absolute artifact location controlled by the publisher.

**Parameter `cancellationToken`:** Cancels this waiter without disturbing existing readers.

**Returns:** Exclusive protection; retain it through replacement and release it before acquiring a reading lease.

**Throws `System.ArgumentException`:** The directory is empty or relative.

**Throws `System.TimeoutException`:** Other owners retain the artifact for more than thirty seconds.

**Throws `System.OperationCanceledException`:** Waiting was canceled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildArtifactWriteLease.cs#L42).

## `Dispose`

<a id="api-1a1f663e41eec70b"></a>
<!-- api: M:Inno.Build.Toolchains.BuildArtifactWriteLease.Dispose df4b45864a188a4f217904a24b5e591fc11814373ed63a899b44040bab5636d2 -->

```csharp
public void Inno.Build.Toolchains.BuildArtifactWriteLease.Dispose()
```

Ends exclusive access without removing the persistent coordination file.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildArtifactWriteLease.cs#L58).
