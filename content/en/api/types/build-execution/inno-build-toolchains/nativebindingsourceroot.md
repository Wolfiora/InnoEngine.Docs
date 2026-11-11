---
title: "NativeBindingSourceRoot"
description: "Reference for NativeBindingSourceRoot in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.c422605c13a4c705
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `NativeBindingSourceRoot`

This reference describes `NativeBindingSourceRoot` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Build.Toolchains.NativeBindingSourceRoot>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b821c8d7c09346fd) | Method |
| [`Deconstruct`](#api-2bcaebacdf4c5e65) | Method |
| [`Equals`](#api-eba072eadf925dc8) | Method |
| [`Equals`](#api-8807aac40b90d41c) | Method |
| [`GetHashCode`](#api-6863a709a1cd9c0f) | Method |
| [`op_Equality`](#api-dacf56a7182c45dd) | Method |
| [`op_Inequality`](#api-e35a7431d7df74bb) | Method |
| [`ToString`](#api-b517fe829bfb6cb1) | Method |
| [`directory`](#api-e16bcc72b22d347d) | Property |
| [`frozen`](#api-e142fa44f28c5bd8) | Property |
| [`generated`](#api-7982d272d2709673) | Property |
| [`id`](#api-dc6add2dab94d60e) | Property |

## Type declaration

<a id="api-c422605c13a4c705"></a>
<!-- api: T:Inno.Build.Toolchains.NativeBindingSourceRoot 590f9ff139b0f1caf13a58d048baf0393619357b3f8461320298efe6fe35a452 -->

```csharp
public sealed record Inno.Build.Toolchains.NativeBindingSourceRoot : System.IEquatable<Inno.Build.Toolchains.NativeBindingSourceRoot>
```

Identifies one component-local root without exposing a generator-specific contract.

**Parameter `id`:** An ordinal identity scoped to this component's selected generation.

**Parameter `directory`:** The checkout-relative or absolute external location; empty for generated output.

**Parameter `generated`:** Whether this root denotes the selected native output directory.

**Parameter `frozen`:** Whether source files must be copied before compilation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingSourceRoot.cs#L18).

## `#ctor`

<a id="api-b821c8d7c09346fd"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingSourceRoot.#ctor(System.String,System.String,System.Boolean,System.Boolean) a3bcc94e777b65c74e9b75b9525b210b48c9c1cc688fac99bb7ca05f3a34a7dc -->

```csharp
public Inno.Build.Toolchains.NativeBindingSourceRoot.NativeBindingSourceRoot(string id, string directory, bool generated, bool frozen)
```

Identifies one component-local root without exposing a generator-specific contract.

**Parameter `id`:** An ordinal identity scoped to this component's selected generation.

**Parameter `directory`:** The checkout-relative or absolute external location; empty for generated output.

**Parameter `generated`:** Whether this root denotes the selected native output directory.

**Parameter `frozen`:** Whether source files must be copied before compilation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingSourceRoot.cs#L18).

## `Deconstruct`

<a id="api-2bcaebacdf4c5e65"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingSourceRoot.Deconstruct(System.String@,System.String@,System.Boolean@,System.Boolean@) da81058ec205771bffc659eb1c8a417ab2940a671088e83bd6ecdd8bac368c14 -->

```csharp
public void Inno.Build.Toolchains.NativeBindingSourceRoot.Deconstruct(out string id, out string directory, out bool generated, out bool frozen)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingSourceRoot.cs#L18).

## `Equals`

<a id="api-eba072eadf925dc8"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingSourceRoot.Equals(Inno.Build.Toolchains.NativeBindingSourceRoot) 48aae4a62296cb666f6ac405b6b49ca0b0a08e76e762dcd0e4fa8c741f1f11cd -->

```csharp
public bool Inno.Build.Toolchains.NativeBindingSourceRoot.Equals(Inno.Build.Toolchains.NativeBindingSourceRoot? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingSourceRoot.cs#L18).

## `Equals`

<a id="api-8807aac40b90d41c"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingSourceRoot.Equals(System.Object) 03f57cec59cac68524284d1f6977c9bacfe48c34fda19ce12585f37fe1761005 -->

```csharp
public override bool Inno.Build.Toolchains.NativeBindingSourceRoot.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingSourceRoot.cs#L18).

## `GetHashCode`

<a id="api-6863a709a1cd9c0f"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingSourceRoot.GetHashCode 9a1188b0d254d2d9d81fcd0f80187f9ef0498bcab3604c4d4afcfb008a0663f9 -->

```csharp
public override int Inno.Build.Toolchains.NativeBindingSourceRoot.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingSourceRoot.cs#L18).

## `op_Equality`

<a id="api-dacf56a7182c45dd"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingSourceRoot.op_Equality(Inno.Build.Toolchains.NativeBindingSourceRoot,Inno.Build.Toolchains.NativeBindingSourceRoot) ee2de049643a632db50aad1520ce8678667012adc46f10d73f677695ca2e62d9 -->

```csharp
public static bool Inno.Build.Toolchains.NativeBindingSourceRoot.operator ==(Inno.Build.Toolchains.NativeBindingSourceRoot? left, Inno.Build.Toolchains.NativeBindingSourceRoot? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingSourceRoot.cs#L18).

## `op_Inequality`

<a id="api-e35a7431d7df74bb"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingSourceRoot.op_Inequality(Inno.Build.Toolchains.NativeBindingSourceRoot,Inno.Build.Toolchains.NativeBindingSourceRoot) a87295fc32ab02d6e291cd183a1c523f37b74ebe1c69a4a676e7ae25fa9f2416 -->

```csharp
public static bool Inno.Build.Toolchains.NativeBindingSourceRoot.operator !=(Inno.Build.Toolchains.NativeBindingSourceRoot? left, Inno.Build.Toolchains.NativeBindingSourceRoot? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingSourceRoot.cs#L18).

## `ToString`

<a id="api-b517fe829bfb6cb1"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingSourceRoot.ToString 3a8029db56614b08d2219355808972d131873e27fb0b6882013bfbdd9fed3c7a -->

```csharp
public override string Inno.Build.Toolchains.NativeBindingSourceRoot.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingSourceRoot.cs#L18).

## `directory`

<a id="api-e16bcc72b22d347d"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingSourceRoot.directory 07ce781cefac8248b20d7cd62cf33e8972c7374deeab1eb3f106602bd259b4c4 -->

```csharp
public string Inno.Build.Toolchains.NativeBindingSourceRoot.directory { get; init; }
```

The checkout-relative or absolute external location; empty for generated output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingSourceRoot.cs#L20).

## `frozen`

<a id="api-e142fa44f28c5bd8"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingSourceRoot.frozen 761cce9a5561bd89461d007051df286be66b9f89d96e0dfbf9606661a3969170 -->

```csharp
public bool Inno.Build.Toolchains.NativeBindingSourceRoot.frozen { get; init; }
```

Whether source files must be copied before compilation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingSourceRoot.cs#L22).

## `generated`

<a id="api-7982d272d2709673"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingSourceRoot.generated 4e8f925ddb7ab4efda2499a079a64701c44fdb8705866ccbd45a7efc3b7b91d5 -->

```csharp
public bool Inno.Build.Toolchains.NativeBindingSourceRoot.generated { get; init; }
```

Whether this root denotes the selected native output directory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingSourceRoot.cs#L21).

## `id`

<a id="api-dc6add2dab94d60e"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingSourceRoot.id 122ceab8e1594d0f25e5c104ef3d7052c96d9ea7d436a9e8231133f45ad7a04d -->

```csharp
public string Inno.Build.Toolchains.NativeBindingSourceRoot.id { get; init; }
```

An ordinal identity scoped to this component's selected generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingSourceRoot.cs#L19).
