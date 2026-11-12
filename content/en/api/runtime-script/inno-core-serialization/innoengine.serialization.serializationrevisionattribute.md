---
title: "SerializationRevisionAttribute"
description: "Reference for SerializationRevisionAttribute in Inno.Core.Serialization."
uid: api.inno.core.serialization.runtime-script.d5107e5e522f1c25
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: runtime-script
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
  - manual.scripting.use-script-api
---
# `SerializationRevisionAttribute`

This reference describes `SerializationRevisionAttribute` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-69a3ca4530f4b166) | Method |
| [`memberName`](#api-d17f8756e7d0b137) | Property |

## Type declaration

<a id="api-d5107e5e522f1c25"></a>
<!-- api: T:InnoEngine.Serialization.SerializationRevisionAttribute 1fca55c5838574c32b177eb9a2bd1039e07806c47efc557ffb3b2d5a9faaffb2 -->

```csharp
public sealed class InnoEngine.Serialization.SerializationRevisionAttribute : System.Attribute
```

Declares a sealed identity source's transient revision member, which covers all serialized state and pure getters.

**Constraints:** The member must return ulong or nullable ulong. Every relevant write must advance its value before mutation;
null declines reuse. The counter is not serialized. Metadata providers explicitly opt into this declaration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Metadata/SerializationRevisionAttribute.cs#L13).

## `#ctor`

<a id="api-69a3ca4530f4b166"></a>
<!-- api: M:InnoEngine.Serialization.SerializationRevisionAttribute.#ctor(System.String) 17dce667199009f5cd97f44ab0ff9639f0f6c076ec9d000e3224cc585beee559 -->

```csharp
public InnoEngine.Serialization.SerializationRevisionAttribute.SerializationRevisionAttribute(string memberName)
```

Selects the source-owned nonserialized revision field or property.

**Parameter `memberName`:** The exact nonstatic field or readable nonindexed property name.

**Throws `System.ArgumentException`:** The name is blank.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Metadata/SerializationRevisionAttribute.cs#L24).

## `memberName`

<a id="api-d17f8756e7d0b137"></a>
<!-- api: P:InnoEngine.Serialization.SerializationRevisionAttribute.memberName 19fbcb4342bf8df2321858ba19a33148ccf75a53da5cedd72d846b4bcce7f4fe -->

```csharp
public string InnoEngine.Serialization.SerializationRevisionAttribute.memberName { get; }
```

Gets the exact source-owned revision member name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Metadata/SerializationRevisionAttribute.cs#L33).
