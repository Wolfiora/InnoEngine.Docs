---
title: Contribute static type facts and factories
description: Register exact discovery metadata and linked generic constructions
  without runtime scanning or hidden fallback.
uid: extending.static-type-catalogs
kind: how-to
owners:
  - Inno.Extensibility.Catalogs
contracts:
  - project.inno-extensibility-catalogs#composition-and-factory-contract
exampleMode: host
exampleProjects:
  - Inno.Extensibility.Catalogs
---
# Contribute static type facts and factories

Static deployments contribute declaration facts through `ITypeCatalogRegistrar`. The contract is a small Foundation boundary without dependencies on module loading, registry transactions or a particular runtime. Each assembly owns its generated catalog; ordinary features should use that generator rather than maintain a parallel manual discovery list.

## Understand a contribution

This minimal host example demonstrates the actual registrar contract for a simple type with no additional discovery facts. A custom composition passes the registrar during catalog construction.

```csharp
using Inno.Extensibility.Catalogs;

public sealed class Example
{
}

public static class ExampleCatalog
{
    public static void Register(ITypeCatalogRegistrar registrar)
    {
        registrar.Register(
            new TypeCatalogMetadata(typeof(Example), [], [], [], [], []),
            static () => new Example());
    }
}
```

For a real declaration, metadata includes the complete base chain excluding `System.Object`, implemented interfaces, directly declared attributes, effective inherited attributes and parameterless override/virtual-slot facts. Empty arrays are correct only when the declaration actually has no such facts.

The metadata constructor defensively copies collections. Attribute instances are still objects belonging to the generation; immutable collection storage does not make mutable attribute state a persistence mechanism.

## Register declarations and constructions separately

`Register` contributes one declaration and an optional parameterless factory. Duplicate declarations fail. Constructors run only when requested, and their returned instances belong to the caller that requested construction.

`RegisterFactory` contributes a fully closed generic construction whose definition belongs to the completed catalog. It does not add another discoverable declaration or create a second stable type identity. Repeated registration of the same construction retains the first factory.

`RejectGenericConstruction` records a complete argument set proven invalid by compile-time constraints. It copies the arguments and treats repeated matching rejections idempotently. A rejection conflicting with a positive factory is invalid.

These outcomes are intentionally distinct:

| Resolution outcome | Meaning |
| --- | --- |
| Linked construction | The selected factory can create the exact closed type. |
| Proven constraint rejection | Generic resolution may return null so another applicable converter can be considered. |
| Unknown/unlinked valid construction | A deployment error; do not silently use reflection to construct it. |

Factories must produce the declared type and obey its ownership contract. A private constrained constructor needs generated access in the correct lexical owner with preserved generic parameter positions and constraints; it is not a reason to relax encapsulation.

## End the registrar's lifetime with composition

Contributors run synchronously on the composition thread. They must not retain the registrar or write through it after composition succeeds or fails. The receiving static catalog closes that capability and rejects retained/cross-thread use.

Type objects, attributes and factories belong to the resulting generation. Persist stable identities and neutral data rather than these live references. The Catalogs assembly itself neither scans assemblies nor manages retirement.

See [the exact catalog contracts](../architecture/projects/inno-extensibility-catalogs.md), [module composition](module-sources.md) and [serialization metadata](serialization-metadata.md) for a related generated consumer.
