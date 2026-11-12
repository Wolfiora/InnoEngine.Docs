---
title: "AudioPlayOptions"
description: "Reference for AudioPlayOptions in Inno.Audio."
uid: api.inno.audio.runtime-script.6fb1611b91a84791
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioPlayOptions`

This reference describes `AudioPlayOptions` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Audio.AudioPlayOptions>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-cb88dc6b1caa814c) | Method |
| [`Equals`](#api-cd9e263cf4486850) | Method |
| [`Equals`](#api-81b9621436f914bf) | Method |
| [`GetHashCode`](#api-6e21bd4b64cbccde) | Method |
| [`op_Equality`](#api-ef87dff37e02b930) | Method |
| [`op_Inequality`](#api-8d5e08f85aae0d33) | Method |
| [`ToString`](#api-840c627b6ac7b55c) | Method |
| [`bus`](#api-ecaebf815954979e) | Property |
| [`defaultValue`](#api-6a3c45da90e30edf) | Property |
| [`loadMode`](#api-d6bb2c7d14eb4255) | Property |
| [`loop`](#api-2ea880533116b016) | Property |
| [`pan`](#api-ae0a8c52f02a88ba) | Property |
| [`pitch`](#api-c13a9bb707cfc927) | Property |
| [`priority`](#api-3ea336616e2a2f5e) | Property |
| [`spatial`](#api-46e20c46a1f00ed2) | Property |
| [`volume`](#api-027f3d56826c2c23) | Property |

## Type declaration

<a id="api-6fb1611b91a84791"></a>
<!-- api: T:InnoEngine.Audio.AudioPlayOptions e2d73c568bcf3a180b943ab1bcff7f17ae003d816fc631d44412ffafceb465ca -->

```csharp
public readonly struct InnoEngine.Audio.AudioPlayOptions : System.IEquatable<InnoEngine.Audio.AudioPlayOptions>
```

Contains immutable parameters used to create one playback voice.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L418).

## `#ctor`

<a id="api-cb88dc6b1caa814c"></a>
<!-- api: M:InnoEngine.Audio.AudioPlayOptions.#ctor(System.Single,System.Single,System.Single,System.Boolean,System.Int32,System.Nullable{InnoEngine.Audio.AudioBusId},InnoEngine.Audio.AudioClipLoadMode,System.Nullable{InnoEngine.Audio.AudioSpatialOptions}) 87a55a9c044c34147775f67ad934fbe9a7e8ea748f5daf5e4cf680b87e1fa293 -->

```csharp
public InnoEngine.Audio.AudioPlayOptions.AudioPlayOptions(float volume = 1, float pitch = 1, float pan = 0, bool loop = false, int priority = 0, InnoEngine.Audio.AudioBusId? bus = null, InnoEngine.Audio.AudioClipLoadMode loadMode = InnoEngine.Audio.AudioClipLoadMode.Automatic, InnoEngine.Audio.AudioSpatialOptions? spatial = null)
```

Creates playback parameters.

**Parameter `volume`:** Linear gain applied to the voice.

**Parameter `pitch`:** Playback-rate multiplier.

**Parameter `pan`:** Stereo pan from negative one to positive one.

**Parameter `loop`:** Whether playback restarts after reaching the clip end.

**Parameter `priority`:** Voice retention priority; larger values are retained first.

**Parameter `bus`:** Destination mixer bus.

**Parameter `loadMode`:** Clip preparation override.

**Parameter `spatial`:** Optional spatial playback parameters.

**Throws `System.ArgumentOutOfRangeException`:** Gain, pitch, or pan is non-finite or outside its valid range, or the load mode is undefined.

**Throws `System.ArgumentException`:** The supplied destination bus is uninitialized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L461).

## `Equals`

<a id="api-cd9e263cf4486850"></a>
<!-- api: M:InnoEngine.Audio.AudioPlayOptions.Equals(InnoEngine.Audio.AudioPlayOptions) 588bdc89666fba1951192e8da5998dda2a4c3ed766feb0377ae0e74076b34716 -->

```csharp
public bool InnoEngine.Audio.AudioPlayOptions.Equals(InnoEngine.Audio.AudioPlayOptions other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L418).

## `Equals`

<a id="api-81b9621436f914bf"></a>
<!-- api: M:InnoEngine.Audio.AudioPlayOptions.Equals(System.Object) b6863dddcba9834844e9d093635de77ca992ef9e3b18716d1de6b75d53c41281 -->

```csharp
public override bool InnoEngine.Audio.AudioPlayOptions.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L418).

## `GetHashCode`

<a id="api-6e21bd4b64cbccde"></a>
<!-- api: M:InnoEngine.Audio.AudioPlayOptions.GetHashCode 0e9a8ce6925a50fba8e2db9315162f963aae58de86b749adcbe4ed46879d649e -->

```csharp
public override int InnoEngine.Audio.AudioPlayOptions.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L418).

## `op_Equality`

<a id="api-ef87dff37e02b930"></a>
<!-- api: M:InnoEngine.Audio.AudioPlayOptions.op_Equality(InnoEngine.Audio.AudioPlayOptions,InnoEngine.Audio.AudioPlayOptions) 54fef23aaa45ffa1347fd0623b4250bc047449db1dd4c400e4f06c6172bf487b -->

```csharp
public static bool InnoEngine.Audio.AudioPlayOptions.operator ==(InnoEngine.Audio.AudioPlayOptions left, InnoEngine.Audio.AudioPlayOptions right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L418).

## `op_Inequality`

<a id="api-8d5e08f85aae0d33"></a>
<!-- api: M:InnoEngine.Audio.AudioPlayOptions.op_Inequality(InnoEngine.Audio.AudioPlayOptions,InnoEngine.Audio.AudioPlayOptions) de97d8c7706a25120773fc47ec1ba66f3f199011382f9e7262aaf1251b2f9058 -->

```csharp
public static bool InnoEngine.Audio.AudioPlayOptions.operator !=(InnoEngine.Audio.AudioPlayOptions left, InnoEngine.Audio.AudioPlayOptions right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L418).

## `ToString`

<a id="api-840c627b6ac7b55c"></a>
<!-- api: M:InnoEngine.Audio.AudioPlayOptions.ToString 29a316b43d72a398a1f31335bb536707c94128178fb51ed907be0ca4949d1fef -->

```csharp
public override string InnoEngine.Audio.AudioPlayOptions.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L418).

## `bus`

<a id="api-ecaebf815954979e"></a>
<!-- api: P:InnoEngine.Audio.AudioPlayOptions.bus 5efb2d11af00b4e155cdcd2a284034cd414c55151c3b81821daf7c80a1762c76 -->

```csharp
public InnoEngine.Audio.AudioBusId InnoEngine.Audio.AudioPlayOptions.bus { get; }
```

Gets the destination mixer bus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L525).

## `defaultValue`

<a id="api-6a3c45da90e30edf"></a>
<!-- api: P:InnoEngine.Audio.AudioPlayOptions.defaultValue 94b794e96a9884f70ba2d54b84e8984217913cd121479c14fadb5b7797fe9b4c -->

```csharp
public static InnoEngine.Audio.AudioPlayOptions InnoEngine.Audio.AudioPlayOptions.defaultValue { get; }
```

Gets the default playback parameters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L495).

## `loadMode`

<a id="api-d6bb2c7d14eb4255"></a>
<!-- api: P:InnoEngine.Audio.AudioPlayOptions.loadMode e19a9c7c51e77edfce1f9ac85d30c35deefdfd47df177a81ca7eaefb0b761dde -->

```csharp
public InnoEngine.Audio.AudioClipLoadMode InnoEngine.Audio.AudioPlayOptions.loadMode { get; }
```

Gets the clip preparation override.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L530).

## `loop`

<a id="api-2ea880533116b016"></a>
<!-- api: P:InnoEngine.Audio.AudioPlayOptions.loop 7910b547cfef0c0590d0e67678ab3610ea62df6e18bd101d0e95e3ecdc767ff9 -->

```csharp
public bool InnoEngine.Audio.AudioPlayOptions.loop { get; }
```

Gets whether playback loops at the clip end.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L515).

## `pan`

<a id="api-ae0a8c52f02a88ba"></a>
<!-- api: P:InnoEngine.Audio.AudioPlayOptions.pan f82754a3903085369378d2221506b720a1437d89bcf6c676a69d84942bd8ba04 -->

```csharp
public float InnoEngine.Audio.AudioPlayOptions.pan { get; }
```

Gets the stereo pan value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L510).

## `pitch`

<a id="api-c13a9bb707cfc927"></a>
<!-- api: P:InnoEngine.Audio.AudioPlayOptions.pitch ac09f2dff0642afc077bd8d01780c341baae459a0300bdaf0f2dd2bd2ac1aedd -->

```csharp
public float InnoEngine.Audio.AudioPlayOptions.pitch { get; }
```

Gets the playback-rate multiplier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L505).

## `priority`

<a id="api-3ea336616e2a2f5e"></a>
<!-- api: P:InnoEngine.Audio.AudioPlayOptions.priority 32dbe3e4a28c0a15f3f89824f9ad0e2e30f5fb639504678be1556b51b0b2baa7 -->

```csharp
public int InnoEngine.Audio.AudioPlayOptions.priority { get; }
```

Gets the voice retention priority.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L520).

## `spatial`

<a id="api-46e20c46a1f00ed2"></a>
<!-- api: P:InnoEngine.Audio.AudioPlayOptions.spatial 71ae36566e2d13651b75378cf578fe92a21fb3a3fa3858a67d70cdedea7a5c2b -->

```csharp
public InnoEngine.Audio.AudioSpatialOptions? InnoEngine.Audio.AudioPlayOptions.spatial { get; }
```

Gets optional spatial playback parameters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L535).

## `volume`

<a id="api-027f3d56826c2c23"></a>
<!-- api: P:InnoEngine.Audio.AudioPlayOptions.volume 65ced600789ac3bb00b20af049eb8b35313544b7ed6e29e3edc372df928ddbd3 -->

```csharp
public float InnoEngine.Audio.AudioPlayOptions.volume { get; }
```

Gets the linear voice gain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L500).
