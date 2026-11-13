---
title: Inno.Runtime.Generators
description: "Compile-time subsystem, module and factory catalogs with explicit metadata access."
uid: project.inno-runtime-generators
kind: project
owners: [Inno.Runtime.Generators]
---
# Inno.Runtime.Generators

Compile-time subsystem, module and factory catalogs with explicit metadata access.

Start with [composing a runtime host](../../extending/runtime-host.md) and [runtime lifetime](../runtime-lifetime.md).

## Generated subsystem composition

This Roslyn incremental-generator assembly runs as an Analyzer or authoring compiler library, not as Player runtime code. Its public Initialize methods are compiler integration entry points, not game APIs.

`RuntimeSubsystemRegistration` marks a static factory with a stable ID, explicit composition-parameter type and `IRuntimeSubsystemFactory` result. `RuntimeSubsystemCatalog` marks the static partial catalog method returning an `IReadOnlyList<IRuntimeSubsystemFactory>`. Generation matches the composition type, sorts declarations by ID and emits direct calls with a frozen list. Returned descriptor IDs are checked again.

`INNORUN001` rejects empty catalogs, duplicate IDs, invalid factory result boundaries and unsupported method shapes. There is no runtime reflection scan or central plugin-type list. Add a domain contract/runtime, its distribution reference and one domain declaration without editing the shared host loops.

## Assembly-local catalogs

`RuntimeModuleCatalogGenerator` emits the owning assembly's catalog, explicit Register and ResolveType operations. Facts include declared/inherited attributes, bases, interfaces, overrides and accessible generated constructor factories. Required-member types do not receive a fabricated default factory. External internal declarations resolve through their owning catalog, not runtime probing.

`RuntimeFactoryGenerator` is selected by `InnoGeneratePlayerComposition` and composes referenced catalogs into static module/type/serialization sources and an activator. A game publication supplies its generated PlayerDeploymentDefinition; an engine-only empty code closure cannot satisfy a nonempty game manifest.

Serialization converter generation emits its own RuntimeSerializationCatalog, so same-round generated symbols do not need to be rediscovered by another generator. Script compilation runs the corresponding local registration and serialization generators; generator MVIDs participate in artifact identity.

## Generated access and failure

SerializationMetadataGenerator emits assembly-owned metadata access and restoration. Generated accessors handle private members; inherited cross-assembly contracts compose through their owners instead of reflecting private setters in the Player. `INNOSER010` rejects invalid access declarations and `INNOSER011` invalid/duplicate restore callbacks.

Closed generic factories derive from explicit type use, generic arguments and serializable value closure. Constraint analysis registers valid constructions and records known invalid combinations as rejected facts. `INNORUN002` rejects an inaccessible closed Converter or missing parameterless construction entry. Generic accessor helpers preserve type-parameter order, constraints and the required accessor signature.

Generator tests compile and invoke emitted public catalogs, not just compare source strings. Platform startup and AOT generic behavior still require independent product validation.

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/generators/Inno.Runtime.Generators/Inno.Runtime.Generators.csproj) defines the host declarations. Source API extraction does not establish script visibility, native behavior or completed generation retirement.

## API reference

[Browse exact types and members](../../api/engine/runtime/generators/index.md).
