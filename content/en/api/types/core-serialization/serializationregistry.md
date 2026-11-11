---
title: "SerializationRegistry"
description: "Reference for SerializationRegistry in Inno.Core.Serialization."
uid: api.inno.core.serialization.532d59aed512a0ec
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: source-clr
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
---
# `SerializationRegistry`

This reference describes `SerializationRegistry` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-41da8fccf82a6cc0) | Method |
| [`CaptureGeneration`](#api-b3d26af74d8341e3) | Method |
| [`CaptureProperties`](#api-7c907daa79a2dcd7) | Method |
| [`CapturePropertiesData`](#api-0e2037e47f8483d3) | Method |
| [`CapturePropertyData`](#api-40358d50872e0291) | Method |
| [```CaptureSnapshot``1```](#api-a5c1e5869b56e173) | Method |
| [```Decode``1```](#api-2116243245150f14) | Method |
| [```Deserialize``1```](#api-83d3ade5b12e0225) | Method |
| [`Dispose`](#api-27023162af6ea6fe) | Method |
| [`Encode`](#api-cc40affbc6e53c00) | Method |
| [`EncodePropertySnapshots`](#api-e83961d064bb3214) | Method |
| [`GetMetadata`](#api-33601a9f8291cfe1) | Method |
| [`GetProperties`](#api-8f66ff9d7e0251f6) | Method |
| [```Restore``1```](#api-054a392c95c990f7) | Method |
| [`RestoreProperties`](#api-17b43fa918914afc) | Method |
| [`RestorePropertiesData`](#api-e8b1ff3827c59576) | Method |
| [```Serialize``1```](#api-9d0f261cec2f5d3f) | Method |

## Type declaration

<a id="api-532d59aed512a0ec"></a>
<!-- api: T:Inno.Core.Serialization.SerializationRegistry 433a2d4ba10f94273f8208ce28534d14d1c73ae79fdab2330dc353d58cd3caa1 -->

```csharp
public sealed class Inno.Core.Serialization.SerializationRegistry : System.IDisposable
```

Owns one generation-aware converter registry and provides deterministic root serialization operations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/SerializationRegistry.cs#L12).

## `#ctor`

<a id="api-41da8fccf82a6cc0"></a>
<!-- api: M:Inno.Core.Serialization.SerializationRegistry.#ctor(Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.ISerializationMetadataSource) 34433cc82f6e9db0275b2907eb03004a9af9e0bcef87c5abb00c8bc163698b62 -->

```csharp
public Inno.Core.Serialization.SerializationRegistry.SerializationRegistry(Inno.Extensibility.Types.TypeCatalog types, Inno.Core.Serialization.ISerializationMetadataSource metadata)
```

Creates a serialization registry derived from one isolated type catalog.

**Parameter `types`:** The type catalog that owns converter extension generations.

**Throws `System.ArgumentNullException`:** Thrown when `types` is null.

**Parameter `metadata`:** The declaration access provider selected by the same composition root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/SerializationRegistry.cs#L32).

## `CaptureGeneration`

<a id="api-b3d26af74d8341e3"></a>
<!-- api: M:Inno.Core.Serialization.SerializationRegistry.CaptureGeneration 6c0e04353d711a0aaa5f0a26a7a8df262cd4bc60df68ce815916c95b040b7983 -->

```csharp
public Inno.Core.Serialization.SerializationGeneration Inno.Core.Serialization.SerializationRegistry.CaptureGeneration()
```

Captures the currently active converter generation for deterministic work that may cross
asynchronous continuations.

**Returns:** An immutable serialization generation owned by the caller.

**Throws `System.InvalidOperationException`:** Thrown when serialization services have not been initialized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/SerializationRegistry.cs#L65).

## `CaptureProperties`

<a id="api-7c907daa79a2dcd7"></a>
<!-- api: M:Inno.Core.Serialization.SerializationRegistry.CaptureProperties(Inno.Core.Serialization.ISerializable,Inno.Core.Serialization.SerializationContext) 723dc51881ca80211f61da62b78b20c259d0ac2337588cd0f7302aa49a64fb2a -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Core.Serialization.SerializationPropertySnapshot> Inno.Core.Serialization.SerializationRegistry.CaptureProperties(Inno.Core.Serialization.ISerializable value, Inno.Core.Serialization.SerializationContext? context = null)
```

Captures each persistent property independently for reload-safe state restoration.

**Parameter `value`:** The object whose serializable properties should be captured.

**Parameter `context`:** Optional immutable converter context.

**Returns:** Ordered independent property snapshots.

**Throws `System.ArgumentNullException`:** Thrown when `value` is null.

**Throws `System.InvalidOperationException`:** Thrown when the manager is not initialized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/SerializationRegistry.cs#L146).

## `CapturePropertiesData`

<a id="api-0e2037e47f8483d3"></a>
<!-- api: M:Inno.Core.Serialization.SerializationRegistry.CapturePropertiesData(Inno.Core.Serialization.ISerializable,Inno.Core.Serialization.SerializationContext) d7f310aeba37dd09c7e47ce9745a39f2a964bf5c429cd254b88a90173ad03ad3 -->

```csharp
public byte[] Inno.Core.Serialization.SerializationRegistry.CapturePropertiesData(Inno.Core.Serialization.ISerializable value, Inno.Core.Serialization.SerializationContext? context = null)
```

Captures every persistent property as neutral bytes without serializing the owning object graph.

**Parameter `value`:** The serializable object whose persistent properties should be captured.

**Parameter `context`:** Optional immutable converter context.

**Returns:** Strictly validated bytes containing independently encoded property values.

**Throws `System.ArgumentNullException`:** Thrown when `value` is `null`.

**Throws `System.InvalidOperationException`:** Thrown when the manager is not initialized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/SerializationRegistry.cs#L214).

## `CapturePropertyData`

<a id="api-40358d50872e0291"></a>
<!-- api: M:Inno.Core.Serialization.SerializationRegistry.CapturePropertyData(Inno.Core.Serialization.ISerializable,System.String,Inno.Core.Serialization.SerializationContext) d5fcce53c7bc45eb1f56700ac7828d1c7695bd558710c2b58be85f874675a54e -->

```csharp
public byte[] Inno.Core.Serialization.SerializationRegistry.CapturePropertyData(Inno.Core.Serialization.ISerializable value, string propertyName, Inno.Core.Serialization.SerializationContext? context = null)
```

Captures one persistent property as independently restorable neutral bytes without reading unrelated members.

**Parameter `value`:** The serializable object containing the requested property.

**Parameter `propertyName`:** The exact serialized member key to capture.

**Parameter `context`:** Optional immutable converter context.

**Returns:** Neutral bytes containing the property name and encoded value.

**Throws `System.ArgumentNullException`:** Thrown when `value` is `null`.

**Throws `System.ArgumentException`:** Thrown when `propertyName` is empty or does not identify a persistent property.

**Throws `System.InvalidOperationException`:** Thrown when the manager is not initialized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/SerializationRegistry.cs#L180).

## ```CaptureSnapshot``1```

<a id="api-a5c1e5869b56e173"></a>
<!-- api: M:Inno.Core.Serialization.SerializationRegistry.CaptureSnapshot``1(``0,Inno.Core.Serialization.SerializationContext,Inno.Core.Serialization.SerializationSnapshot) 3ce45c702c1e6199badf94793717a299a4e6970f7b7b6dbd691f53f226506eab -->

```csharp
public Inno.Core.Serialization.SerializationSnapshot Inno.Core.Serialization.SerializationRegistry.CaptureSnapshot<T>(T value, Inno.Core.Serialization.SerializationContext? context = null, Inno.Core.Serialization.SerializationSnapshot? previous = null) where T : class, Inno.Core.Serialization.ISerializable
```

Captures complete serialized state while sharing unchanged neutral values with a previous capture.

**Type parameter `T`:** The exact concrete root type, interpreted by the current converter generation.

**Parameter `value`:** The non-null root captured through its current converter and declared complete inputs.

**Parameter `context`:** The complete owner context, including required reference resolvers.

**Parameter `previous`:** An optional immutable capture to reuse; it is never changed or retained by this registry.

**Returns:** The previous instance when all captured values can be reused, otherwise a new immutable snapshot.
Reference equality proves unchanged bytes; different instances may still encode identically.
Ordinary serialization and snapshot encoding produce identical bytes. Capture failure publishes no snapshot.

**Constraints:** Writers borrowed by a snapshot converter belong to its synchronous callback and must not be used after it returns.
Default capture evaluates getters and converters in full. An explicitly opted-in converter may
reuse its prior node only after every current capture-key input has been verified. Ordinary
serialization never uses these keys; incomplete or unavailable declarations retain complete capture.

**Throws `System.ArgumentNullException`:** The source value is null.

**Throws `System.ObjectDisposedException`:** The registry has been disposed.

**Throws `System.InvalidOperationException`:** A converter, unsupported value or reference context prevents capture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/SerializationRegistry.cs#L411).

## ```Decode``1```

<a id="api-2116243245150f14"></a>
<!-- api: M:Inno.Core.Serialization.SerializationRegistry.Decode``1(System.ReadOnlySpan{System.Byte},System.Func{Inno.Core.Serialization.SerializationReader,``0},Inno.Core.Serialization.SerializationContext) 7553cb1fe3aaaf07e8eae5a7b805664435cd986065e8da5d1b1ed496ae437e04 -->

```csharp
public TResult Inno.Core.Serialization.SerializationRegistry.Decode<TResult>(System.ReadOnlySpan<byte> bytes, System.Func<Inno.Core.Serialization.SerializationReader, TResult> read, Inno.Core.Serialization.SerializationContext? context = null)
```

Decodes a manually defined structured schema from deterministic binary data.

**Type parameter `TResult`:** The result produced by the read callback.

**Parameter `bytes`:** The encoded bytes.

**Parameter `read`:** The callback that reads the root object.

**Parameter `context`:** Optional immutable converter context.

**Returns:** The callback result after all completion callbacks succeed.

**Throws `System.ArgumentNullException`:** Thrown when `read` is null.

**Throws `System.InvalidOperationException`:** Thrown when the manager is not initialized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/SerializationRegistry.cs#L621).

## ```Deserialize``1```

<a id="api-83d3ade5b12e0225"></a>
<!-- api: M:Inno.Core.Serialization.SerializationRegistry.Deserialize``1(System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationContext) fff0417555696161363fa13692667258eb91d5f94f82c23418112813eb7ef205 -->

```csharp
public T Inno.Core.Serialization.SerializationRegistry.Deserialize<T>(System.ReadOnlySpan<byte> bytes, Inno.Core.Serialization.SerializationContext? context = null) where T : class, Inno.Core.Serialization.ISerializable
```

Deserializes a new serializable root object from deterministic binary data.

**Type parameter `T`:** The concrete root type to create.

**Parameter `bytes`:** The encoded bytes.

**Parameter `context`:** Optional immutable converter context.

**Returns:** The restored object.

**Throws `System.InvalidOperationException`:** Thrown when the manager is not initialized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/SerializationRegistry.cs#L470).

## `Dispose`

<a id="api-27023162af6ea6fe"></a>
<!-- api: M:Inno.Core.Serialization.SerializationRegistry.Dispose 82be1d5e66db58d177bca2c9e09ce02447dbbc35e80875d0be649b5f7c763841 -->

```csharp
public void Inno.Core.Serialization.SerializationRegistry.Dispose()
```

Releases every converter generation owned by this registry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/SerializationRegistry.cs#L45).

## `Encode`

<a id="api-cc40affbc6e53c00"></a>
<!-- api: M:Inno.Core.Serialization.SerializationRegistry.Encode(System.Action{Inno.Core.Serialization.SerializationWriter},Inno.Core.Serialization.SerializationContext) 09c46545af6383da77d5cf4770bbdbe82b0c2707485e24df37a0ba0c6d850a85 -->

```csharp
public byte[] Inno.Core.Serialization.SerializationRegistry.Encode(System.Action<Inno.Core.Serialization.SerializationWriter> write, Inno.Core.Serialization.SerializationContext? context = null)
```

Encodes a manually defined structured schema into deterministic binary data.

**Parameter `write`:** The callback that writes the root object.

**Parameter `context`:** Optional immutable converter context.

**Returns:** The encoded bytes.

**Throws `System.ArgumentNullException`:** Thrown when `write` is null.

**Throws `System.InvalidOperationException`:** Thrown when the manager is not initialized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/SerializationRegistry.cs#L567).

## `EncodePropertySnapshots`

<a id="api-e83961d064bb3214"></a>
<!-- api: M:Inno.Core.Serialization.SerializationRegistry.EncodePropertySnapshots(System.Collections.Generic.IReadOnlyList{Inno.Core.Serialization.SerializationPropertySnapshot}) af825ab10236befea0dedec4e1f73a34cb1939ad283687d19ebf9237f7ab0ded -->

```csharp
public byte[] Inno.Core.Serialization.SerializationRegistry.EncodePropertySnapshots(System.Collections.Generic.IReadOnlyList<Inno.Core.Serialization.SerializationPropertySnapshot> snapshots)
```

Encodes an existing ordered set of independent property snapshots as neutral restoration bytes.

**Parameter `snapshots`:** Snapshots previously produced by `Inno.Core.Serialization.SerializationRegistry.CaptureProperties(Inno.Core.Serialization.ISerializable,Inno.Core.Serialization.SerializationContext)`.

**Returns:** Strictly validated bytes accepted by `Inno.Core.Serialization.SerializationRegistry.RestorePropertiesData(Inno.Core.Serialization.ISerializable,System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationPropertyRestoreMode,Inno.Core.Serialization.SerializationContext)`.

**Throws `System.ArgumentNullException`:** Thrown when `snapshots` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/SerializationRegistry.cs#L237).

## `GetMetadata`

<a id="api-33601a9f8291cfe1"></a>
<!-- api: M:Inno.Core.Serialization.SerializationRegistry.GetMetadata(System.Type) fbc2aebf4e6758e592610cd36ad0dbd32a2e77b22d0296785985f51f4b6e62cd -->

```csharp
public Inno.Core.Serialization.SerializationTypeMetadata Inno.Core.Serialization.SerializationRegistry.GetMetadata(System.Type type)
```

Reads the current provider's declaration metadata for domain operations such as prefab overrides.

**Parameter `type`:** The exact declaration owned by the current serialization generation.

**Returns:** Immutable declaration accessors owned by this generation; unsupported declarations throw.
The caller must not retain the result across generation retirement.

**Throws `System.ArgumentNullException`:** The declaration is null.

**Throws `System.ObjectDisposedException`:** The registry has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/SerializationRegistry.cs#L88).

## `GetProperties`

<a id="api-8f66ff9d7e0251f6"></a>
<!-- api: M:Inno.Core.Serialization.SerializationRegistry.GetProperties(Inno.Core.Serialization.ISerializable) a49d244777434eab95a479b023888899da5620f660a7b2e248bbfb420cc742ec -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Core.Serialization.SerializedProperty> Inno.Core.Serialization.SerializationRegistry.GetProperties(Inno.Core.Serialization.ISerializable value)
```

Gets the stable ordered runtime-visible properties for a serializable object.

**Parameter `value`:** The object whose property metadata should be created.

**Returns:** The properties that permit runtime reads.

**Throws `System.ArgumentNullException`:** Thrown when `value` is null.

**Throws `System.InvalidOperationException`:** Thrown when the manager is not initialized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/SerializationRegistry.cs#L110).

## ```Restore``1```

<a id="api-054a392c95c990f7"></a>
<!-- api: M:Inno.Core.Serialization.SerializationRegistry.Restore``1(``0,System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationContext) 1d482e7f8cb6eb6b0eed6c5d2baaf3c34abe625768667e27f8dd86759e300a54 -->

```csharp
public void Inno.Core.Serialization.SerializationRegistry.Restore<T>(T target, System.ReadOnlySpan<byte> bytes, Inno.Core.Serialization.SerializationContext? context = null) where T : class, Inno.Core.Serialization.ISerializable
```

Restores deterministic binary data into an existing serializable root object.

**Type parameter `T`:** The declared target contract.

**Parameter `target`:** The existing target object.

**Parameter `bytes`:** The encoded bytes.

**Parameter `context`:** Optional immutable converter context.

**Throws `System.ArgumentNullException`:** Thrown when `target` is null.

**Throws `System.InvalidOperationException`:** Thrown when the manager is not initialized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/SerializationRegistry.cs#L525).

## `RestoreProperties`

<a id="api-17b43fa918914afc"></a>
<!-- api: M:Inno.Core.Serialization.SerializationRegistry.RestoreProperties(Inno.Core.Serialization.ISerializable,System.Collections.Generic.IReadOnlyList{Inno.Core.Serialization.SerializationPropertySnapshot},Inno.Core.Serialization.SerializationPropertyRestoreMode,Inno.Core.Serialization.SerializationContext) 7ace592b1430be9288e9c13f24b14e9e9a7d150db60d9fe18ff63decc7fb7e11 -->

```csharp
public Inno.Core.Serialization.SerializationPropertyRestoreResult Inno.Core.Serialization.SerializationRegistry.RestoreProperties(Inno.Core.Serialization.ISerializable target, System.Collections.Generic.IReadOnlyList<Inno.Core.Serialization.SerializationPropertySnapshot> snapshots, Inno.Core.Serialization.SerializationPropertyRestoreMode mode = Inno.Core.Serialization.SerializationPropertyRestoreMode.Strict, Inno.Core.Serialization.SerializationContext? context = null)
```

Restores independently captured properties into an existing object.

**Parameter `target`:** The object receiving compatible property values.

**Parameter `snapshots`:** The previously captured property snapshots.

**Parameter `mode`:** The failure policy for matching but incompatible properties.

**Parameter `context`:** Optional immutable converter context.

**Returns:** A summary containing restored, ignored, and skipped properties.

**Throws `System.ArgumentNullException`:** Thrown when an argument is null.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when `mode` is unknown.

**Throws `System.InvalidOperationException`:** Thrown when strict restoration or an object-level callback fails.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/SerializationRegistry.cs#L272).

## `RestorePropertiesData`

<a id="api-e8b1ff3827c59576"></a>
<!-- api: M:Inno.Core.Serialization.SerializationRegistry.RestorePropertiesData(Inno.Core.Serialization.ISerializable,System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationPropertyRestoreMode,Inno.Core.Serialization.SerializationContext) eaeb5320fac6b89a00748238307696991a39900d73201c22a22a75f0e74e6519 -->

```csharp
public Inno.Core.Serialization.SerializationPropertyRestoreResult Inno.Core.Serialization.SerializationRegistry.RestorePropertiesData(Inno.Core.Serialization.ISerializable target, System.ReadOnlySpan<byte> data, Inno.Core.Serialization.SerializationPropertyRestoreMode mode = Inno.Core.Serialization.SerializationPropertyRestoreMode.Strict, Inno.Core.Serialization.SerializationContext? context = null)
```

Restores one or more independently encoded persistent properties from neutral bytes.

**Parameter `target`:** The existing object receiving the captured values.

**Parameter `data`:** Strict property snapshot bytes created by `Inno.Core.Serialization.SerializationRegistry.CapturePropertyData(Inno.Core.Serialization.ISerializable,System.String,Inno.Core.Serialization.SerializationContext)` or `Inno.Core.Serialization.SerializationRegistry.CapturePropertiesData(Inno.Core.Serialization.ISerializable,Inno.Core.Serialization.SerializationContext)`.

**Parameter `mode`:** The failure policy for matching but incompatible current properties.

**Parameter `context`:** Optional immutable converter context.

**Returns:** A summary containing restored, ignored, and skipped properties.

**Throws `System.ArgumentNullException`:** Thrown when `target` is `null`.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when `mode` is unknown.

**Throws `System.IO.InvalidDataException`:** Thrown when `data` is malformed or unsupported.

**Throws `System.InvalidOperationException`:** Thrown when strict restoration or an object-level callback fails.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/SerializationRegistry.cs#L323).

## ```Serialize``1```

<a id="api-9d0f261cec2f5d3f"></a>
<!-- api: M:Inno.Core.Serialization.SerializationRegistry.Serialize``1(``0,Inno.Core.Serialization.SerializationContext) 923f0d6202085e211df1c88722a514ed2bb7dc0aad5efcc2e8fdcead11b4b3ab -->

```csharp
public byte[] Inno.Core.Serialization.SerializationRegistry.Serialize<T>(T value, Inno.Core.Serialization.SerializationContext? context = null) where T : class, Inno.Core.Serialization.ISerializable
```

Serializes a complete serializable root object into deterministic binary data.

**Type parameter `T`:** The declared concrete root type.

**Parameter `value`:** The root object to serialize.

**Parameter `context`:** Optional immutable converter context.

**Returns:** The encoded bytes.

**Throws `System.ArgumentNullException`:** Thrown when `value` is null.

**Throws `System.InvalidOperationException`:** Thrown when the manager is not initialized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/SerializationRegistry.cs#L363).
