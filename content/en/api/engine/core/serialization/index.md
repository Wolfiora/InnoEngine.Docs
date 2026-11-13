---
uid: api.directory.engine.core.serialization
title: "Serialization"
kind: landing
owners: []
---

# Serialization

Find types in this project category. Each type links to its exact declarations and member contracts.

## Categories

| Category | Purpose |
| --- | --- |
| [Generators](generators/index.md) | Compiler-owned converters and closed metadata access without runtime reflection fallback. |

## Types

| Type | Purpose |
| --- | --- |
| [GenerateSerializationConverterAttribute](generateserializationconverterattribute/index.md) | Requests a compile-time serialization converter for a closed data-transfer type. |
| [ISerializable](iserializable/index.md) | Marks a reference type whose annotated properties can participate in property-based serialization. |
| [ISerializationMetadataSource](iserializationmetadatasource/index.md) | Supplies declaration access and construction without choosing a runtime reflection implementation. |
| [OnSerializableRestored](onserializablerestored/index.md) | Marks one nonvirtual instance method to run after restoration succeeds, optionally receiving its SerializationContext. |
| [PropertyVisibility](propertyvisibility/index.md) | Defines member participation rules for persistence and runtime access. |
| [RequiresSerializationConverterAttribute](requiresserializationconverterattribute/index.md) | Requires a serializable type to use an explicitly discovered converter. |
| [SerializablePropertyAttribute](serializablepropertyattribute/index.md) | Declares a field or property as participating in T:Inno.Core.Serialization.ISerializable property persistence. |
| [SerializationCaptureKeyBuilder](serializationcapturekeybuilder/index.md) | Builds an exact neutral key during one owned synchronous converter capture callback. |
| [SerializationCollectionMetadata](serializationcollectionmetadata/index.md) | Supplies typed collection construction and map enumeration without runtime generic compilation. |
| [SerializationContext](serializationcontext/index.md) | Provides immutable, operation-independent context to serialization converters. |
| [SerializationConverter](serializationconverter-54912c4c6d23/index.md) | Identifies a concrete serialization converter for generation-scoped type discovery. |
| [SerializationConverter&lt;T&gt;](serializationconverter-ae9c0f58e217/index.md) | Defines the single advanced extension contract for serializing a specific value type. |
| [SerializationGeneration](serializationgeneration/index.md) | Pins one immutable converter generation so serialization remains deterministic across asynchronous continuations and extension reloads. |
| [SerializationMemberMetadata](serializationmembermetadata/index.md) | Captures one ordered serialization key and its generation-owned accessors. |
| [SerializationPropertyRestoreFailure](serializationpropertyrestorefailure/index.md) | Describes one property skipped during a compatible property restore. |
| [SerializationPropertyRestoreMode](serializationpropertyrestoremode/index.md) | Defines how independently captured serialized properties handle restore failures. |
| [SerializationPropertyRestoreResult](serializationpropertyrestoreresult/index.md) | Summarizes an independently captured property restore operation. |
| [SerializationPropertySnapshot](serializationpropertysnapshot/index.md) | Stores one independently encoded serializable property and its original declared type. |
| [SerializationReader](serializationreader/index.md) | Reads a structured object during the active deserialization operation. |
| [SerializationRegistry](serializationregistry/index.md) | Owns one generation-aware converter registry and provides deterministic root serialization operations. |
| [SerializationRevisionAttribute](serializationrevisionattribute/index.md) | Declares a sealed identity source&#39;s transient revision member, which covers all serialized state and pure getters. |
| [SerializationSnapshot](serializationsnapshot/index.md) | Holds an immutable, neutral capture of serialized values without retaining the source object or its generation. |
| [SerializationTypeMetadata](serializationtypemetadata/index.md) | Freezes member access, construction and restoration callbacks for an exact closed declaration. |
| [SerializationWriter](serializationwriter/index.md) | Writes a structured object during the active serialization operation. |
| [SerializedIdentityRemapper](serializedidentityremapper/index.md) | Rewrites selected scalar identities in a serialized value and its nested serialized payloads. |
| [SerializedProperty](serializedproperty/index.md) | Represents a discoverable property in editor and persistence workflows. |
| [StaticSerializationMetadataSource](staticserializationmetadatasource/index.md) | Resolves exact serialization shapes from explicit generated contributions without reflection fallback. |

