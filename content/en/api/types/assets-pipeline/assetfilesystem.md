---
title: "AssetFileSystem"
description: "Reference for AssetFileSystem in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.f82cc1664364b50f
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# `AssetFileSystem`

This reference describes `AssetFileSystem` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-63126db95363828a) | Method |
| [`#ctor`](#api-7197b549b3dfa4ca) | Method |
| [`Dispose`](#api-b1b041ab9d6f0e3c) | Method |
| [`Exists`](#api-55f3e1befc7014ce) | Method |
| [`GetChildren`](#api-91f85ffce564b286) | Method |
| [`GetEntries`](#api-cbfbf6c77f3d6ab0) | Method |
| [`PollChanges`](#api-a690e15df52dadaa) | Method |
| [`PollChanges`](#api-1a57677ec65b5292) | Method |
| [`Refresh`](#api-c7706bb49b86e818) | Method |
| [`Start`](#api-75475954d609284b) | Method |
| [`Stop`](#api-391678402e914ab8) | Method |
| [`TryGetEntry`](#api-b5baabb6ac90fc3c) | Method |
| [`WaitForIdle`](#api-cb072ff7f11062b2) | Method |
| [`WaitForIdle`](#api-1c8a41eaedf8dc0f) | Method |
| [`assetRoot`](#api-03f97ac3a818b4de) | Property |
| [`isWatching`](#api-516fb6957e552af1) | Property |

## Type declaration

<a id="api-f82cc1664364b50f"></a>
<!-- api: T:Inno.Assets.Pipeline.AssetFileSystem 3c8c2460b18ddebf67af1bd8d78e951265face078056905fab8707de9bfd4b33 -->

```csharp
public sealed class Inno.Assets.Pipeline.AssetFileSystem : System.IDisposable
```

Indexed asset source filesystem model backed by `Inno.Assets.Pipeline.AssetWatcher`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileSystem.cs#L18).

## `#ctor`

<a id="api-63126db95363828a"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetFileSystem.#ctor(System.Collections.Generic.IReadOnlyList{Inno.Assets.Pipeline.AssetSourceMount},System.Boolean,System.Int32,Inno.Assets.Pipeline.AssetSourcePolicy,System.Boolean) 4897cd4fc4792f94e43db9bb3aab32a11d53b40b9eb5cabcd1dd4728a3b59b36 -->

```csharp
public Inno.Assets.Pipeline.AssetFileSystem.AssetFileSystem(System.Collections.Generic.IReadOnlyList<Inno.Assets.Pipeline.AssetSourceMount> mounts, bool autoStart = true, int flushDelayMs = 80, Inno.Assets.Pipeline.AssetSourcePolicy? sourcePolicy = null, bool requireWritableProject = true)
```

Creates an indexed file system over isolated source mounts.

**Parameter `mounts`:** Complete source mount snapshot.

**Parameter `autoStart`:** Whether writable project source watching starts immediately.

**Parameter `flushDelayMs`:** Watcher batch delay in milliseconds.

**Parameter `sourcePolicy`:** Source filtering policy, or `null` for defaults.

**Parameter `requireWritableProject`:** Whether the project mount must support authoring mutations. Runtime catalogs may set this to
`false` when every mounted identity directory is read-only.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileSystem.cs#L103).

## `#ctor`

<a id="api-7197b549b3dfa4ca"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetFileSystem.#ctor(System.String,System.Boolean,System.Int32,Inno.Assets.Pipeline.AssetSourcePolicy) 5d7d08cbdab5ef3ffa1cabdabdeac0a07497edd77a7595ac03270e66d2ca79b3 -->

```csharp
public Inno.Assets.Pipeline.AssetFileSystem.AssetFileSystem(string assetRoot, bool autoStart = true, int flushDelayMs = 80, Inno.Assets.Pipeline.AssetSourcePolicy? sourcePolicy = null)
```

Creates an indexed source file system.

**Parameter `assetRoot`:** The absolute source root.

**Parameter `autoStart`:** Whether file watching should start immediately.

**Parameter `flushDelayMs`:** The watcher batch delay in milliseconds.

**Parameter `sourcePolicy`:** The source filtering policy, or `null` for defaults.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileSystem.cs#L66).

## `Dispose`

<a id="api-b1b041ab9d6f0e3c"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetFileSystem.Dispose 890db497b7d32e57b11c6abdebcd5ee87c6d209fc1a68f7d25e664d439f3598a -->

```csharp
public void Inno.Assets.Pipeline.AssetFileSystem.Dispose()
```

Releases the resources owned by this implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileSystem.cs#L423).

## `Exists`

<a id="api-55f3e1befc7014ce"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetFileSystem.Exists(Inno.Assets.AssetPath) 671dc6222d69225bbf1370db469771859f646fb178047f24d552b254efa4ab39 -->

```csharp
public bool Inno.Assets.Pipeline.AssetFileSystem.Exists(Inno.Assets.AssetPath path)
```

Determines whether an indexed source entry exists.

**Parameter `path`:** The isolated source path.

**Returns:** `true` when the entry exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileSystem.cs#L267).

## `GetChildren`

<a id="api-91f85ffce564b286"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetFileSystem.GetChildren(Inno.Assets.AssetPath) 7d0d7caf989d6b176e4ccf6e336ba00d3b4fd22a93204789e6faa6ac76b4b173 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Assets.Pipeline.AssetFileEntry> Inno.Assets.Pipeline.AssetFileSystem.GetChildren(Inno.Assets.AssetPath parent)
```

Gets immediate children of an indexed directory.

**Parameter `parent`:** The isolated parent directory path.

**Returns:** The immediate child entries.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileSystem.cs#L342).

## `GetEntries`

<a id="api-cbfbf6c77f3d6ab0"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetFileSystem.GetEntries(System.Boolean) 92196d708ff0b312e80e88388457e1f4a5dca0862ec5a01392da60c8dbbf6892 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Assets.Pipeline.AssetFileEntry> Inno.Assets.Pipeline.AssetFileSystem.GetEntries(bool includeDirectories = true)
```

Gets a stable snapshot of indexed entries.

**Parameter `includeDirectories`:** Whether directory entries should be included.

**Returns:** The indexed entries.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileSystem.cs#L318).

## `PollChanges`

<a id="api-a690e15df52dadaa"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetFileSystem.PollChanges 46f6155eddd40cc5a2b293b1d891b027ef4521898a8e2744f0b0ec0c7b9c2d75 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Assets.Pipeline.AssetChangedEvent> Inno.Assets.Pipeline.AssetFileSystem.PollChanges()
```

Polls normalized changes and refreshes the indexed source snapshot.

**Returns:** The changes observed since the previous poll.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileSystem.cs#L365).

## `PollChanges`

<a id="api-1a57677ec65b5292"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetFileSystem.PollChanges(System.Boolean@) eaafe8ac0c02dfd2ca3dcb6b7ed741a240e75e2bce535e94061504dacae52cec -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Assets.Pipeline.AssetChangedEvent> Inno.Assets.Pipeline.AssetFileSystem.PollChanges(out bool requiresFullRescan)
```

Polls changes and reports whether watcher recovery requires a full rescan.

**Parameter `requiresFullRescan`:** Whether the watcher reported an unreliable event stream.

**Returns:** The changes observed since the previous poll.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileSystem.cs#L376).

## `Refresh`

<a id="api-c7706bb49b86e818"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetFileSystem.Refresh 3f5aafd0d4ca3b440670a72f5630d5250f3d15f67dfa7581123dabc4d06aa436 -->

```csharp
public void Inno.Assets.Pipeline.AssetFileSystem.Refresh()
```

Reconciles a complete source snapshot while preserving unchanged entry identities.

**Throws `System.ObjectDisposedException`:** The source filesystem has been disposed.

**Throws `System.IO.IOException`:** Source enumeration fails; the previous complete index and its identities remain active.

**Throws `System.UnauthorizedAccessException`:** A source directory cannot be read; the previous complete index remains active.

**Throws `System.IO.InvalidDataException`:** Multiple source paths claim the same persistent entry identity.

**Throws `System.InvalidOperationException`:** A new entry identity cannot be registered; the previous index remains active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileSystem.cs#L210).

## `Start`

<a id="api-75475954d609284b"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetFileSystem.Start 47586058b31a77ad412392f111c66f83fa62de3e6cd87cc97568cba8fa930d1a -->

```csharp
public void Inno.Assets.Pipeline.AssetFileSystem.Start()
```

Starts source file watching.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileSystem.cs#L175).

## `Stop`

<a id="api-391678402e914ab8"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetFileSystem.Stop 6697306d6d4e679bf75da9659749f130807834170a93d3f356803d63e92c0aaa -->

```csharp
public void Inno.Assets.Pipeline.AssetFileSystem.Stop()
```

Stops source file watching.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileSystem.cs#L184).

## `TryGetEntry`

<a id="api-b5baabb6ac90fc3c"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetFileSystem.TryGetEntry(Inno.Assets.AssetPath,Inno.Assets.Pipeline.AssetFileEntry@) f60a9a16372223ca7fb60bfcbfb02ede86c25c78551922472f24078b23383b2c -->

```csharp
public bool Inno.Assets.Pipeline.AssetFileSystem.TryGetEntry(Inno.Assets.AssetPath path, out Inno.Assets.Pipeline.AssetFileEntry entry)
```

Tries to resolve an indexed source entry.

**Parameter `path`:** The isolated source path.

**Parameter `entry`:** The resolved entry when available.

**Returns:** `true` when the entry exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileSystem.cs#L289).

## `WaitForIdle`

<a id="api-cb072ff7f11062b2"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetFileSystem.WaitForIdle ab74af17a603ad0b437e882da0f4d7a3c120d6caeb631443b34a5e2f69a350e5 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Assets.Pipeline.AssetChangedEvent> Inno.Assets.Pipeline.AssetFileSystem.WaitForIdle()
```

Waits for a quiet watcher window, refreshes the index, and returns queued changes.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileSystem.cs#L392).

## `WaitForIdle`

<a id="api-1c8a41eaedf8dc0f"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetFileSystem.WaitForIdle(System.Boolean@) b2de730e0c7fe0ea2f1d06fb505d96f99d4896fcd5ec55be89fbd89300a17d1b -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Assets.Pipeline.AssetChangedEvent> Inno.Assets.Pipeline.AssetFileSystem.WaitForIdle(out bool requiresFullRescan)
```

Waits for queued changes and reports whether a full rescan is required.

**Parameter `requiresFullRescan`:** Whether the watcher reported an unreliable event stream.

**Returns:** The normalized queued changes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileSystem.cs#L403).

## `assetRoot`

<a id="api-03f97ac3a818b4de"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetFileSystem.assetRoot 3b04b9b49dc144c63c315c8698b8f5a7d8c7179cbae6983bba6aeb635d13a9f3 -->

```csharp
public string Inno.Assets.Pipeline.AssetFileSystem.assetRoot { get; }
```

Gets the absolute source asset root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileSystem.cs#L44).

## `isWatching`

<a id="api-516fb6957e552af1"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetFileSystem.isWatching 52997f7543e34c4f470980a0354d5ca8bfc618341529300482a9f70faf11a3e7 -->

```csharp
public bool Inno.Assets.Pipeline.AssetFileSystem.isWatching { get; }
```

Gets whether source file watching is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetFileSystem.cs#L49).
