---
title: "EditorFrame"
description: "Reference for EditorFrame in Inno.Editor.Core."
uid: api.inno.editor.core.2ca91ef48ac254c4
kind: api
owners:
  - Inno.Editor.Core
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
---
# `EditorFrame`

This reference describes `EditorFrame` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Editor.Core.EditorFrame>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4dbe95097f6c24d6) | Method |
| [`Deconstruct`](#api-45860fffd12b7fb9) | Method |
| [`Equals`](#api-101cda5a5a8b4e66) | Method |
| [`Equals`](#api-4b15d12fc73da6e6) | Method |
| [`GetHashCode`](#api-b5f23f20b78a2f8c) | Method |
| [`op_Equality`](#api-e41a80ae2e687e5f) | Method |
| [`op_Inequality`](#api-cdacac4e6381642b) | Method |
| [`ToString`](#api-457d39037cc54a32) | Method |
| [`deltaTime`](#api-599550f6a5aa2c33) | Property |
| [`isFocused`](#api-38b418164c61eebd) | Property |
| [`totalTime`](#api-834cd4cd9b3abf0d) | Property |

## Type declaration

<a id="api-2ca91ef48ac254c4"></a>
<!-- api: T:Inno.Editor.Core.EditorFrame e0f6e10611a987754c935378a84c2d3bfadea4828a38399358879269431321ef -->

```csharp
public readonly record struct Inno.Editor.Core.EditorFrame : System.IEquatable<Inno.Editor.Core.EditorFrame>
```

Describes one immutable editor frame.

**Parameter `deltaTime`:** The elapsed frame time in seconds.

**Parameter `totalTime`:** The absolute editor runtime in seconds.

**Parameter `isFocused`:** Whether an editor viewport owns application focus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorFrame.cs#L15).

## `#ctor`

<a id="api-4dbe95097f6c24d6"></a>
<!-- api: M:Inno.Editor.Core.EditorFrame.#ctor(System.Single,System.Single,System.Boolean) 91371509d5abffdc7e1276d49f3a86e65f800fa39a2f1f0005e5e2fa0720abfe -->

```csharp
public Inno.Editor.Core.EditorFrame.EditorFrame(float deltaTime, float totalTime, bool isFocused)
```

Describes one immutable editor frame.

**Parameter `deltaTime`:** The elapsed frame time in seconds.

**Parameter `totalTime`:** The absolute editor runtime in seconds.

**Parameter `isFocused`:** Whether an editor viewport owns application focus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorFrame.cs#L15).

## `Deconstruct`

<a id="api-45860fffd12b7fb9"></a>
<!-- api: M:Inno.Editor.Core.EditorFrame.Deconstruct(System.Single@,System.Single@,System.Boolean@) 7412c3928339178f8936277accbb73dac6de03c2c18921718a67242199943d11 -->

```csharp
public void Inno.Editor.Core.EditorFrame.Deconstruct(out float deltaTime, out float totalTime, out bool isFocused)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorFrame.cs#L15).

## `Equals`

<a id="api-101cda5a5a8b4e66"></a>
<!-- api: M:Inno.Editor.Core.EditorFrame.Equals(Inno.Editor.Core.EditorFrame) 1eaa7d0a076b25b76ef6212081d336c76af423485e68d785561260ee8ca0d9be -->

```csharp
public bool Inno.Editor.Core.EditorFrame.Equals(Inno.Editor.Core.EditorFrame other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorFrame.cs#L15).

## `Equals`

<a id="api-4b15d12fc73da6e6"></a>
<!-- api: M:Inno.Editor.Core.EditorFrame.Equals(System.Object) 05c0276d9acdb66f24d980754c146dd7ae6c247c0ff542b00b931a6755b1839e -->

```csharp
public override bool Inno.Editor.Core.EditorFrame.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorFrame.cs#L15).

## `GetHashCode`

<a id="api-b5f23f20b78a2f8c"></a>
<!-- api: M:Inno.Editor.Core.EditorFrame.GetHashCode 59155ff711ec617ef5cb37361429464219000599e9747588e43676e09e424ecd -->

```csharp
public override int Inno.Editor.Core.EditorFrame.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorFrame.cs#L15).

## `op_Equality`

<a id="api-e41a80ae2e687e5f"></a>
<!-- api: M:Inno.Editor.Core.EditorFrame.op_Equality(Inno.Editor.Core.EditorFrame,Inno.Editor.Core.EditorFrame) 51b39701de12324b6128ab2b797af95d80d1b21331164578b794384988781c6a -->

```csharp
public static bool Inno.Editor.Core.EditorFrame.operator ==(Inno.Editor.Core.EditorFrame left, Inno.Editor.Core.EditorFrame right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorFrame.cs#L15).

## `op_Inequality`

<a id="api-cdacac4e6381642b"></a>
<!-- api: M:Inno.Editor.Core.EditorFrame.op_Inequality(Inno.Editor.Core.EditorFrame,Inno.Editor.Core.EditorFrame) c30d4ef4edf8327b3a6344b2c7f87ff184bee3fc8e34f9ef0b714c4ef1f4805a -->

```csharp
public static bool Inno.Editor.Core.EditorFrame.operator !=(Inno.Editor.Core.EditorFrame left, Inno.Editor.Core.EditorFrame right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorFrame.cs#L15).

## `ToString`

<a id="api-457d39037cc54a32"></a>
<!-- api: M:Inno.Editor.Core.EditorFrame.ToString c398769f9cb9b1d7ea027b655e60d948e30fede8380fef71d3d11785d6b867a3 -->

```csharp
public override string Inno.Editor.Core.EditorFrame.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorFrame.cs#L15).

## `deltaTime`

<a id="api-599550f6a5aa2c33"></a>
<!-- api: P:Inno.Editor.Core.EditorFrame.deltaTime 1f0c136b7460b915b0fb483a405245435a8116ad53120807e88c6eccff661f88 -->

```csharp
public float Inno.Editor.Core.EditorFrame.deltaTime { get; init; }
```

The elapsed frame time in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorFrame.cs#L16).

## `isFocused`

<a id="api-38b418164c61eebd"></a>
<!-- api: P:Inno.Editor.Core.EditorFrame.isFocused c75286e4c7da90a1fd02f85b7c85586ae22e46b42858dfa71274e4b1fc250a0e -->

```csharp
public bool Inno.Editor.Core.EditorFrame.isFocused { get; init; }
```

Whether an editor viewport owns application focus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorFrame.cs#L18).

## `totalTime`

<a id="api-834cd4cd9b3abf0d"></a>
<!-- api: P:Inno.Editor.Core.EditorFrame.totalTime d706c0c4f657ce72bdc1653ba2555171ef601b76ec97e0cbc1ef016ef4ad9089 -->

```csharp
public float Inno.Editor.Core.EditorFrame.totalTime { get; init; }
```

The absolute editor runtime in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorFrame.cs#L17).
