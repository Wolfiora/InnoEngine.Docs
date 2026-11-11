---
title: Supply serialization metadata for a deployment
description: Choose generated or dynamic declaration access without weakening encapsulation or introducing reflection fallback.
uid: extending.serialization-metadata
kind: how-to
owners:
  - Inno.Core.Serialization
  - Inno.Core.Serialization.Generators
  - Inno.Adapter.Serialization.DotNet
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
  - project.inno-core-serialization-generators#compilation-and-access-contract
exampleMode: host
exampleProjects:
  - Inno.Core.Serialization
---
# Supply serialization metadata for a deployment

Choose declaration access at the composition boundary. Editor authoring can use the dynamic DotNet adapter; a statically composed Player supplies generated metadata and converter registrations. Core always calls the explicit metadata contract and does not fall back to reflection when a shape is missing.

## Distinguish the two generators

| Generator | Input | Output |
| --- | --- | --- |
| `SerializationConverterGenerator` | A suitable DTO marked `[GenerateSerializationConverter]`. | Direct stateless converter and assembly-local converter catalog. |
| `SerializationMetadataGenerator` | Serializable declarations and reachable closed value shapes. | Typed accessors, construction, restoration, collection metadata and assembly-local metadata catalog. |

The generators implement Roslyn `IIncrementalGenerator`. `Initialize` is called by the compiler; it is not a gameplay API. The generator project is an analyzer dependency, not a runtime service.

The automatic DTO converter accepts a non-abstract, non-generic class implementing `ISerializable`, a parameterless constructor accessible to the generated code, and supported member shapes. Do not use it as an automatic solution for polymorphic identity graphs or custom restoration invariants. Use [an explicit converter](serialization-converters.md) for those contracts.

Metadata generation remains useful for types with explicit converters: it can describe their members, private construction and restoration hooks without taking over reference semantics.

## Freeze the selected contributions

The product composition supplies generated assembly registration methods. This host helper shows the actual metadata-source boundary without inventing a universal generated namespace for every project:

```csharp
using System;
using System.Collections.Generic;
using Inno.Core.Serialization;

static ISerializationMetadataSource FreezeMetadata(
    IReadOnlyList<Action<Action<SerializationTypeMetadata>>> generatedCatalogs
) {
    return new StaticSerializationMetadataSource(generatedCatalogs);
}
```

The source invokes each contribution during construction and does not retain the registration delegates. It retains the resulting declaration metadata for the selected deployment. Converter catalogs separately register converter declarations and factories with the existing type-catalog registrar; metadata registration alone does not install converters.

`RuntimeSerializationCatalog` and `RuntimeSerializationMetadataCatalog` are generated in assembly-owned namespaces. Use the actual generated output of the selected project and composition rather than guessing a shared process-wide catalog name.

## Preserve private shapes

Private nested DTOs, private structs and private member types keep their access level. When access requires a generated lexical contribution, the containing owners must be nongeneric `partial` types that can host those accessors. Nested owners pass contributions outward; the public assembly catalog does not directly name an inaccessible private type.

Do not make private fields public to satisfy the generator. Fix the required partial ownership declaration or choose an explicit supported contract. Open generic definitions are not complete deployment shapes; actual reachable closed shapes must be representable at compile time.

Base declarations contribute through their owning catalogs. Derived metadata composes base members and restoration hooks. Struct accessors update boxed values through typed code. Supported arrays, sequences, maps and collection factories are lowered to concrete generic calls; Core does not dynamically construct generic collection methods to compensate for missing metadata.

## Read diagnostics as contract failures

| Diagnostic | Meaning |
| --- | --- |
| `INNOSER001` | Automatic DTO converter target is not a supported concrete declaration. |
| `INNOSER002` | The automatic converter cannot call a suitable parameterless constructor. |
| `INNOSER003` | A selected member cannot support the generated operation. |
| `INNOSER004` | Duplicate serialized keys across the inheritance chain. |
| `INNOSER010` | Static metadata cannot provide the access required by a member's visibility. |
| `INNOSER011` | Invalid or repeated restoration hook. |
| `INNOSER012` | A private shape needs a suitable nongeneric partial lexical owner. |

A restoration hook is a nonstatic, nonvirtual `void` method with no arguments or one `SerializationContext` argument. A declaring type has at most one hook; inherited hooks are composed in declaration order.

The metadata generator discovers relevant generic serialization calls through syntax filtering followed by semantic binding, including inferred generic calls. It does not treat every method with a similar name as an engine serialization operation.

## Keep generated output and evidence separate

Generated accessors belong to their compilation and are not manually maintained source. Compile the actual generated output and exercise the selected metadata source when adding a new supported shape. A successful example compilation does not prove a complete Player composition or parity with every dynamic reflection case.

The existing runtime-generator tests cover generated compilation, private members and constructors, structs, inheritance hooks and closed collections. Serialization tests cover the dynamic provider and value pipeline. Select the applicable suites through the engine validation plan; do not add a second manually maintained test selector here.

See [the generator reference](../api/types/core-serialization-generators/index.md), [dynamic metadata](../backends/dotnet-serialization.md) and [serialization architecture](../architecture/serialization.md).
