---
title: "UiDrawCommand"
description: "Reference for UiDrawCommand in Inno.UI."
uid: api.inno.ui.runtime-script.1078398e849ecdd1
kind: api
owners:
  - Inno.UI
apiSurface: runtime-script
contracts:
  - project.inno-ui#document-and-frame-contract
  - manual.scripting.use-script-api
---
# `UiDrawCommand`

This reference describes `UiDrawCommand` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.UI.UiDrawCommand>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-678c01996e20b452) | Method |
| [`Deconstruct`](#api-76db6fb04ef0c246) | Method |
| [`Equals`](#api-ce36f62c0708c8ed) | Method |
| [`Equals`](#api-c02d5e84a48c4736) | Method |
| [`GetHashCode`](#api-37cd9ac3afe66d02) | Method |
| [`op_Equality`](#api-1c1d59316df1b8c9) | Method |
| [`op_Inequality`](#api-77499d4337745927) | Method |
| [`ToString`](#api-d8f4d3286eff5fda) | Method |
| [`mesh`](#api-ccc8597b223439e5) | Property |
| [`scissor`](#api-6ae551abc8b6c5fe) | Property |
| [`scissorEnabled`](#api-034f18442c2fb094) | Property |
| [`texture`](#api-867b88a4ec49f689) | Property |

## Type declaration

<a id="api-1078398e849ecdd1"></a>
<!-- api: T:InnoEngine.UI.UiDrawCommand e3fb941c17a3cb69e970580de231b2f56d38b0b789b38d9fdca47494f5695735 -->

```csharp
public readonly struct InnoEngine.UI.UiDrawCommand : System.IEquatable<InnoEngine.UI.UiDrawCommand>
```

Describes one draw of a previously published mesh.

**Parameter `mesh`:** The ui mesh handle value used to initialize this instance.

**Parameter `texture`:** The ui texture handle value used to initialize this instance.

**Parameter `scissorEnabled`:** The bool value used to initialize this instance.

**Parameter `scissor`:** The ui clip rectangle value used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L151).

## `#ctor`

<a id="api-678c01996e20b452"></a>
<!-- api: M:InnoEngine.UI.UiDrawCommand.#ctor(InnoEngine.UI.UiMeshHandle,InnoEngine.UI.UiTextureHandle,System.Boolean,InnoEngine.UI.UiClipRectangle) 11d16f20fd4dcfda76b7dbf634c0af913552c74e65e16d815906386718a15c23 -->

```csharp
public InnoEngine.UI.UiDrawCommand.UiDrawCommand(InnoEngine.UI.UiMeshHandle mesh, InnoEngine.UI.UiTextureHandle texture, bool scissorEnabled, InnoEngine.UI.UiClipRectangle scissor)
```

Describes one draw of a previously published mesh.

**Parameter `mesh`:** The ui mesh handle value used to initialize this instance.

**Parameter `texture`:** The ui texture handle value used to initialize this instance.

**Parameter `scissorEnabled`:** The bool value used to initialize this instance.

**Parameter `scissor`:** The ui clip rectangle value used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L151).

## `Deconstruct`

<a id="api-76db6fb04ef0c246"></a>
<!-- api: M:InnoEngine.UI.UiDrawCommand.Deconstruct(InnoEngine.UI.UiMeshHandle@,InnoEngine.UI.UiTextureHandle@,System.Boolean@,InnoEngine.UI.UiClipRectangle@) f15f321d6ab60596c353d4a5af8c534f8b0c8dc66face640ddeaae2125f69fea -->

```csharp
public void InnoEngine.UI.UiDrawCommand.Deconstruct(out InnoEngine.UI.UiMeshHandle mesh, out InnoEngine.UI.UiTextureHandle texture, out bool scissorEnabled, out InnoEngine.UI.UiClipRectangle scissor)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L151).

## `Equals`

<a id="api-ce36f62c0708c8ed"></a>
<!-- api: M:InnoEngine.UI.UiDrawCommand.Equals(InnoEngine.UI.UiDrawCommand) 1a6dbd4d0102d2e808ff763083b0b8c1e854885438d4dce897f2cdefe8848b7a -->

```csharp
public bool InnoEngine.UI.UiDrawCommand.Equals(InnoEngine.UI.UiDrawCommand other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L151).

## `Equals`

<a id="api-c02d5e84a48c4736"></a>
<!-- api: M:InnoEngine.UI.UiDrawCommand.Equals(System.Object) 4632ad087773a4a02b9ec3d7cab129f56347af074b76f500c436acf1c3fd07e0 -->

```csharp
public override bool InnoEngine.UI.UiDrawCommand.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L151).

## `GetHashCode`

<a id="api-37cd9ac3afe66d02"></a>
<!-- api: M:InnoEngine.UI.UiDrawCommand.GetHashCode 8f0bfe146c4f497144698fbf2b9296a6dce1c2cdadb6c7944d691e63af6a83b5 -->

```csharp
public override int InnoEngine.UI.UiDrawCommand.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L151).

## `op_Equality`

<a id="api-1c1d59316df1b8c9"></a>
<!-- api: M:InnoEngine.UI.UiDrawCommand.op_Equality(InnoEngine.UI.UiDrawCommand,InnoEngine.UI.UiDrawCommand) 06847e8867d64c0a15008ab252bc48d153cf4e184bb36044ecd04a9b25a7e3a8 -->

```csharp
public static bool InnoEngine.UI.UiDrawCommand.operator ==(InnoEngine.UI.UiDrawCommand left, InnoEngine.UI.UiDrawCommand right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L151).

## `op_Inequality`

<a id="api-77499d4337745927"></a>
<!-- api: M:InnoEngine.UI.UiDrawCommand.op_Inequality(InnoEngine.UI.UiDrawCommand,InnoEngine.UI.UiDrawCommand) 0f8ebf563169710007d594cf5874755b85ef736007c221108bb73951e10ced07 -->

```csharp
public static bool InnoEngine.UI.UiDrawCommand.operator !=(InnoEngine.UI.UiDrawCommand left, InnoEngine.UI.UiDrawCommand right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L151).

## `ToString`

<a id="api-d8f4d3286eff5fda"></a>
<!-- api: M:InnoEngine.UI.UiDrawCommand.ToString b8c10b186fff6fe8c8ed7e2e6c1717bc61c4e84924274a2b3c7ae0899229c2da -->

```csharp
public override string InnoEngine.UI.UiDrawCommand.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L151).

## `mesh`

<a id="api-ccc8597b223439e5"></a>
<!-- api: P:InnoEngine.UI.UiDrawCommand.mesh 77322dc1c573eef939f7bda9d9e9cf592683ae25b9adb2663654582d75b18edf -->

```csharp
public InnoEngine.UI.UiMeshHandle InnoEngine.UI.UiDrawCommand.mesh { get; set; }
```

The ui mesh handle value used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L152).

## `scissor`

<a id="api-6ae551abc8b6c5fe"></a>
<!-- api: P:InnoEngine.UI.UiDrawCommand.scissor 5b6d0a9ed0ab2096ed53be0df2a354a3e1ba1a2d420a45ff3a5b8034629a5251 -->

```csharp
public InnoEngine.UI.UiClipRectangle InnoEngine.UI.UiDrawCommand.scissor { get; set; }
```

The ui clip rectangle value used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L155).

## `scissorEnabled`

<a id="api-034f18442c2fb094"></a>
<!-- api: P:InnoEngine.UI.UiDrawCommand.scissorEnabled f577c1e5b987cbb3cd8ea728ee858edfb7708aeb175880d8eaa2fd6bc17a69cf -->

```csharp
public bool InnoEngine.UI.UiDrawCommand.scissorEnabled { get; set; }
```

The bool value used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L154).

## `texture`

<a id="api-867b88a4ec49f689"></a>
<!-- api: P:InnoEngine.UI.UiDrawCommand.texture 8b1d581205571679e93c58cb62197e73b560d000a2822422873e415e6729f3e3 -->

```csharp
public InnoEngine.UI.UiTextureHandle InnoEngine.UI.UiDrawCommand.texture { get; set; }
```

The ui texture handle value used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L153).
