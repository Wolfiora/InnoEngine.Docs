---
title: "NativeBindingGenerationResult"
description: "Reference for NativeBindingGenerationResult in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.3a3f45081993c38f
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `NativeBindingGenerationResult`

This reference describes `NativeBindingGenerationResult` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.Collections.Generic.IReadOnlyDictionary<string, Inno.Build.Toolchains.NativeBindingGenerationDescriptor>`, `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-713e53bee87b6a07) | Method |
| [`ContainsKey`](#api-70c730a656e4a691) | Method |
| [`Dispose`](#api-eff1a390550051ac) | Method |
| [`GetEnumerator`](#api-742d3bcd3d675bca) | Method |
| [`TryGetValue`](#api-2e2d3c135f7d027f) | Method |
| [`Count`](#api-0bd4832919e68ed2) | Property |
| [`Item`](#api-c205305a61e0201e) | Property |
| [`Keys`](#api-2e4433e62628ec05) | Property |
| [`Values`](#api-6541031452eb7d4a) | Property |

## Type declaration

<a id="api-3a3f45081993c38f"></a>
<!-- api: T:Inno.Build.Toolchains.NativeBindingGenerationResult 41eafdb54c54d85455f3c3004b62ee5cfc66e08d659070bef91f6da012eac919 -->

```csharp
public sealed class Inno.Build.Toolchains.NativeBindingGenerationResult : System.Collections.Generic.IReadOnlyDictionary<string, Inno.Build.Toolchains.NativeBindingGenerationDescriptor>, System.IDisposable
```

Owns the reading protection of a complete binding closure until its final compiler consumer finishes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingGenerationResult.cs#L14).

## `#ctor`

<a id="api-713e53bee87b6a07"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingGenerationResult.#ctor(System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Build.Toolchains.NativeBindingGenerationDescriptor},System.Collections.Generic.IEnumerable{System.IDisposable}) 65055912ddb9cd867a87d73a20e0632873cf7f34fc709bf590b2783e0fbcaf8b -->

```csharp
public Inno.Build.Toolchains.NativeBindingGenerationResult.NativeBindingGenerationResult(System.Collections.Generic.IReadOnlyDictionary<string, Inno.Build.Toolchains.NativeBindingGenerationDescriptor> generations, System.Collections.Generic.IEnumerable<System.IDisposable> ownership)
```

Freezes a complete generation map and accepts its already acquired reading ownership.

**Parameter `generations`:** The complete Native project to generation mapping.

**Parameter `ownership`:** Protection transferred on successful construction; retained by the caller on failure.

**Throws `System.ArgumentNullException`:** Either collection is null.

**Throws `System.ArgumentException`:** A generation or protection entry is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingGenerationResult.cs#L34).

## `ContainsKey`

<a id="api-70c730a656e4a691"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingGenerationResult.ContainsKey(System.String) f60bbbaceb363b00f8c09763c82b61e0b349cb09e23f216c56712a233082a901 -->

```csharp
public bool Inno.Build.Toolchains.NativeBindingGenerationResult.ContainsKey(string key)
```

Determines whether the read-only dictionary contains an element that has the specified key.

**Parameter `key`:** The key to locate.

**Throws `System.ArgumentNullException`:** `key` is `null`.

**Returns:** `true` if the read-only dictionary contains an element that has the specified key; otherwise, `false`.

**Throws `System.ObjectDisposedException`:** Reading ownership has ended.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingGenerationResult.cs#L93).

## `Dispose`

<a id="api-eff1a390550051ac"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingGenerationResult.Dispose de15a2fb5c3003ac8b7eb47c2fb7ed85f34419b6e9d807fc2180d9363a16d44b -->

```csharp
public void Inno.Build.Toolchains.NativeBindingGenerationResult.Dispose()
```

Releases all protection in reverse acquisition order; repeated disposal has no effect.

**Throws `System.AggregateException`:** One or more owners failed to release after every owner was attempted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingGenerationResult.cs#L122).

## `GetEnumerator`

<a id="api-742d3bcd3d675bca"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingGenerationResult.GetEnumerator 07682f5897ef8767d99f9a4371138a3bee2b69dffa73f04bdb49974824e3d397 -->

```csharp
public System.Collections.Generic.IEnumerator<System.Collections.Generic.KeyValuePair<string, Inno.Build.Toolchains.NativeBindingGenerationDescriptor>> Inno.Build.Toolchains.NativeBindingGenerationResult.GetEnumerator()
```

Returns an enumerator that iterates through the collection.

**Returns:** An enumerator that can be used to iterate through the collection.

**Constraints:** Enumeration and all descriptor consumers must finish before the result's reading protection ends.

**Throws `System.ObjectDisposedException`:** Reading ownership has ended.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingGenerationResult.cs#L114).

## `TryGetValue`

<a id="api-2e2d3c135f7d027f"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingGenerationResult.TryGetValue(System.String,Inno.Build.Toolchains.NativeBindingGenerationDescriptor@) 91b5f888630e8755dd01a0f0d2e371a19ffc14cd1254a6dfec212ed7f9dc7763 -->

```csharp
public bool Inno.Build.Toolchains.NativeBindingGenerationResult.TryGetValue(string key, out Inno.Build.Toolchains.NativeBindingGenerationDescriptor value)
```

Gets the value that is associated with the specified key.

**Parameter `key`:** The key to locate.

**Parameter `value`:** When this method returns, the value associated with the specified key, if the key is found; otherwise, the default value for the type of the `value` parameter. This parameter is passed uninitialized.

**Throws `System.ArgumentNullException`:** `key` is `null`.

**Returns:** `true` if the object that implements the ``System.Collections.Generic.IReadOnlyDictionary`2`` interface contains an element that has the specified key; otherwise, `false`.

**Constraints:** A returned descriptor is borrowed and must not be used to access files after this result is disposed.

**Throws `System.ObjectDisposedException`:** Reading ownership has ended.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingGenerationResult.cs#L102).

## `Count`

<a id="api-0bd4832919e68ed2"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingGenerationResult.Count bc38cb7455637b4c04de7f72cecc31a4c0fd6dc03cce7a14ea71ba8ce38e65e4 -->

```csharp
public int Inno.Build.Toolchains.NativeBindingGenerationResult.Count { get; }
```

Gets the number of elements in the collection.

**Returns:** The number of elements in the collection.

**Throws `System.ObjectDisposedException`:** Reading ownership has ended.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingGenerationResult.cs#L52).

## `Item`

<a id="api-c205305a61e0201e"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingGenerationResult.Item(System.String) 2a4ad570ce78336dc3b34fb057205831cd58964c7392e922ffebff1924fb7be8 -->

```csharp
public Inno.Build.Toolchains.NativeBindingGenerationDescriptor Inno.Build.Toolchains.NativeBindingGenerationResult.this[string key] { get; }
```

Gets a borrowed descriptor whose outputs remain protected until this result is disposed.

**Parameter `key`:** The checkout-relative Native owner project.

**Returns:** The selected generation; neither its paths nor retained descriptors extend reading ownership.

**Throws `System.ObjectDisposedException`:** Reading ownership has ended.

**Throws `System.Collections.Generic.KeyNotFoundException`:** The project is outside this closure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingGenerationResult.cs#L87).

## `Keys`

<a id="api-2e4433e62628ec05"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingGenerationResult.Keys 5f281d96abafb7482baafffc91b39573dd55e3fbdc3c563b1bc245a66e53640d -->

```csharp
public System.Collections.Generic.IEnumerable<string> Inno.Build.Toolchains.NativeBindingGenerationResult.Keys { get; }
```

Gets an enumerable collection that contains the keys in the read-only dictionary.

**Returns:** An enumerable collection that contains the keys in the read-only dictionary.

**Constraints:** The returned sequence is borrowed and must be consumed before this result is disposed.

**Throws `System.ObjectDisposedException`:** Reading ownership has ended.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingGenerationResult.cs#L61).

## `Values`

<a id="api-6541031452eb7d4a"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingGenerationResult.Values 2d503e5e28eabf4734a453544cdf4570f6fa9ea376c87ad059ef449409f4dab7 -->

```csharp
public System.Collections.Generic.IEnumerable<Inno.Build.Toolchains.NativeBindingGenerationDescriptor> Inno.Build.Toolchains.NativeBindingGenerationResult.Values { get; }
```

Gets an enumerable collection that contains the values in the read-only dictionary.

**Returns:** An enumerable collection that contains the values in the read-only dictionary.

**Constraints:** Neither the returned sequence nor its descriptors extend the lifetime of reading protection.

**Throws `System.ObjectDisposedException`:** Reading ownership has ended.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingGenerationResult.cs#L70).
