---
title: "TypeCacheSnapshot"
description: "Reference for TypeCacheSnapshot in Inno.Extensibility.Types."
uid: api.inno.extensibility.types.839037fe9c97a082
kind: api
owners:
  - Inno.Extensibility.Types
apiSurface: source-clr
contracts:
  - project.inno-extensibility-types
---
# `TypeCacheSnapshot`

This reference describes `TypeCacheSnapshot` in `Inno.Extensibility.Types`. Read the [shared contract](../../projects/inno-extensibility-types.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`CanCreateInstance`](#api-bf928c9abc16fc9f) | Method |
| [`ConstructGenericType`](#api-e9106986cb5e5b1e) | Method |
| [`CreateInstance`](#api-df3ef8296f35d458) | Method |
| [```GetAttribute``1```](#api-f4b2597e325044f8) | Method |
| [`GetMetadata`](#api-9b0c77cdd6e4953f) | Method |
| [```GetSubTypesOf``1```](#api-c48abd2a054c353b) | Method |
| [`GetTypeRef`](#api-8bc09aa425a384ad) | Method |
| [```GetTypesImplementing``1```](#api-a00961e056d4b08b) | Method |
| [```GetTypesWithAttribute``1```](#api-8781d7308ae4e69d) | Method |
| [`TryGetTypeRef`](#api-bc9ec05cf65f4c3f) | Method |
| [`types`](#api-e7a3e0a326da5b9b) | Property |
| [`version`](#api-847c497084f31cc9) | Property |

## Type declaration

<a id="api-839037fe9c97a082"></a>
<!-- api: T:Inno.Extensibility.Types.TypeCacheSnapshot f02e7aae991dd5ea895c9939c685eeaf975abfd50692980bca21f8dc44c8c6f0 -->

```csharp
public sealed class Inno.Extensibility.Types.TypeCacheSnapshot
```

Represents an immutable, internally consistent view of discoverable runtime types.

**Constraints:** A snapshot strongly retains its discovered `System.Type` instances. Callers must not cache an
obsolete snapshot or one of its type lists beyond the operation that needs generation consistency,
because doing so delays unloading the corresponding collectible assembly load context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeCacheSnapshot.cs#L18).

## `CanCreateInstance`

<a id="api-bf928c9abc16fc9f"></a>
<!-- api: M:Inno.Extensibility.Types.TypeCacheSnapshot.CanCreateInstance(Inno.Extensibility.Types.TypeRef) 2e53b2a64a2174457b0b7eb8502505ed4545a0cd4e8b7e310e5bbb211e38e515 -->

```csharp
public bool Inno.Extensibility.Types.TypeCacheSnapshot.CanCreateInstance(Inno.Extensibility.Types.TypeRef type)
```

Determines whether the current deployment can construct a type in this exact generation.

**Parameter `type`:** The type reference to resolve against this snapshot.

**Returns:** Whether a declared type resolves and has an available parameterless factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeCacheSnapshot.cs#L137).

## `ConstructGenericType`

<a id="api-e9106986cb5e5b1e"></a>
<!-- api: M:Inno.Extensibility.Types.TypeCacheSnapshot.ConstructGenericType(System.Type,System.Collections.Generic.IReadOnlyList{System.Type}) 68286140471acbde725ecea3c4d44ef0f0bea6344f6aec7db313e54be1ef29c3 -->

```csharp
public System.Type? Inno.Extensibility.Types.TypeCacheSnapshot.ConstructGenericType(System.Type definition, System.Collections.Generic.IReadOnlyList<System.Type> arguments)
```

Resolves a generic construction belonging to this exact generation.

**Parameter `definition`:** A registered generic declaration.

**Parameter `arguments`:** Ordered closed type arguments.

**Returns:** The resolved closed type, or null when generic constraints reject the arguments.

**Throws `System.InvalidOperationException`:** The declaration does not belong to this generation.

**Throws `System.NotSupportedException`:** This deployment has not linked the requested construction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeCacheSnapshot.cs#L179).

## `CreateInstance`

<a id="api-df3ef8296f35d458"></a>
<!-- api: M:Inno.Extensibility.Types.TypeCacheSnapshot.CreateInstance(System.Type) 821968147286b764e2d94b1dae51dd65673bb1a6278a2216d0aa5fea452de6af -->

```csharp
public object Inno.Extensibility.Types.TypeCacheSnapshot.CreateInstance(System.Type type)
```

Constructs a declared type through this generation's selected metadata source.

**Parameter `type`:** A declaration in this snapshot, or a closed construction of its registered generic declaration.

**Returns:** The new instance owned by the caller.

**Throws `System.InvalidOperationException`:** The reference does not resolve or its deployment does not provide a factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeCacheSnapshot.cs#L152).

## ```GetAttribute``1```

<a id="api-f4b2597e325044f8"></a>
<!-- api: M:Inno.Extensibility.Types.TypeCacheSnapshot.GetAttribute``1(Inno.Extensibility.Types.TypeRef,System.Boolean) 2c44d6840190f35f87c57c41ffd3a54c58e9e6fa03722353b53895e3e6f6dc84 -->

```csharp
public TAttribute? Inno.Extensibility.Types.TypeCacheSnapshot.GetAttribute<TAttribute>(Inno.Extensibility.Types.TypeRef type, bool inherit = true) where TAttribute : System.Attribute
```

Reads a single extension attribute without requiring runtime reflection.

**Type parameter `TAttribute`:** The attribute contract requested by the caller.

**Parameter `type`:** A declaration in this snapshot.

**Parameter `inherit`:** Whether effective inherited attributes participate.

**Returns:** The matching attribute, or null when absent; duplicate singleton attributes throw.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeCacheSnapshot.cs#L216).

## `GetMetadata`

<a id="api-9b0c77cdd6e4953f"></a>
<!-- api: M:Inno.Extensibility.Types.TypeCacheSnapshot.GetMetadata(Inno.Extensibility.Types.TypeRef) e59abf2ed0c23495042a3f801ad8b5d29d11460140f9e0490510160145b18626 -->

```csharp
public Inno.Extensibility.Catalogs.TypeCatalogMetadata Inno.Extensibility.Types.TypeCacheSnapshot.GetMetadata(Inno.Extensibility.Types.TypeRef type)
```

Reads the immutable discovery facts for a declaration in this exact generation.

**Parameter `type`:** The logical declaration to resolve against this snapshot.

**Returns:** Complete metadata; stale or unregistered declarations fail during resolution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeCacheSnapshot.cs#L199).

## ```GetSubTypesOf``1```

<a id="api-c48abd2a054c353b"></a>
<!-- api: M:Inno.Extensibility.Types.TypeCacheSnapshot.GetSubTypesOf``1 be4fe182950e563ed3ce2a36f303df23586ad9c568354006684f030dd382cd46 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Extensibility.Types.TypeRef> Inno.Extensibility.Types.TypeCacheSnapshot.GetSubTypesOf<T>()
```

Gets all concrete discovered types assignable to `T`.

**Type parameter `T`:** The base type used to select assignable concrete types.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeCacheSnapshot.cs#L68).

## `GetTypeRef`

<a id="api-8bc09aa425a384ad"></a>
<!-- api: M:Inno.Extensibility.Types.TypeCacheSnapshot.GetTypeRef(System.Type) 446eb9b327acfc2b0424eb93e55665727b23678c299d34d879216d3a73c78cf3 -->

```csharp
public Inno.Extensibility.Types.TypeRef Inno.Extensibility.Types.TypeCacheSnapshot.GetTypeRef(System.Type type)
```

Gets the reference for a CLR type in this snapshot.

**Returns:** The logical and generation-local identity of `type`.

**Throws `System.ArgumentNullException`:** Thrown when `type` is `null`.

**Throws `System.InvalidOperationException`:** Thrown when the type does not belong to this snapshot.

**Parameter `type`:** The type consumed by get type ref; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeCacheSnapshot.cs#L109).

## ```GetTypesImplementing``1```

<a id="api-a00961e056d4b08b"></a>
<!-- api: M:Inno.Extensibility.Types.TypeCacheSnapshot.GetTypesImplementing``1 63436558a4ab20ebbc46f26d7cbf8e4bc7f065efb1190ee283b518b89a8aff85 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Extensibility.Types.TypeRef> Inno.Extensibility.Types.TypeCacheSnapshot.GetTypesImplementing<TInterface>()
```

Gets all concrete discovered types implementing `TInterface`.

**Type parameter `TInterface`:** The interface contract implemented by every selected concrete type.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeCacheSnapshot.cs#L79).

## ```GetTypesWithAttribute``1```

<a id="api-8781d7308ae4e69d"></a>
<!-- api: M:Inno.Extensibility.Types.TypeCacheSnapshot.GetTypesWithAttribute``1 eb8d7e01eede6f1c6a3825948732c07a98901fc3b41ae171099d7f9b260c51eb -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Extensibility.Types.TypeRef> Inno.Extensibility.Types.TypeCacheSnapshot.GetTypesWithAttribute<TAttribute>() where TAttribute : System.Attribute
```

Gets all concrete discovered types marked with `TAttribute`.

**Type parameter `TAttribute`:** The attribute type required on every selected concrete type.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeCacheSnapshot.cs#L91).

## `TryGetTypeRef`

<a id="api-bc9ec05cf65f4c3f"></a>
<!-- api: M:Inno.Extensibility.Types.TypeCacheSnapshot.TryGetTypeRef(System.Type,Inno.Extensibility.Types.TypeRef@) 8968a323c7ae8d395c74b29aa2902ce5ffb1e4589eebd493c7f721f3cbf3b4e9 -->

```csharp
public bool Inno.Extensibility.Types.TypeCacheSnapshot.TryGetTypeRef(System.Type type, out Inno.Extensibility.Types.TypeRef typeRef)
```

Tries to get the reference for a CLR type in this snapshot.

**Parameter `type`:** The CLR type to identify.

**Parameter `typeRef`:** Receives its logical and generation-local identity.

**Returns:** `true` when the type belongs to this snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeCacheSnapshot.cs#L123).

## `types`

<a id="api-e7a3e0a326da5b9b"></a>
<!-- api: P:Inno.Extensibility.Types.TypeCacheSnapshot.types ddcffc4fa174c635f4696838066a999343e08bc3459e70b65cfe50dfd5c94de9 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Extensibility.Types.TypeRef> Inno.Extensibility.Types.TypeCacheSnapshot.types { get; }
```

Gets every type included in this snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeCacheSnapshot.cs#L57).

## `version`

<a id="api-847c497084f31cc9"></a>
<!-- api: P:Inno.Extensibility.Types.TypeCacheSnapshot.version 0a306796190cbaf528960f78acd7a7834de066942b707dcefa994773f9fbfa32 -->

```csharp
public long Inno.Extensibility.Types.TypeCacheSnapshot.version { get; }
```

Gets the monotonically increasing catalog version.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeCacheSnapshot.cs#L52).
