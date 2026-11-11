---
title: "SettingsDocumentStore`1"
description: "Reference for SettingsDocumentStore`1 in Inno.Core.Settings."
uid: api.inno.core.settings.813837915dfa05cb
kind: api
owners:
  - Inno.Core.Settings
apiSurface: source-clr
contracts:
  - project.inno-core-settings#settings-ownership-contract
---
# ``SettingsDocumentStore`1``

This reference describes ``SettingsDocumentStore`1`` in `Inno.Core.Settings`. Read the [shared contract](../../projects/inno-core-settings.md#settings-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8f1dfc0ebae97755) | Method |
| [`Capture`](#api-75e6ceb318979e80) | Method |
| [`Deserialize`](#api-0dbefc470f33e9b6) | Method |
| [`Load`](#api-c1c35db90a13f6da) | Method |
| [`LoadRequired`](#api-9aa1469f19c41e5a) | Method |
| [`Restore`](#api-a52cb2420429e857) | Method |
| [`Save`](#api-be6aaef7f3d96c00) | Method |
| [`documentName`](#api-e9634e232e9d29b2) | Property |
| [`exists`](#api-a6a093044a8e74a3) | Property |

## Type declaration

<a id="api-813837915dfa05cb"></a>
<!-- api: T:Inno.Core.Settings.SettingsDocumentStore`1 4e25b9b0f1f03afa3104550019bb17c9bf913ec71ebfaade84c0197fdb563da3 -->

```csharp
public sealed class Inno.Core.Settings.SettingsDocumentStore<TDocument> where TDocument : class, Inno.Core.Serialization.ISerializable
```

Provides validated current-format serialization and atomic persistence for one settings document type.

**Type parameter `TDocument`:** The complete serializable document type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/SettingsDocumentStore.cs#L15).

## `#ctor`

<a id="api-8f1dfc0ebae97755"></a>
<!-- api: M:Inno.Core.Settings.SettingsDocumentStore`1.#ctor(Inno.Core.IO.IByteDocumentStore,Inno.Core.Serialization.SerializationRegistry,System.Func{`0},System.Action{`0}) c8a670fb6d4b6734ccac8c52751a1a7e2c6ab961c0d4a56bee139758c544d19a -->

```csharp
public Inno.Core.Settings.SettingsDocumentStore<TDocument>.SettingsDocumentStore(Inno.Core.IO.IByteDocumentStore document, Inno.Core.Serialization.SerializationRegistry serialization, System.Func<TDocument> createDefault, System.Action<TDocument>? validate = null)
```

Creates a type-safe settings document store.

**Parameter `document`:** The borrowed document boundary; read-only sources explicitly reject writes.

**Parameter `serialization`:** The active serialization registry.

**Parameter `createDefault`:** Creates a newly owned value when the document does not exist.

**Parameter `validate`:** Validates one deserialized or candidate document.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/SettingsDocumentStore.cs#L38).

## `Capture`

<a id="api-75e6ceb318979e80"></a>
<!-- api: M:Inno.Core.Settings.SettingsDocumentStore`1.Capture(`0) 885c6f787f2c5a56815c374c16c761ce428e307b6c6b50ba5e5b3aa263b18778 -->

```csharp
public byte[] Inno.Core.Settings.SettingsDocumentStore<TDocument>.Capture(TDocument document)
```

Serializes a validated document without changing the file.

**Parameter `document`:** The document to capture.

**Returns:** A newly owned native payload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/SettingsDocumentStore.cs#L116).

## `Deserialize`

<a id="api-0dbefc470f33e9b6"></a>
<!-- api: M:Inno.Core.Settings.SettingsDocumentStore`1.Deserialize(System.ReadOnlySpan{System.Byte}) 5ac75b481a7bf11438f753bbb33189e2e6070e1c302d78116cc744389aa4aa3d -->

```csharp
public TDocument Inno.Core.Settings.SettingsDocumentStore<TDocument>.Deserialize(System.ReadOnlySpan<byte> data)
```

Deserializes and validates a native payload without changing the file.

**Parameter `data`:** The native payload.

**Returns:** A newly owned current-format document.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/SettingsDocumentStore.cs#L132).

## `Load`

<a id="api-c1c35db90a13f6da"></a>
<!-- api: M:Inno.Core.Settings.SettingsDocumentStore`1.Load 125e90cfa10e755bdb2d568e88fbaf296f703baf93c48285811db32cb580da8a -->

```csharp
public TDocument Inno.Core.Settings.SettingsDocumentStore<TDocument>.Load()
```

Loads the saved value, or creates a validated default when absent.

**Returns:** A newly owned current-format document.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/SettingsDocumentStore.cs#L69).

## `LoadRequired`

<a id="api-9aa1469f19c41e5a"></a>
<!-- api: M:Inno.Core.Settings.SettingsDocumentStore`1.LoadRequired edf81ea63136ede799de072652c491c417d9d2416167c2480aadb905aacdb5b2 -->

```csharp
public TDocument Inno.Core.Settings.SettingsDocumentStore<TDocument>.LoadRequired()
```

Loads a required saved value.

**Returns:** A newly owned current-format document.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/SettingsDocumentStore.cs#L87).

## `Restore`

<a id="api-a52cb2420429e857"></a>
<!-- api: M:Inno.Core.Settings.SettingsDocumentStore`1.Restore(System.ReadOnlySpan{System.Byte}) b3311b0cfb6fbca936812c4550b5ed151352ea598b2f345d7a7609e4bc6cc02b -->

```csharp
public void Inno.Core.Settings.SettingsDocumentStore<TDocument>.Restore(System.ReadOnlySpan<byte> data)
```

Validates and atomically restores a native document payload.

**Parameter `data`:** The native payload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/SettingsDocumentStore.cs#L157).

## `Save`

<a id="api-be6aaef7f3d96c00"></a>
<!-- api: M:Inno.Core.Settings.SettingsDocumentStore`1.Save(`0) a6c0859efdef38787789887b5f5b75d9cabdc3cea4a69348a386352f34e94dfc -->

```csharp
public void Inno.Core.Settings.SettingsDocumentStore<TDocument>.Save(TDocument document)
```

Validates and atomically replaces the complete document.

**Parameter `document`:** The complete candidate document.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/SettingsDocumentStore.cs#L100).

## `documentName`

<a id="api-e9634e232e9d29b2"></a>
<!-- api: P:Inno.Core.Settings.SettingsDocumentStore`1.documentName c4dc8fbd9c7efc1ac41708a14b702053a36605c85285e1305368e7c33956f8ab -->

```csharp
public string Inno.Core.Settings.SettingsDocumentStore<TDocument>.documentName { get; }
```

Gets the source's logical diagnostic name without requiring a filesystem location.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/SettingsDocumentStore.cs#L56).

## `exists`

<a id="api-a6a093044a8e74a3"></a>
<!-- api: P:Inno.Core.Settings.SettingsDocumentStore`1.exists 9f142a9e418197e6410942048d004c23c404252c59498cec202d89f29d7e8905 -->

```csharp
public bool Inno.Core.Settings.SettingsDocumentStore<TDocument>.exists { get; }
```

Gets whether the document currently exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/SettingsDocumentStore.cs#L61).
